// data/volunteer.ts
export interface DetailActivities {
  theme: string;
  activities: string[];
}

export interface Division {
  title: string;
  content: string;
}

export interface VolunteerItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dateStart: Date;
  dateEnd: Date;
  location: string;
  batasRegistrasi: Date; // deadline pendaftaran
  detailActivities: DetailActivities;
  divisions: Division[];
}

/**
 * Helper: buat tanggal default untuk tiap batch.
 * Note: Month is 0-indexed in JS Date (0 = Jan, 1 = Feb, ...).
 */
function makeDate(year: number, monthZeroBased: number, day: number) {
  return new Date(year, monthZeroBased, day);
}

function generateVolunteers(): VolunteerItem[] {
  const items: VolunteerItem[] = [];

  for (let i = 21; i <= 30; i++) {
    const dateStart = makeDate(2026, 2, 10); // 2 Feb 2025
    const dateEnd = makeDate(2026, 2, 20); // 4 Feb 2025

    // batasRegistrasi: 7 hari sebelum dateStart
    const batasRegistrasi = new Date(
      dateStart.getTime() - 7 * 24 * 60 * 60 * 1000
    );

    items.push({
      id: `rimba-kembali-batch-${i}`,
      title: `Rimba Kembali Batch #${i}`,
      description:
        "Bantu pelestarian hutan dan pemulihan area hijau yang rusak.",
      imageUrl: `/images/volunteers/rimba-batch-${i}.jpg`, // sesuaikan path kalau mau pindah ke /public/images/...
      dateStart,
      dateEnd,
      location: `Babakan ke-${i}`,
      batasRegistrasi,
      detailActivities: {
        theme: "Aksi Reboisasi Perdana",
        activities: [
          "Penanaman 300 bibit pohon di area hutan desa",
          "Pelatihan dasar konservasi untuk relawan",
          "Edukasi lingkungan untuk 40 anak sekolah dasar",
        ],
      },
      divisions: [
        {
          title: "Divisi Edukasi Lingkungan",
          content:
            "Mengembangkan modul edukasi, mengajar masyarakat & anak-anak desa, membuat aktivitas belajar kreatif.",
        },
        {
          title: "Divisi Rehabilitasi & Penanaman Pohon",
          content:
            "Melakukan penanaman bibit, perawatan area hijau, monitoring pertumbuhan dan pencatatan data lapangan.",
        },
        {
          title: "Divisi Media & Dokumentasi",
          content:
            "Mengambil foto/video, membuat storytelling kegiatan, mengelola konten sosial media program.",
        },
        {
          title: "Divisi Pemberdayaan Masyarakat",
          content:
            "Mendampingi UMKM desa, membantu pelatihan keterampilan ramah lingkungan, melakukan survei kebutuhan warga.",
        },
        {
          title: "Divisi Logistik & Operasional",
          content:
            "Mengatur kebutuhan alat, konsumsi, koordinasi mobilisasi relawan, serta memastikan kegiatan berjalan tertib.",
        },
      ],
    });
  }

  return items;
}

export const Volunteer: VolunteerItem[] = generateVolunteers();
export const volunteers = Volunteer; // alias, kalau kamu biasa impor `volunteers`
export default Volunteer;
