// /app/profile/page.tsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useToggle } from "@/context/ToggleContext";
import { useVolunteer } from "@/hooks/useVolunteer";
import { volunteers as staticVolunteers } from "@/data/dummyVolunteer";

type Props = {};

function hashToNumber(seed: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function initialsFromName(name?: string | null) {
  if (!name) return "U";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function makeAnonAvatarDataUrl(seed: string, size = 160) {
  const hash = hashToNumber(seed || "anonymous");
  // pick two colors based on hash
  const colors = [
    "#F7FFE9",
    "#DFF7B8",
    "#B8F7D1",
    "#E9FFF1",
    "#CDEFDB",
    "#DDEFE6",
    "#E6F7E8",
  ];
  const bg = colors[hash % colors.length];
  const circleColor = "#ffffff";
  const initials = initialsFromName(seed);
  const fontSize = Math.floor(size / 3.6);

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>
    <rect width='100%' height='100%' fill='${bg}' rx='24' ry='24'/>
    <circle cx='${size / 2}' cy='${size / 2 - size * 0.08}' r='${
    size * 0.22
  }' fill='${circleColor}' opacity='0.16' />
    <text x='50%' y='55%' font-family='Inter, Roboto, Arial, sans-serif' font-size='${fontSize}' fill='#2b6b2b' font-weight='600' text-anchor='middle' dominant-baseline='middle'>${initials}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/* -----------------------
   Component
   ----------------------- */
export default function ProfilePage(props: Props) {
  const { user, profile, loading, signOut } = useAuth();
  const { openModal } = useToggle();
  const { myRegistrations } = useVolunteer();

  // avatar seed: prefer username, else email, else user id, else 'anon'
  const avatarSeed = useMemo(() => {
    return profile?.username ?? user?.email ?? user?.id ?? "anonymous";
  }, [profile, user]);

  const avatarUrl = useMemo(
    () => makeAnonAvatarDataUrl(avatarSeed, 160),
    [avatarSeed]
  );
  const myVolunteers = useMemo(() => {
    if (!myRegistrations.length) return [];

    return myRegistrations
      .map((reg) => staticVolunteers.find((v) => v.id === reg.volunteer_id))
      .filter(Boolean);
  }, [myRegistrations]);

  // Inline CSS variables palette
  const paletteStyle: React.CSSProperties = {
    // primary palette
    ["--color-primary-500" as any]: "#4d873d",
    ["--color-primary-400" as any]: "#5a9b45",
    ["--color-primary-300" as any]: "#cdf4ae",
    ["--color-primary-200" as any]: "#fff3b7",
    ["--color-primary-50" as any]: "#ffffff",
  };

  // Loading / placeholder content while auth is resolving
  if (loading) {
    return (
      <main
        style={paletteStyle}
        className="min-h-screen flex items-center justify-center bg-[var(--color-primary-50)]"
      >
        <div className="p-8 rounded-2xl shadow-md bg-white w-full max-w-xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-2/5" />
            <div className="h-40 bg-gray-200 rounded" />
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      </main>
    );
  }

  // If not logged in: show call-to-action buttons to open login/register modals
  if (!user) {
    return (
      <main
        style={paletteStyle}
        className="min-h-screen flex items-center justify-center bg-[var(--color-primary-50)] p-6"
      >
        <div className="max-w-2xl w-full text-center p-8 rounded-2xl shadow-lg bg-white">
          <h1
            className="text-3xl font-semibold mb-4"
            style={{ color: "var(--color-primary-500)" }}
          >
            Halo, Selamat Datang!
          </h1>
          <p className="text-gray-700 mb-6">
            Untuk melihat profile dan volunteer yang kamu daftarkan, silakan
            masuk atau buat akun terlebih dahulu.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => openModal("login")}
              className="px-6 py-3 rounded-2xl font-semibold shadow"
              style={{
                background: "linear-gradient(180deg, #F7FFE9 0%, #DFF7B8 100%)",
                color: "#2b6b2b",
              }}
            >
              Login
            </button>

            <button
              onClick={() => openModal("register")}
              className="px-6 py-3 rounded-2xl font-semibold shadow"
              style={{
                background: "linear-gradient(180deg, #fff3b7 0%, #cdf4ae 100%)",
                color: "#2b6b2b",
              }}
            >
              Register
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Belum punya email? Kamu bisa membuat akun dengan Google juga.
          </p>
        </div>
      </main>
    );
  }

  // Logged-in view: show profile card
  return (
    <main
      style={paletteStyle}
      className="min-h-[80vh] bg-[var(--color-primary-50)] p-6 flex items-start justify-center md:mt-30"
    >
      <div className="w-full max-w-3xl lg:max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT: profile card */}
        <section className="bg-white rounded-2xl p-6 shadow">
          <div className="flex flex-col items-center text-center">
            <div
              className="w-40 h-40 rounded-lg overflow-hidden mb-4"
              style={{ borderColor: "rgba(77,135,61,0.12)" }}
            >
              {/* anonymous svg avatar */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <h2
              className="text-2xl font-semibold"
              style={{ color: "var(--color-primary-500)" }}
            >
              {profile?.username ?? user.email?.split("@")[0] ?? "User"}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{user.email}</p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/aksi-hijau/volunteer"
                className="px-4 py-2 rounded-lg font-medium shadow"
                style={{
                  background: "var(--color-primary-300)",
                  color: "#1f7a4a",
                }}
              >
                Browse Volunteers
              </Link>

              <button
                onClick={() => signOut()}
                className="px-4 py-2 rounded-lg font-medium shadow"
                style={{
                  background: "transparent",
                  color: "var(--color-primary-500)",
                  border: "1px solid rgba(77,135,61,0.12)",
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </section>

        {/* RIGHT / BOTTOM: profile details & registrations (placeholder) */}
        <section className="md:col-span-2 bg-white rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4 text-primary-600">
            Tentang Saya
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center">
              <strong className="w-32 flex-shrink-0">Nama</strong>
              <span className="text-gray-900">
                : {profile?.username ?? "-"}
              </span>
            </div>
            <div className="flex items-center">
              <strong className="w-32 flex-shrink-0">Email</strong>
              <span className="text-gray-900">
                : {profile?.email ?? user.email ?? "-"}
              </span>
            </div>
            <div className="flex items-center">
              <strong className="w-32 flex-shrink-0">Terdaftar sejak</strong>
              <span className="text-gray-900">
                :{" "}
                {profile?.created_at
                  ? new Date(profile.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "—"}
              </span>
            </div>
          </div>

          <hr className="my-4" />

          <h4 className="text-md font-semibold mb-2">
            Volunteer yang saya daftarkan
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Daftar volunteer yang kamu ikuti akan muncul di sini. Jika belum
            mendaftar, kunjungi halaman{" "}
            <Link
              href="/aksi-hijau/volunteer"
              className="font-semibold"
              style={{ color: "var(--color-primary-500)" }}
            >
              Volunteers
            </Link>{" "}
            untuk melihat event dan mendaftar.
          </p>

          <div className="grid gap-4">
            {myVolunteers.length === 0 ? (
              <div className="p-4 rounded-lg border border-gray-100">
                <div className="text-sm text-gray-700">
                  Belum ada pendaftaran volunteer.
                </div>
              </div>
            ) : (
              myVolunteers.map((v) => (
                <div
                  key={v!.id}
                  className="p-4 rounded-xl border shadow-sm bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                >
                  <div>
                    <h5
                      className="font-semibold text-base"
                      style={{ color: "var(--color-primary-500)" }}
                    >
                      {v!.title}
                    </h5>
                    <div className="text-sm text-gray-600">{v!.location}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {v!.dateStart.toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      –{" "}
                      {v!.dateEnd.toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="px-3 py-1 text-xs rounded-full font-medium"
                      style={{
                        background: "var(--color-primary-300)",
                        color: "#256d45",
                      }}
                    >
                      Terdaftar
                    </span>

                    <Link
                      href={`/aksi-hijau/volunteer/${v!.id}`}
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-primary-500)" }}
                    >
                      Detail →
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
