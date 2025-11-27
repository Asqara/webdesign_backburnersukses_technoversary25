"use client";
import React, { useState, useEffect } from "react";

// Demo single-file React component using Tailwind CSS
// Image path comes from the uploaded file (local path)
// Usage: <DonationCardDemo />

const formatRupiah = (value: number) => {
  if (typeof value !== "number") return value;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};

interface DonationItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  goal: number;
  collected: number;
}

interface DonationCardProps {
  item: DonationItem;
  onDonate: () => void;
}

export default function DonationCard({ item, onDonate }: DonationCardProps) {
  const { title, description, imageUrl, goal, collected } = item;
  const percent = Math.min(100, Math.round((collected / goal) * 100));

  return (
    <div
      className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden p-4"
      style={{ borderRadius: 24 }}
    >
      <div className="rounded-xl overflow-hidden" style={{ height: 180 }}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-2 leading-snug">{description}</p>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="font-medium">
              Terkumpul {formatRupiah(collected)}
            </div>
            <div className="text-gray-400">{percent}%</div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${percent}%`,
                background: "linear-gradient(90deg, #6CC84A 0%, #2DB34A 100%)",
              }}
            />
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={onDonate}
              className="px-6 py-2 rounded-full text-sm font-medium shadow-md focus:outline-none"
              style={{
                background: "linear-gradient(180deg, #E8F9E8 0%, #DFF3D9 100%)",
                color: "#276A2B",
              }}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
