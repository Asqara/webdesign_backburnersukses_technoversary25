// data/dummyActivities.ts
export type ActivityItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  daysAgo?: number;
  readTime?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  createdAt?: string;
  content?: {
    intro?: string;
    sections?: {
      heading: string;
      paragraphs?: string[];
      items?: string[];
    }[];
    image?: string;
    conclusion?: string;
  };
};

export const DUMMY_ACTIVITIES: ActivityItem[] = [
  {
    id: "a1",
    slug: "rimba-kembali-batch-7",
    title: "Rimba Kembali #Batch 7 - Aksi Nyata Pelestarian Lingkungan",
    excerpt:
      "Rimba Kembali resmi memulai kegiatan batch pertamanya melalui aksi lapangan yang berfokus pada pelestarian lingkungan. Kegiatan ini melibatkan para volunteer dalam berbagai aktivitas konservasi...",
    imageUrl: "/images/activities/activity-1.jpg",
    daysAgo: 2,
    readTime: "5 menit baca",
    author: {
      name: "Ahmad Wijaya",
      avatar: "/images/authors/ahmad-wijaya.jpg",
    },
    createdAt: "2024-01-15",
    content: {
      intro:
        "Batch ketujuh Rimba Kembali telah resmi dimulai dengan semangat dan komitmen yang tinggi dari seluruh relawan. Program ini difokuskan pada aksi nyata pelestarian lingkungan melalui berbagai kegiatan lapangan yang melibatkan masyarakat setempat.",
      sections: [
        {
          heading: "Kegiatan Utama Batch 7",
          items: [
            "Penanaman 500 bibit pohon endemik di kawasan hutan lindung",
            "Pembersihan sampah di sepanjang aliran sungai sejauh 3 km",
            "Edukasi masyarakat tentang pentingnya menjaga ekosistem hutan",
            "Pembuatan biopori untuk meningkatkan resapan air tanah",
          ],
        },
        {
          heading: "Dampak yang Dicapai",
          paragraphs: [
            "Dalam kurun waktu dua minggu, para relawan berhasil menanam 500 bibit pohon yang terdiri dari berbagai spesies endemik. Kegiatan ini tidak hanya bertujuan untuk menghijaukan kembali kawasan yang gundul, tetapi juga menjaga biodiversitas lokal.",
            "Pembersihan sungai berhasil mengumpulkan lebih dari 200 kg sampah plastik dan organik. Sampah-sampah ini kemudian dipilah untuk didaur ulang dan diolah menjadi kompos.",
          ],
        },
      ],
      image: "/images/activities/activity-1-detail.jpg",
      conclusion:
        "Batch 7 Rimba Kembali telah membuktikan bahwa kolaborasi antara relawan dan masyarakat dapat menciptakan dampak positif yang signifikan bagi lingkungan. Semangat ini akan terus kami tularkan ke batch-batch berikutnya.",
    },
  },
  {
    id: "a2",
    slug: "rimba-kembali-batch-9",
    title: "Rimba Kembali #Batch 9 - Konservasi Penyu dan Ekosistem Pesisir",
    excerpt:
      "Rimba kembali melanjutkan rangkaian program lingkungannya melalui kegiatan batch kedua yang berfokus pada penyu dan ekosistem pesisir pantai...",
    imageUrl: "/images/activities/activity-2.jpg",
    daysAgo: 6,
    readTime: "4 menit baca",
    author: {
      name: "Sari Dewi",
      avatar: "/images/authors/sari-dewi.jpg",
    },
    createdAt: "2024-01-10",
    content: {
      intro:
        "Batch kesembilan Rimba Kembali mengusung tema konservasi penyu dan ekosistem pesisir. Kegiatan ini berlangsung di pantai peneluran penyu utama di Jawa Timur.",
      sections: [
        {
          heading: "Aksi Konservasi Penyu",
          items: [
            "Relokasi 120 sarang penyu ke area yang lebih aman",
            "Pelepasan 800 tukik (anak penyu) ke laut",
            "Pembersihan pantai dari sampah plastik",
            "Pemasangan tanda larangan mengganggu sarang penyu",
          ],
        },
      ],
      conclusion:
        "Melalui aksi ini, kami berharap populasi penyu yang terancam punah dapat terus terjaga dan meningkat di tahun-tahun mendatang.",
    },
  },
  {
    id: "a3",
    slug: "rimba-kembali-batch-10",
    title: "Rimba Kembali #Batch 10 - Pemberdayaan Masyarakat Ramah Lingkungan",
    excerpt:
      "Rimba Kembali berfokus pada pemberdayaan masyarakat melalui pelatihan keterampilan ramah lingkungan dan pengembangan ekonomi berkelanjutan...",
    imageUrl: "/images/activities/activity-3.jpg",
    daysAgo: 10,
    readTime: "6 menit baca",
    author: {
      name: "Budi Santoso",
      avatar: "/images/authors/budi-santoso.jpg",
    },
    createdAt: "2024-01-05",
    content: {
      intro:
        "Batch kesepuluh Rimba Kembali mengambil pendekatan berbeda dengan fokus pada pemberdayaan masyarakat desa melalui pelatihan keterampilan ramah lingkungan.",
      sections: [
        {
          heading: "Program Pemberdayaan",
          items: [
            "Pelatihan pembuatan kerajinan dari sampah plastik",
            "Workshop budidaya tanaman organik",
            "Pendirian bank sampah masyarakat",
            "Pelatihan pembuatan eco-enzyme",
          ],
        },
      ],
      conclusion:
        "Program ini tidak hanya membersihkan lingkungan tetapi juga menciptakan sumber pendapatan baru bagi masyarakat desa.",
    },
  },
  {
    id: "a4",
    slug: "kampanye-bebas-plastik-2024",
    title: "Kampanye Bebas Plastik 2024 - Gerakan Nasional",
    excerpt:
      "Rimba Kembali meluncurkan kampanye bebas plastik nasional yang melibatkan 50 kota di Indonesia dengan target mengurangi 1 juta kantong plastik...",
    imageUrl: "/images/activities/activity-4.jpg",
    daysAgo: 15,
    readTime: "7 menit baca",
    author: {
      name: "Maya Pertiwi",
      avatar: "/images/authors/maya-pertiwi.jpg",
    },
    createdAt: "2023-12-28",
  },
  {
    id: "a5",
    slug: "reboisasi-lereng-gunung",
    title: "Program Reboisasi Lereng Gunung - Pemulihan Ekosistem",
    excerpt:
      "Aksi penanaman 10.000 bibit pohon di lereng gunung untuk mencegah erosi dan menjaga ketersediaan air tanah di daerah hilir...",
    imageUrl: "/images/activities/activity-5.jpg",
    daysAgo: 20,
    readTime: "5 menit baca",
    author: {
      name: "Rizki Maulana",
      avatar: "/images/authors/rizki-maulana.jpg",
    },
    createdAt: "2023-12-23",
  },
  {
    id: "a6",
    slug: "edukasi-lingkungan-sekolah",
    title: "Edukasi Lingkungan untuk 100 Sekolah Dasar",
    excerpt:
      "Program edukasi lingkungan yang menjangkau 100 sekolah dasar dengan materi tentang pentingnya menjaga alam dan praktik daur ulang...",
    imageUrl: "/images/activities/activity-6.jpg",
    daysAgo: 25,
    readTime: "4 menit baca",
    author: {
      name: "Diana Sari",
      avatar: "/images/authors/diana-sari.jpg",
    },
    createdAt: "2023-12-18",
  },
];
