// app/components/CardEvent.tsx
"use client";

import Link from "next/link";
import React from "react";

type Props = {
  logo: React.ReactNode;
  title: string;
  href?: string; // jika disediakan, tombol Detail akan navigasi ke sini
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function CardEvent({
  logo,
  title,
  href,
  onClick,
  className = "",
}: Props) {
  const ButtonContent = (
    <>
      <span>Detail</span>
      {/* simple inline arrow icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="inline-block"
      >
        <path
          d="M5 12h14M13 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  const buttonClasses = `
    inline-flex items-center justify-center gap-[12px]
    px-[29px] py-[11px]
    rounded-[38px]
    text-white font-semibold
    shadow-[0_0_10px_4px_rgba(0,0,0,0.10)]
    bg-[linear-gradient(180deg,#CDF4AE_0%,#4D873D_113.95%)]
    transition-transform duration-200 hover:scale-105
  `;

  return (
    <div
      className={`
        rounded-[20.209px]
        p-5
        shadow-[0_0_8.42px_3.368px_rgba(0,0,0,0.25)]
        bg-[linear-gradient(140deg,#FFF3B7_22.76%,#FFF_77.36%)]
        flex flex-col items-center gap-4
        ${className}
      `}
    >
      {/* Logo */}
      <div className="flex items-center justify-center">{logo}</div>

      {/* Tulisan */}
      <h3 className="text-2xl font-semibold text-gray-800 text-center">
        {title}
      </h3>

      {/* Tombol Detail: jika href ada pakai Link, kalau nggak pakai button biasa */}
      {href ? (
        <Link href={href} aria-label={`Buka detail ${title}`}>
          <div className={buttonClasses} role="link">
            {ButtonContent}
          </div>
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={buttonClasses}
          aria-label={`Buka detail ${title}`}
        >
          {ButtonContent}
        </button>
      )}
    </div>
  );
}
