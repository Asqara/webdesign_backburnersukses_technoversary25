"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/partials/Navbar";
import Footer from "@/components/partials/Footer";
import LoginModalWrapper from "@/components/ui/LoginModalWrapper";
import { ToastProvider } from "@/context/ToastProvider";
import { AuthProvider } from "@/context/AuthContext";
import { ToggleProvider } from "@/context/ToggleContext";
import RunningTreeLoader from "@/components/partials/RunningTreeLoader";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <RunningTreeLoader />
      ) : (
        <AuthProvider>
          <ToastProvider>
            <ToggleProvider>
              <Navbar />
              <LoginModalWrapper />
              {children}
              <Footer logoSrc="/main-logo.svg" />
            </ToggleProvider>
          </ToastProvider>
        </AuthProvider>
      )}
    </>
  );
}
