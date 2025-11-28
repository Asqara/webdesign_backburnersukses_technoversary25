// app/kegiatan/[slug]/VolunteerCTA.tsx
"use client";
import { useRouter } from "next/navigation";

export default function VolunteerCTA() {
  const router = useRouter();

  return (
    <section className=" py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Tertarik Bergabung dengan Kegiatan Kami?
        </h2>
        <p className="text-slate-600 mb-6">
          Jadilah bagian dari perubahan positif untuk lingkungan. Bergabunglah
          dengan Rimba Kembali sebagai volunteer dalam kegiatan kami
          selanjutnya.
        </p>
        <button
          onClick={() => router.push("/aksi-hijau/volunteer")}
          className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
        >
          Daftar Menjadi Volunteer
        </button>
      </div>
    </section>
  );
}
