"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

/**
 * Local Profile type (keamanan: tidak bergantung pada export lain)
 */
export interface Profile {
  id: string;
  username?: string | null;
  email?: string | null;
  created_at?: string | null;
}

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signUp: (data: SignUpData) => Promise<void>;
  signIn: (data: SignInData) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch profile dari DB (profiles table)
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
      if (error) {
        // jika tidak ada profile, kita set null (bukan fatal)
        setProfile(null);
        return;
      }
      setProfile(data);
    } catch (e) {
      setProfile(null);
    }
  };

  // Upsert profile setelah signup / oauth
  const upsertProfile = async (
    userId: string,
    username?: string,
    email?: string
  ) => {
    try {
      const payload: Partial<Profile> = {
        id: userId,
        username: username ?? undefined,
        email: email ?? undefined,
        created_at: new Date().toISOString(),
      };
      const { error } = await supabase.from("profiles").upsert(payload);
      if (!error) {
        await fetchProfile(userId);
      }
    } catch (e) {
      // ignore but don't crash
      console.error("upsertProfile error", e);
    }
  };

  // Sign up
  const signUp = async ({ username, email, password }: SignUpData) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      });

      if (error) throw error;

      // Supabase mengirim email verifikasi (jika diaktifkan)
      if (data?.user) {
        // upsert profile (id = auth user id)
        await upsertProfile(data.user.id, username, email);
      }
    } finally {
      setLoading(false);
    }
  };

  // Sign in (email/password)
  const signIn = async ({ email, password }: SignInData) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      if (data?.user) {
        await fetchProfile(data.user.id);
        // redirect after login
        try {
          router.push("/");
        } catch {
          // ignore in some environments
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // Sign in with Google (OAuth)
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        },
      });

      if (error) throw error;
      // OAuth flow will redirect; no further client-side action needed here.
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setProfile(null);
      try {
        router.push("/");
      } catch {
        // ignore
      }
    } finally {
      setLoading(false);
    }
  };

  // Reset password (kirim email reset)
  const resetPassword = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${
          typeof window !== "undefined" ? window.location.origin : ""
        }/auth/reset-password`,
      });
      if (error) throw error;
    } finally {
      setLoading(false);
    }
  };

  // Setup auth state listener & initial session fetch
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!mounted) return;

        if (session?.user) {
          setUser(session.user);
          await fetchProfile(session.user.id);
        } else {
          setUser(null);
          setProfile(null);
        }
      } catch (e) {
        // ignore
      } finally {
        if (mounted) setLoading(false);
      }
    };

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      // update user/profile based on new session
      setUser(session?.user ?? null);

      if (session?.user) {
        await fetchProfile(session.user.id);

        try {
          const provider = (session.user as any)?.app_metadata?.provider;
          if (event === "SIGNED_IN" && provider === "google") {
            const username =
              (session.user.user_metadata as any)?.full_name ||
              session.user.email?.split("@")[0] ||
              "User";
            await upsertProfile(
              session.user.id,
              username,
              session.user.email ?? undefined
            );
          }
        } catch (e) {
          // ignore
        }
      } else {
        setProfile(null);
      }

      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const value: AuthContextType = {
    user,
    profile,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
