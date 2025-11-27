// components/VolunteerDetails.tsx
"use client";

import React from "react";

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
  dateStart?: Date;
  dateEnd?: Date;
  location?: string;
  batasRegistrasi?: Date | null;
  detailActivities?: DetailActivities | null;
  divisions?: Division[] | null;
};

/** Small card wrapper to match rounded/soft style */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      {children}
    </div>
  );
}

export default function VolunteerDetails({ data }: { data: VolunteerItem }) {
  const desc = data.description ?? "Tidak ada deskripsi.";
  const detail = data.detailActivities;
  const divisions = data.divisions ?? [];

  return (
    <div className="space-y-6 max-w-3xl my-10 px-4">
      {/* Deskripsi */}
      <Card>
        <h3 className="text-lg font-semibold mb-2">Deskripsi</h3>
        <p className="text-sm text-slate-700 leading-relaxed">{desc}</p>
      </Card>

      {/* Detail Aktivitas */}
      <Card>
        <h3 className="text-lg font-semibold mb-3">Detail Aktivitas</h3>

        {detail ? (
          <>
            <div className="text-sm text-slate-600 mb-2">
              <span className="font-medium">Tema:</span> {detail.theme}
            </div>

            <div className="text-sm text-slate-600">
              <div className="font-medium mb-2">Aktivitas:</div>
              <ul className="list-disc list-inside space-y-1">
                {detail.activities.map((act, idx) => (
                  <li key={idx} className="text-slate-700">
                    {act}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="text-sm text-slate-500">
            Detail aktivitas belum tersedia.
          </div>
        )}
      </Card>

      {/* Divisi */}
      <Card>
        <h3 className="text-lg font-semibold mb-4">Divisi</h3>

        <div className="space-y-4">
          {divisions.length === 0 && (
            <div className="text-sm text-slate-500">
              Belum ada pembagian divisi.
            </div>
          )}

          {divisions.map((d, i) => (
            <div key={d.title} className="text-sm">
              <div className="flex items-start gap-3">
                <div className="text-slate-500 w-6 shrink-0 font-semibold">
                  {i + 1}.
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-800">{d.title}</div>
                  <div className="mt-1 text-slate-700 leading-relaxed">
                    {d.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
