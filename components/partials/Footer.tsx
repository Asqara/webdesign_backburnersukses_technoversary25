// components/Footer.tsx
"use client";

import Image from "next/image";
import React from "react";

type LinkItem = {
  label: string;
  href?: string;
};

type FooterProps = {
  logoSrc?: string; // path or url to logo
  logoAlt?: string;
  copyright?: string;
  // three groups of links (About, Help, Legal)
  links?: {
    about?: LinkItem[];
    help?: LinkItem[];
    legal?: LinkItem[];
  };
  // Tailwind bg class, default uses primary-200
  bgClass?: string;
  // class applied to icons (for color/tint), default uses primary-800
  iconClass?: string;
};

export default function Footer({
  logoSrc,
  logoAlt = "Logo",
  copyright = `Copyright © ${new Date().getFullYear()} Rimba Kembali. All Right Reserved.`,
  links = {},
  bgClass = "bg-primary-200",
  iconClass = "text-primary-700",
}: FooterProps) {
  const about = links.about ?? [
    { label: "Community", href: "/about" },
    { label: "Contact", href: "/about" },
  ];
  const help = links.help ?? [
    { label: "Help Center", href: "/help" },
    { label: "Security FAQs", href: "/help" },
  ];
  const legal = links.legal ?? [
    { label: "Terms Of Use", href: "/legal" },
    { label: "Privacy Policy", href: "/legal" },
  ];
  const openExternal = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className={`${bgClass} pb-30 pt-10 md:py-10`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-8">
          <div className="shrink-0 flex flex-col items-center md:items-start gap-4 order-last md:order-first w-full md:w-auto">
            <div className="flex items-center gap-4">
              {logoSrc ? (
                <div className="relative w-36 h-15">
                  <Image
                    src={logoSrc}
                    alt={logoAlt}
                    fill
                    style={{ objectFit: "contain" }}
                    priority={false}
                  />
                </div>
              ) : (
                <div className="text-xl font-bold">Rimba Kembali</div>
              )}
            </div>

            <div className="flex gap-3 items-center">
              <button
                onClick={() => openExternal("https://mail.google.com")}
                aria-label="Email"
                className={`p-3 rounded-md ${iconClass} hover:opacity-90`}
              >
                <Image
                  src="/images/icons/email.svg"
                  alt="Email Logo"
                  width={40}
                  height={40}
                />
              </button>

              <button
                onClick={() => openExternal("https://www.instagram.com")}
                aria-label="Instagram"
                className={`p-3 rounded-md ${iconClass} hover:opacity-90`}
              >
                <Image
                  src="/images/icons/instagram.svg"
                  alt="Instagram Logo"
                  width={30}
                  height={30}
                />
              </button>

              <button
                onClick={() => openExternal("https://www.youtube.com")}
                aria-label="YouTube"
                className={`p-3 rounded-md ${iconClass} hover:opacity-90`}
              >
                <Image
                  src="/images/icons/youtube.svg"
                  alt="YouTube Logo"
                  width={40}
                  height={60}
                />
              </button>
            </div>

            <div className="text-xs text-gray-600 text-center md:text-left">
              {copyright}
            </div>
          </div>
          <div className="flex mx-auto w-full order-first md:order-last">
            <div className="grid grid-cols-3 md:gap-10 lg:gap-20 w-full">
              <div>
                <h4 className="font-semibold mb-2">About</h4>
                <ul className="space-y-2 text-sm">
                  {about.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="hover:underline">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Help</h4>
                <ul className="space-y-2 text-sm">
                  {help.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="hover:underline">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Legal</h4>
                <ul className="space-y-2 text-sm">
                  {legal.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="hover:underline">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
