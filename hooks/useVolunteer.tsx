"use client";

import { useState, useEffect } from "react";
import { supabase, Volunteer, Registration } from "@/lib/supabaseClient";
import { useAuth } from "@/context/AuthContext";
import { volunteers as staticVolunteers } from "@/data/dummyVolunteer";
import type { VolunteerItem } from "@/data/dummyVolunteer";
import { useToast } from "@/context/ToastProvider";

export function useVolunteer() {
  const { user } = useAuth();
  const toast = useToast();
  // ✅ Data volunteer statis
  const [volunteers] = useState<VolunteerItem[]>(staticVolunteers);

  // ✅ Registrasi tetap dari Supabase
  const [myRegistrations, setMyRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch registrasi user
  const fetchMyRegistrations = async () => {
    if (!user) {
      setMyRegistrations([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .eq("user_id", user.id);

    if (!error && data) {
      setMyRegistrations(data);
    }

    setLoading(false);
  };

  // ✅ Register ke volunteer (pakai volunteer.id string dari data statis)
  const registerToVolunteer = async (volunteerId: string) => {
    if (!user) {
      throw new Error("Anda harus login terlebih dahulu");
    }

    // Optimistic UI
    const tempRegistration: Registration = {
      id: "temp-" + Date.now(),
      user_id: user.id,
      volunteer_id: volunteerId,
      registered_at: new Date().toISOString(),
    };

    setMyRegistrations((prev) => [...prev, tempRegistration]);

    try {
      const { data, error } = await supabase
        .from("registrations")
        .insert({
          user_id: user.id,
          volunteer_id: volunteerId,
          registered_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;

      // Replace temp dengan data asli
      setMyRegistrations((prev) =>
        prev.map((r) => (r.id === tempRegistration.id ? data : r))
      );
    } catch (error: any) {
      // Rollback
      setMyRegistrations((prev) =>
        prev.filter((r) => r.id !== tempRegistration.id)
      );

      if (error.code === "23505") {
        toast.error("Anda sudah terdaftar");
      } else {
        toast.error("Gagal mendaftar: " + error.message);
      }
    }
  };

  // ✅ Initial load
  useEffect(() => {
    fetchMyRegistrations();
  }, [user]);

  return {
    volunteers, // dari data/volunteer.ts ✅
    myRegistrations, // dari Supabase ✅
    loading,
    registerToVolunteer,
    refresh: fetchMyRegistrations,
  };
}
