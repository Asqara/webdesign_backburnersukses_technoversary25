import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventCardProps {
  title: string;
  date: string; // formatted date string
  location: string;
  imageSrc: string;
  href?: string;
}

export function CardVolunteer({
  title,
  date,
  location,
  imageSrc,
  href,
}: EventCardProps) {
  const CardVolunteer = (
    <article className="w-80 h-86 bg-white rounded-2xl shadow-lg p-4 border border-transparent hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold leading-tight text-slate-900">
          {title}
        </h3>
        <div className="w-9 h-9 flex items-center justify-center bg-emerald-100 rounded-full">
          {/* arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-emerald-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="my-3 border-t border-slate-200" />

      <div className="flex flex-col items-start gap-3 text-sm text-slate-700 mb-3">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-emerald-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
            />
          </svg>
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-emerald-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13 21.314l-4.657-4.657A8 8 0 1 1 17.657 16.657z"
            />
            <circle cx="12" cy="10" r="2" />
          </svg>
          <span>{location}</span>
        </div>
      </div>

      <div className="mt-2 rounded-xl overflow-hidden h-40">
        <Image
          src={imageSrc}
          alt={title}
          width={420}
          height={240}
          className="object-cover w-full h-full"
        />
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} aria-label={`Buka ${title}`} className="inline-block">
        {CardVolunteer}
      </Link>
    );
  }

  return CardVolunteer;
}
