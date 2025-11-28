"use client";

import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastProvider";
import { useState } from "react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const { user, profile } = useAuth(); // panggil hook di top-level
  const toast = useToast();

  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  // Jangan setState langsung di render. Ambil status login dari user/profile.
  const isLoggedIn = Boolean(user);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    // validasi nominal & metode
    if (!amount || !paymentMethod) {
      toast.error("Mohon lengkapi nominal dan metode pembayaran");
      return;
    }

    const nominal = Number(amount);
    if (Number.isNaN(nominal) || nominal <= 0) {
      toast.error("Masukkan nominal donasi yang valid");
      return;
    }

    // jika belum login, wajib isi nama + kontak
    if (!isLoggedIn) {
      if (!name || !contact) {
        toast.error("Mohon lengkapi nama dan kontak untuk donasi tamu");
        return;
      }
    }

    try {
      setLoading(true);
      // panggil API / payment gateway di sini apabila ada
      // contoh sementara: delay kecil
      await new Promise((r) => setTimeout(r, 600));

      // pesan sukses; untuk user logged in tampilkan nama dari profile, else pakai input
      const donorName = isLoggedIn
        ? profile?.username ?? user?.email?.split("@")[0] ?? "Pengguna"
        : name ?? "Anonim";

      toast.success(
        `Donasi berhasil!\nNama: ${donorName}\nNominal: Rp${nominal.toLocaleString(
          "id-ID"
        )}\nMetode: ${paymentMethod}`
      );

      onClose();
    } catch (err: any) {
      toast.error(err?.message ?? "Gagal memproses donasi. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Donasi Sekarang
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Nominal Donasi */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Isi Nominal Donasi
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-500 font-medium">
                Rp
              </span>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Metode pembayaran
            </label>
            <div className="relative">
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
              >
                <option value="">Pilih</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="E-Wallet">E-Wallet</option>
                <option value="Kartu Kredit">Kartu Kredit</option>
                <option value="QRIS">QRIS</option>
              </select>
              <span className="absolute right-4 top-3 text-primary-400 font-medium text-sm">
                Pilih
              </span>
            </div>
          </div>

          {/* Jika sudah login: tampilkan username & email. Jika belum: tampilkan form nama + kontak */}
          {isLoggedIn ? (
            <div className="p-4 border rounded-lg bg-gray-50">
              <div className="text-sm text-gray-600">Anda login sebagai:</div>
              <div className="mt-2">
                <div className="font-medium text-gray-800">
                  {profile?.username ?? user?.email?.split("@")[0] ?? "User"}
                </div>
                <div className="text-sm text-gray-600">
                  {profile?.email ?? user?.email}
                </div>
              </div>
            </div>
          ) : (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Nomor Ponsel atau Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </>
          )}

          <div className="text-xs text-gray-500">
            {isLoggedIn
              ? "Donasi akan tercatat pada akun Anda."
              : "Donasi anonim — data hanya digunakan untuk konfirmasi pembayaran."}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Donasi</p>
            <p className="text-2xl font-bold text-gray-800">
              Rp{amount ? Number(amount).toLocaleString("id-ID") : "0"}
            </p>
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-8 py-3 bg-[linear-gradient(140deg,#FFF_1.03%,#CDF4AE_93.17%)] text-primary-500 font-semibold rounded-full transition disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Bayar"}
          </button>
        </div>
      </div>
    </div>
  );
}
