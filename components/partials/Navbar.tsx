"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useToggle } from "@/context/ToggleContext";
import { useAuth } from "@/context/AuthContext";

function IconHome({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z"
        fill="url(#paint0_linear_369_2438)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_369_2438"
          x1="20"
          y1="3"
          x2="5.6037"
          y2="22.1619"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0337487" stop-color="#78D160" />
          <stop offset="0.290476" stop-color="#508243" />
          <stop offset="0.662677" stop-color="#305426" />
          <stop offset="1" stop-color="#13210F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconUser({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7ZM8 13C6.67392 13 5.40215 13.5268 4.46447 14.4645C3.52678 15.4021 3 16.6739 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 16.6739 20.4732 15.4021 19.5355 14.4645C18.5979 13.5268 17.3261 13 16 13H8Z"
        fill="url(#paint0_linear_390_941)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_390_941"
          x1="21"
          y1="3"
          x2="7.15489"
          y2="23.7317"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0337487" stop-color="#78D160" />
          <stop offset="0.290476" stop-color="#508243" />
          <stop offset="0.662677" stop-color="#305426" />
          <stop offset="1" stop-color="#13210F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconKegiatan({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.6991 19H18.2991C18.1824 19.4333 17.9824 19.7833 17.6991 20.05C17.4158 20.3167 17.0491 20.4833 16.5991 20.55L5.69909 21.875C5.14909 21.9583 4.65309 21.8293 4.21109 21.488C3.76909 21.1467 3.51509 20.7007 3.44909 20.15L2.12409 9.225C2.05742 8.675 2.19076 8.18333 2.52409 7.75C2.85742 7.31667 3.29909 7.06667 3.84909 7L4.99909 6.85V8.85L4.09909 8.975L5.44909 19.9L12.6991 19ZM8.99909 17C8.44909 17 7.97842 16.8043 7.58709 16.413C7.19576 16.0217 6.99976 15.5507 6.99909 15V4C6.99909 3.45 7.19509 2.97933 7.58709 2.588C7.97909 2.19667 8.44976 2.00067 8.99909 2H19.9991C20.5491 2 21.0201 2.196 21.4121 2.588C21.8041 2.98 21.9998 3.45067 21.9991 4V15C21.9991 15.55 21.8034 16.021 21.4121 16.413C21.0208 16.805 20.5498 17.0007 19.9991 17H8.99909ZM8.99909 15H19.9991V4H8.99909V15ZM14.5241 14C15.6574 14 16.6201 13.6083 17.4121 12.825C18.2041 12.0417 18.6414 11.1 18.7241 10C17.5908 10 16.6201 10.3917 15.8121 11.175C15.0041 11.9583 14.5748 12.9 14.5241 14ZM14.5241 14C14.4741 12.9 14.0451 11.9583 13.2371 11.175C12.4291 10.3917 11.4581 10 10.3241 10C10.4074 11.1 10.8451 12.0417 11.6371 12.825C12.4291 13.6083 13.3914 14 14.5241 14ZM14.5241 11C14.8074 11 15.0451 10.904 15.2371 10.712C15.4291 10.52 15.5248 10.2827 15.5241 10V9.75L15.7741 9.85C16.0241 9.95 16.2784 9.975 16.5371 9.925C16.7958 9.875 16.9914 9.73333 17.1241 9.5C17.2741 9.25 17.3241 8.98333 17.2741 8.7C17.2241 8.41667 17.0574 8.21667 16.7741 8.1L16.5241 8L16.7741 7.9C17.0574 7.78333 17.2201 7.579 17.2621 7.287C17.3041 6.995 17.2581 6.73267 17.1241 6.5C16.9741 6.25 16.7741 6.10433 16.5241 6.063C16.2741 6.02167 16.0241 6.05067 15.7741 6.15L15.5241 6.25V6C15.5241 5.71667 15.4281 5.47933 15.2361 5.288C15.0441 5.09667 14.8071 5.00067 14.5251 5C14.2431 4.99933 14.0058 5.09533 13.8131 5.288C13.6204 5.48067 13.5244 5.718 13.5251 6V6.25L13.2751 6.15C13.0251 6.05 12.7751 6.02067 12.5251 6.062C12.2751 6.10333 12.0751 6.24933 11.9251 6.5C11.7918 6.73333 11.7461 6.996 11.7881 7.288C11.8301 7.58 11.9924 7.784 12.2751 7.9L12.5251 8L12.2751 8.1C11.9918 8.21667 11.8251 8.41667 11.7751 8.7C11.7251 8.98333 11.7751 9.25 11.9251 9.5C12.0584 9.73333 12.2544 9.875 12.5131 9.925C12.7718 9.975 13.0258 9.95 13.2751 9.85L13.5251 9.75V10C13.5251 10.2833 13.6211 10.521 13.8131 10.713C14.0051 10.905 14.2424 11.0007 14.5251 11M14.5251 9C14.2418 9 14.0044 8.904 13.8131 8.712C13.6218 8.52 13.5254 8.28267 13.5241 8C13.5228 7.71733 13.6188 7.48 13.8121 7.288C14.0054 7.096 14.2428 7 14.5241 7C14.8054 7 15.0431 7.096 15.2371 7.288C15.4311 7.48 15.5268 7.71733 15.5241 8C15.5214 8.28267 15.4254 8.52033 15.2361 8.713C15.0468 8.90567 14.8094 9.00133 14.5241 9"
        fill="url(#paint0_linear_369_2455)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_369_2455"
          x1="21.9991"
          y1="2"
          x2="6.6906"
          y2="24.9139"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0337487" stop-color="#78D160" />
          <stop offset="0.290476" stop-color="#508243" />
          <stop offset="0.662677" stop-color="#305426" />
          <stop offset="1" stop-color="#13210F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconBlog({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 5V19H5V5H19ZM21 3H3V21H21V3ZM17 17H7V16H17V17ZM17 15H7V14H17V15ZM17 12H7V7H17V12Z"
        fill="url(#paint0_linear_369_2452)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_369_2452"
          x1="21"
          y1="3"
          x2="7.15489"
          y2="23.7317"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0337487" stop-color="#78D160" />
          <stop offset="0.290476" stop-color="#508243" />
          <stop offset="0.662677" stop-color="#305426" />
          <stop offset="1" stop-color="#13210F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconAksi({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <path
        d="M18.7235 0L17.5235 0.4C15.4669 1.11454 13.2708 1.33382 11.1135 1.04C8.84665 0.688211 6.52642 1.00082 4.4335 1.94C3.32398 2.41245 2.35026 3.15491 1.60098 4.09981C0.851699 5.0447 0.350669 6.16201 0.143502 7.35C-0.0672299 8.49245 -0.0456733 9.66565 0.206886 10.7996C0.459445 11.9335 0.937832 13.005 1.6135 13.95C1.5535 14.16 1.4935 14.37 1.4435 14.58C1.03734 16.307 0.835957 18.0759 0.843502 19.85H2.8435C2.93853 18.3979 3.13569 16.9544 3.4335 15.53C4.82094 16.2792 6.37685 16.6613 7.9535 16.64C9.42398 16.639 10.8793 16.3432 12.2335 15.77C19.8435 12.52 18.8435 1.71 18.8435 1.26L18.7235 0ZM11.4535 13.93C8.8435 15.04 5.7235 14.85 3.9735 13.48C4.26935 12.4911 4.67522 11.5384 5.1835 10.64C5.57891 9.99355 6.04512 9.39318 6.5735 8.85C7.11361 8.30119 7.72191 7.82396 8.3835 7.43C9.75057 6.61255 11.2667 6.07545 12.8435 5.85V4.85C11.0292 4.78604 9.22583 5.15631 7.5835 5.93C5.90449 6.75039 4.4803 8.01212 3.4635 9.58C3.08647 10.179 2.7523 10.8039 2.4635 11.45C2.00002 10.2644 1.86864 8.97476 2.0835 7.72C2.22428 6.84153 2.5864 6.01338 3.13575 5.31357C3.6851 4.61376 4.40359 4.06534 5.2235 3.72C6.4188 3.16021 7.72363 2.87328 9.0435 2.88C9.6635 2.88 10.2735 2.94 10.9135 2.99C12.9178 3.2486 14.9528 3.12989 16.9135 2.64C16.8435 5.4 16.3435 11.85 11.4535 13.93Z"
        fill="#4d873d"
      />
      <defs>
        <linearGradient
          id="birdGradient"
          x1="18.8868"
          y1="7.88248e-07"
          x2="3.3416"
          y2="22.148"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0337487" stop-color="#78D160" />
          <stop offset="0.290476" stop-color="#508243" />
          <stop offset="0.662677" stop-color="#305426" />
          <stop offset="1" stop-color="#13210F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ----------------------
   AksiHijau Popup items
   ---------------------- */
const aksiItems = [
  {
    id: "donate",
    label: "Donasi",
    href: "/aksi-hijau/donasi",
    description: "Bantu dengan donasi untuk program lingkungan",
  },
  {
    id: "volunteer",
    label: "Relawan",
    href: "/aksi-hijau/volunteer",
    description: "Jadi relawan aktif dalam aksi nyata",
  },
];

/* ----------------------
   Navigation items
   ---------------------- */
const navItems = [
  { href: "/", label: "Home", icon: IconHome },
  {
    href: "/aksi-hijau",
    label: "Aksi Hijau",
    icon: IconAksi,
    hasDropdown: true,
  },
  { href: "/kegiatan", label: "Kegiatan", icon: IconKegiatan },
  { href: "/blog", label: "Blog Kreatif", icon: IconBlog },
  { href: "/profile", label: "Profile", icon: IconUser },
];

/* ----------------------
   Main Navbar
   ---------------------- */
export default function Navbar() {
  const pathname = usePathname();
  const [aksiOpen, setAksiOpen] = useState(false);
  const aksiRef = useRef<HTMLLIElement | null>(null);
  const { openModal } = useToggle();
  const aksiTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { user, loading } = useAuth();

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (aksiRef.current && !aksiRef.current.contains(e.target as Node)) {
        setAksiOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Esc key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAksiOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (aksiTimeoutRef.current) {
        clearTimeout(aksiTimeoutRef.current);
      }
    };
  }, []);

  const handleAksiHover = (open: boolean) => {
    if (aksiTimeoutRef.current) {
      clearTimeout(aksiTimeoutRef.current);
    }

    if (open) {
      setAksiOpen(true);
    } else {
      aksiTimeoutRef.current = setTimeout(() => {
        setAksiOpen(false);
      }, 150);
    }
  };

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };
  if (loading) return null;

  return (
    // NOTE:
    // - header sekarang selalu ada; posisi absolute/top hanya aktif di >= md
    // - on mobile header jadi static (tidak absolute) sehingga fixed mobile nav tidak terpotong
    <header className="lg:w-5xl md:w-[750px] z-50 md:absolute md:top-10 md:left-1/2 md:-translate-x-1/2">
      {/* Desktop navbar */}
      <nav className="hidden md:flex items-center justify-between px-10 rounded-3xl py-4 shadow-xl bg-primary-50">
        {/* left: logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src={"/main-logo.svg"}
              alt="Logo-Navbar"
              width={100}
              height={100}
              loading="eager"
            />
          </Link>
        </div>

        {/* center: links */}
        <ul className="flex items-center gap-8">
          {navItems
            .filter((item) => item.href !== "/profile")
            .map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={isActive(item.href)}
                hasDropdown={item.hasDropdown}
                onMouseEnter={() => item.hasDropdown && handleAksiHover(true)}
                onMouseLeave={() => item.hasDropdown && handleAksiHover(false)}
                aksiRef={item.hasDropdown ? aksiRef : undefined}
                aksiOpen={item.hasDropdown ? aksiOpen : false}
              />
            ))}
        </ul>

        {/* right: join button */}
        <div>
          {!user ? (
            // BELUM LOGIN
            <button
              onClick={() => openModal("login")}
              className="inline-flex items-center justify-center px-6 py-2 shadow-xl rounded-2xl text-base font-semibold"
              style={{
                background: "linear-gradient(180deg, #F7FFE9 0%, #DFF7B8 100%)",
                color: "#2b6b2b",
              }}
            >
              Join
            </button>
          ) : (
            // SUDAH LOGIN
            <Link
              href="/profile"
              className="inline-flex items-center justify-center px-6 py-2 shadow-xl rounded-2xl text-base font-semibold"
              style={{
                background: "linear-gradient(180deg, #E9FFF1 0%, #B8F7D1 100%)",
                color: "#1f7a4a",
              }}
            >
              Profile
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile: bottom navigation only */}
      {/* Note: container ini hanya tampil di < md (md:hidden) */}
      <div className="md:hidden">
        {/* Bottom fixed nav */}
        <nav
          className="
    fixed inset-x-0 bottom-5 mx-auto z-99
    max-w-xs px-5 py-2
    rounded-[63px]
    border border-[#5A9B45]
    bg-[linear-gradient(140deg,#FFFFFF_1.03%,#CDF4AE_93.17%)]
    shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]
  "
          aria-label="Mobile bottom navigation"
        >
          <ul className="flex items-center justify-between">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActive(item.href)}
                hasDropdown={item.hasDropdown}
                onAksiClick={() => item.hasDropdown && setAksiOpen(true)}
              />
            ))}
          </ul>
        </nav>

        {/* Mobile aksi popup (chat-like) */}
        <div
          className={`fixed inset-0 z-40 flex items-end justify-center transition-opacity duration-300 ${
            aksiOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!aksiOpen}
        >
          {/* overlay background (semi-transparent) */}
          <button
            type="button"
            aria-hidden
            onClick={() => setAksiOpen(false)}
            className={`absolute inset-0 bg-black/40 transition-opacity z-0 pointer-events-none ${
              aksiOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`relative w-full max-w-sm mx-4 mb-24 bg-white rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-300 z-50${
              aksiOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 scale-95 opacity-0"
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <IconAksi className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">
                      Aksi Hijau
                    </div>
                    <div className="text-sm text-gray-500">
                      Pilih aksi untuk ikut serta
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setAksiOpen(false)}
                  aria-label="close"
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Aksi Items - Kembali ke Link */}
              <div className="space-y-2">
                {aksiItems.map((it) => (
                  <Link
                    key={it.id}
                    href={it.href}
                    onClick={() => setAksiOpen(false)}
                    className="block px-4 py-3 rounded-xl border border-gray-100 hover:bg-green-50 hover:border-green-200 transition-all duration-200 pointer-events-auto"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-gray-800">
                        {it.label}
                      </div>
                      <div className="text-gray-400 transform transition-transform group-hover:translate-x-1">
                        →
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {it.description}
                    </p>
                  </Link>
                ))}
              </div>

              {/* View All Button */}
              <div className="mt-4">
                <Link
                  href="/aksi-hijau"
                  onClick={() => setAksiOpen(false)}
                  className="block pointer-events-auto text-center text-sm font-semibold text-primary-500 border-2 border-primary-100 rounded-xl py-3 hover:bg-primary-50 transition-colors"
                >
                  Lihat Semua Aksi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ----------------------
  Desktop NavLink component
  ---------------------- */
function NavLink({
  href,
  label,
  active,
  hasDropdown,
  onMouseEnter,
  onMouseLeave,
  aksiRef,
  aksiOpen,
}: {
  href: string;
  label: string;
  active?: boolean;
  hasDropdown?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  aksiRef?: React.RefObject<HTMLLIElement | null>;
  aksiOpen?: boolean;
}) {
  if (hasDropdown) {
    return (
      <li
        ref={aksiRef}
        className="relative group z-50"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`px-3 py-2 text-sm transition-colors flex items-center gap-2 cursor-pointer ${
            active
              ? "text-primary-500 font-semibold"
              : "text-primary-400 hover:text-primary-500"
          }`}
        >
          <span>{label}</span>
          {/* Animated chevron */}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              aksiOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Animated underline */}
        <span
          className={`absolute left-0 -bottom-1 h-0.5 bg-primary-500 rounded-full transition-all duration-300 ${
            active || aksiOpen ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />

        {/* Desktop Dropdown */}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 origin-top ${
            aksiOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <IconAksi className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <div className="text-base font-bold text-gray-800">
                  Aksi Hijau
                </div>
                <div className="text-xs text-gray-500">
                  Pilih aksi untuk ikut serta
                </div>
              </div>
            </div>

            {/* Aksi Items */}
            <div className="space-y-2">
              {aksiItems.map((it) => (
                <Link key={it.id} href={it.href}>
                  <div className="group/item block px-4 py-3 rounded-xl border border-gray-100 hover:bg-green-50 hover:border-green-200 transition-all duration-200">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-gray-800">
                        {it.label}
                      </div>
                      <div className="text-gray-400 transition-transform group-hover/item:translate-x-1">
                        →
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {it.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <Link href="/aksi-hijau">
                <div className="block text-center text-sm font-semibold text-primary-500 border-2 border-primary-100 rounded-xl py-2.5 hover:bg-primary-50 transition-colors">
                  Lihat Semua Aksi
                </div>
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="relative group">
      <Link href={href}>
        <div
          className={`px-3 py-2 text-sm transition-colors flex items-center gap-2 ${
            active
              ? "text-primary-500 font-semibold"
              : "text-primary-400 hover:text-primary-500"
          }`}
        >
          <span>{label}</span>
        </div>
      </Link>

      {/* Animated underline */}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-primary-500 rounded-full transition-all duration-300 group-hover:w-full ${
          active ? "w-full" : "w-0"
        }`}
      />
    </li>
  );
}

/* ----------------------
  Mobile NavItem component
  ---------------------- */
function MobileNavItem({
  href,
  label,
  icon: Icon,
  active,
  hasDropdown,
  onAksiClick,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  hasDropdown?: boolean;
  onAksiClick?: () => void;
}) {
  if (hasDropdown) {
    return (
      <li className="flex-1 flex justify-center">
        <button
          onClick={onAksiClick}
          className={`flex flex-col items-center text-xs transition-all duration-200 ${
            active ? "text-primary-500 font-semibold" : "text-gray-600"
          }`}
          aria-haspopup="true"
        >
          <div
            className={`relative p-2 rounded-full transition-all duration-200 ${
              active
                ? "bg-white/34 shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]"
                : "hover:bg-gray-100"
            }`}
          >
            <Icon className="w-6 h-6" />
          </div>
        </button>
      </li>
    );
  }

  return (
    <li className="flex-1 flex justify-center">
      <Link href={href} className="flex flex-col items-center text-xs">
        <div
          className={`flex flex-col items-center transition-all duration-200 ${
            active ? "text-primary-500 font-semibold" : "text-gray-600"
          }`}
        >
          <div
            className={`relative p-2 rounded-full transition-all duration-200 ${
              active
                ? "bg-white/34 shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]"
                : "hover:bg-gray-100"
            }`}
          >
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </Link>
    </li>
  );
}
