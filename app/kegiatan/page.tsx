// app/kegiatan/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import MainContainer from "@/components/ui/MainContainer";
import { DUMMY_ACTIVITIES, ActivityItem } from "@/data/dummyActivities";

function formatDaysAgo(days?: number) {
  if (!days || days <= 0) return "hari ini";
  if (days === 1) return "1 hari lalu";
  return `${days} hari lalu`;
}

/* ------------- Small UI parts ------------- */
function FolderIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative items-center justify-center ${className || ""}`}>
      <Image
        src="/images/kegiatan-image.svg"
        alt="Ilustrasi Kegiatan"
        width={320}
        height={320}
        className="object-contain"
      />
    </div>
  );
}

/* ------------- Activity Card components ------------- */

function BigActivityCard({ item }: { item: ActivityItem }) {
  return (
    <article className="flex flex-col md:flex-row gap-6 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full md:w-2/5 rounded-xl overflow-hidden border border-slate-100">
        {item.imageUrl ? (
          <div className="relative w-full h-48 md:h-64">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-48 md:h-64 bg-slate-50 flex items-center justify-center text-slate-400">
            No image
          </div>
        )}
      </div>
      <div className="flex-1 p-2 md:p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-slate-500">
            {formatDaysAgo(item.daysAgo)}
          </div>
          {item.readTime && (
            <div className="text-xs text-slate-500">⏱ {item.readTime}</div>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
          {item.title}
        </h3>

        <p className="text-sm text-slate-700 leading-relaxed line-clamp-3 mb-4">
          {item.excerpt}
        </p>

        {item.author && (
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              {item.author.avatar ? (
                <Image
                  src={item.author.avatar}
                  alt={item.author.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="text-sm text-slate-600">{item.author.name}</div>
          </div>
        )}

        <div className="mt-4">
          <Link
            href={`/kegiatan/${item.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full border border-green-600 shadow-sm hover:bg-green-700 transition-colors"
          >
            Baca Selengkapnya
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

function SmallActivityCard({ item }: { item: ActivityItem }) {
  return (
    <article className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="rounded-xl overflow-hidden h-48">
        {item.imageUrl ? (
          <div className="relative w-full h-full">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400">
            No image
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-slate-500">
            {formatDaysAgo(item.daysAgo)}
          </div>
          {item.readTime && (
            <div className="text-xs text-slate-500">⏱ {item.readTime}</div>
          )}
        </div>

        <h4 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
          {item.title}
        </h4>

        <p className="text-sm text-slate-700 line-clamp-2 mb-3">
          {item.excerpt}
        </p>

        {item.author && (
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
              {item.author.avatar ? (
                <Image
                  src={item.author.avatar}
                  alt={item.author.name}
                  width={24}
                  height={24}
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="text-xs text-slate-600">{item.author.name}</div>
          </div>
        )}

        <div className="mt-3">
          <Link
            href={`/kegiatan/${item.slug}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-full border border-green-600 hover:bg-green-700 transition-colors"
          >
            Baca Selengkapnya
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ------------- Main Section ------------- */

export default function ActivitiesSection() {
  const featured = DUMMY_ACTIVITIES[0];
  const otherActivities = DUMMY_ACTIVITIES.slice(1);

  return (
    <MainContainer className="min-h-screen py-8 my-10 md:mt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Kegiatan Rimba Kembali
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Dokumentasi lengkap berbagai kegiatan volunteer Rimba Kembali dalam
            aksi nyata pelestarian lingkungan, edukasi, dan pemberdayaan
            masyarakat.
          </p>

          <div className="flex justify-center">
            <FolderIllustration className="w-64 h-64 md:w-80 md:h-80" />
          </div>
        </div>

        {/* Featured Activity */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Kegiatan Terbaru
          </h2>
          {featured && <BigActivityCard item={featured} />}
        </section>

        {/* All Activities Grid */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Semua Kegiatan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherActivities.map((activity) => (
              <SmallActivityCard key={activity.id} item={activity} />
            ))}
          </div>
        </section>

        {/* Load More Button */}
      </div>
    </MainContainer>
  );
}
