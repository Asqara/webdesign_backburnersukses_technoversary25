// components/VolunteerHero.tsx
"use client";

import Image from "next/image";
import { useToast } from "@/context/ToastProvider";
import { useVolunteer } from "@/hooks/useVolunteer";
import { useAuth } from "@/context/AuthContext";
import { useToggle } from "@/context/ToggleContext";
import { useState, useMemo } from "react";

export type DetailActivities = {
  theme: string;
  activities: string[];
};

export type Division = {
  title: string;
  content: string;
};

export type VolunteerItem = {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  dateStart: Date;
  dateEnd: Date;
  location?: string;
  batasRegistrasi?: Date | null;
  detailActivities?: DetailActivities;
  divisions?: Division[];
};

function formatDateRange(start: Date, end: Date) {
  const opts: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const s = new Intl.DateTimeFormat("id-ID", opts).format(start);
  const e = new Intl.DateTimeFormat("id-ID", opts).format(end);
  return `${s} — ${e}`;
}

function formatDateShort(d?: Date | null) {
  if (!d) return "-";
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(d);
}

/* Small icon components to avoid extra deps */
const IconCalendar = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="mr-2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 11H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M16 2V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconLocation = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="mr-2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconAlert = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="mr-2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9v4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17h.01"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function VolunteerHero({ data }: { data: VolunteerItem }) {
  const imageSrc = data.imageUrl || "/images/default-volunteer.png";
  const period = formatDateRange(data.dateStart, data.dateEnd);
  const batas = data.batasRegistrasi
    ? formatDateShort(data.batasRegistrasi)
    : null;

  const { user } = useAuth();
  const { openModal } = useToggle();
  const toast = useToast();

  const { myRegistrations, registerToVolunteer } = useVolunteer();

  // Local state to prevent multi-click while registering
  const [registering, setRegistering] = useState(false);

  // apakah user sudah terdaftar pada volunteer ini?
  const isRegistered = useMemo(() => {
    if (!myRegistrations || myRegistrations.length === 0) return false;
    return myRegistrations.some(
      (r) => String(r.volunteer_id) === String(data.id)
    );
  }, [myRegistrations, data.id]);

  // apakah batas registrasi sudah lewat?
  const registrationClosed = useMemo(() => {
    if (!data.batasRegistrasi) return false;
    return new Date() > new Date(data.batasRegistrasi);
  }, [data.batasRegistrasi]);

  const handleRegisterClick = async () => {
    // jika belum login -> munculkan modal login/register
    if (!user) {
      toast.info(
        "Silakan masuk terlebih dahulu untuk mendaftar sebagai relawan.",
        "Butuh Login"
      );
      openModal("login");
      return;
    }

    if (isRegistered) {
      toast.info("Kamu sudah terdaftar di volunteer ini.", "Sudah Terdaftar");
      return;
    }

    if (registrationClosed) {
      toast.error("Maaf, batas registrasi sudah lewat.", "Pendaftaran Ditutup");
      return;
    }

    try {
      setRegistering(true);
      await registerToVolunteer(data.id);
      toast.success(`Kamu berhasil terdaftar untuk ${data.title}`, "Berhasil");
    } catch (err: any) {
      // registerToVolunteer sudah meng-handle rollback & pesan error dasar,
      // tapi kita tampilkan juga toast jika ada error tak terduga.
      toast.error(err?.message ?? "Gagal mendaftar. Coba lagi nanti.", "Error");
    } finally {
      setRegistering(false);
    }
  };

  return (
    <section className="w-full">
      <div className="relative md:mt-40 h-[700px] md:h-[600px] w-full overflow-hidden">
        {/* Left image covers entire container; card will be positioned on top-right */}
        <Image
          src={imageSrc}
          alt={`image-${data.title}`}
          fill
          className="object-cover absolute inset-0 z-0 hidden md:block"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="relative block md:hidden rounded-xl w-[350px] h-40 mx-auto my-5 shadow-sm">
          <Image
            src={imageSrc}
            alt={`image-${data.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* bottom gradient overlay for legibility */}
        <div className="md:block hidden absolute bottom-0 left-0 right-0 h-[240px] bg-gradient-to-t from-white/90 to-transparent z-10 pointer-events-none" />

        {/* Card on right */}
        <div className="mx-auto md:mx-0 md:fixed md:top-40 right-12 z-20 w-[360px] md:w-[420px] min-h-[380px] bg-white rounded-2xl shadow-xl p-6 flex flex-col">
          {/* Badge */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                Project
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-2xl font-semibold leading-tight text-slate-900">
            {data.title}
          </h1>

          {/* subtag / small description */}
          {data.description && (
            <span className="mt-3 inline-block bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-md">
              {data.description}
            </span>
          )}

          {/* Info panel */}
          <div className="mt-6 rounded-xl border border-slate-100 overflow-hidden">
            <div className="p-4 flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 text-green-600">
                <IconCalendar />
              </div>
              <div>
                <div className="text-xs text-slate-500">Periode Project</div>
                <div className="mt-1 text-sm font-medium text-slate-800">
                  {period}
                </div>
              </div>
            </div>
            <div className="p-4 flex items-start gap-4 border-t border-slate-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 text-green-600">
                <IconLocation />
              </div>
              <div>
                <div className="text-xs text-slate-500">Lokasi</div>
                <div className="mt-1 text-sm font-medium text-slate-800">
                  {data.location || "-"}
                </div>
              </div>
            </div>

            {/* batas registrasi row */}
            <div className="px-4 py-3 bg-slate-50 flex items-center gap-3 border-t border-slate-100">
              <div className="flex items-center text-sm text-amber-700 gap-2">
                <IconAlert />
                <span className="text-sm font-medium">Batas Registrasi:</span>
              </div>
              <div className="ml-auto text-sm text-slate-700">
                {batas ?? "Tidak ditentukan"}
              </div>
            </div>
          </div>

          {/* Spacer and button */}
          <div className="mt-auto">
            <button
              type="button"
              onClick={handleRegisterClick}
              disabled={registering || isRegistered || registrationClosed}
              className={`w-full py-3 rounded-lg border font-semibold shadow-sm transition-transform active:scale-[0.997] ${
                isRegistered
                  ? "bg-slate-100 text-slate-700 cursor-not-allowed"
                  : registrationClosed
                  ? "bg-rose-50 text-rose-700 cursor-not-allowed"
                  : "bg-gradient-to-b from-green-100 to-green-50 border-green-200 text-green-800 hover:from-green-200"
              }`}
            >
              {isRegistered
                ? "Sudah Terdaftar"
                : registrationClosed
                ? "Pendaftaran Ditutup"
                : registering
                ? "Mendaftar..."
                : "Jadi Relawan"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
