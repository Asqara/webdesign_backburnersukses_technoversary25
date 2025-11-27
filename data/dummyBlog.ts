import type { ArticleData } from "@/types/blog";

/* ---------- Dummy data (demo) ---------- */
export const DUMMY_ARTICLES: ArticleData[] = [
  {
    slug: "krisis-air-bersih-tantangan-abad-ini",
    title: "Krisis Air Bersih: Tantangan Abad Ini dan Solusinya",
    readTime: "10 mins read",
    author: {
      name: "Michael D.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
    createdAt: "2024-11-20T10:00:00Z",
    content: {
      intro:
        "Air bersih adalah kebutuhan dasar manusia, namun hingga kini jutaan orang di dunia masih kesulitan mendapatkannya. Meski planet ini dipenuhi air, hanya sekitar 3% yang tergolong air tawar...",
      sections: [
        {
          heading: "Mengapa Krisis Air Terjadi?",
          items: [
            "Perubahan Iklim — cuaca ekstrem mengganggu siklus air.",
            "Pertumbuhan Penduduk — kebutuhan air meningkat tetapi pasokan terbatas.",
            "Polusi Air — limbah industri dan pertanian mencemari sumber air.",
            "Deforestasi — mengurangi daerah resapan dan kualitas air tanah.",
          ],
        },
        {
          heading: "Lalu, Apa Dampaknya?",
          items: [
            "Peningkatan penyakit terkait air (diare, kolera).",
            "Penurunan produktivitas ekonomi.",
            "Konflik sosial untuk akses air.",
            "Ancaman ketahanan pangan karena terganggunya irigasi.",
          ],
        },
        {
          heading: "Solusi Nyata untuk Mengatasi Krisis Air",
          paragraphs: [
            "Kombinasi kebijakan, teknologi, dan edukasi diperlukan. Contoh: irigasi efisien, rehabilitasi hutan, pengolahan limbah, dan filtrasi lokal.",
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      conclusion:
        "Krisis air bersih bukan hanya isu lingkungan, tetapi isu kemanusiaan. Solusinya membutuhkan kolaborasi antara pemerintah, organisasi, dan masyarakat.",
    },
  },
  {
    slug: "revolusi-energi-terbarukan-di-indonesia",
    title:
      "Revolusi Energi Terbarukan: Masa Depan Indonesia yang Berkelanjutan",
    readTime: "12 mins read",
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    heroImage:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop",
    createdAt: "2024-11-18T14:30:00Z",
    content: {
      intro:
        "Indonesia memiliki potensi energi terbarukan yang sangat besar, dari panas bumi hingga tenaga surya. Bagaimana kita bisa memanfaatkannya untuk masa depan yang lebih hijau?",
      sections: [
        {
          heading: "Potensi Energi Terbarukan Indonesia",
          items: [
            "Panas bumi — 40% cadangan dunia berada di Indonesia",
            "Tenaga surya — rata-rata radiasi 4.8 kWh/m²/hari",
            "Energi angin — potensi di daerah pesisir mencapai 60 GW",
            "Bioenergy — dari limbah pertanian dan perkebunan",
          ],
        },
        {
          heading: "Tantangan Pengembangan",
          items: [
            "Investasi infrastruktur yang besar",
            "Regulasi dan kebijakan yang mendukung",
            "Teknologi dan expertise yang memadai",
            "Integrasi dengan grid existing",
          ],
        },
        {
          heading: "Roadmap Menuju 2025",
          paragraphs: [
            "Pemerintah menargetkan 23% bauran energi dari EBT pada 2025. Program akselerasi termasuk pembangunan PLTS atap, pembangkit panas bumi, dan smart grid.",
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      conclusion:
        "Transisi energi terbarukan bukan hanya pilihan, tetapi kebutuhan untuk keberlanjutan ekonomi dan lingkungan Indonesia.",
    },
  },
  {
    slug: "teknologi-blockchain-untuk-keberlanjutan",
    title:
      "Blockchain untuk Keberlanjutan: Meningkatkan Transparansi Supply Chain",
    readTime: "8 mins read",
    author: {
      name: "Alex R.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    heroImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    createdAt: "2024-11-15T09:15:00Z",
    content: {
      intro:
        "Teknologi blockchain tidak hanya untuk cryptocurrency. Dalam dunia keberlanjutan, blockchain dapat merevolusi cara kita melacak dan memverifikasi produk hijau.",
      sections: [
        {
          heading: "Aplikasi Blockchain dalam Sustainability",
          items: [
            "Supply chain tracking — dari sumber ke konsumen",
            "Carbon credit trading — transaksi yang transparan",
            "Sustainable sourcing — verifikasi bahan baku",
            "Waste management — pelacakan daur ulang",
          ],
        },
        {
          heading: "Studi Kasus: Industri Kelapa Sawit",
          paragraphs: [
            "Perusahaan menggunakan blockchain untuk melacak sustainable palm oil dari perkebunan hingga produk akhir, memastikan zero deforestation.",
          ],
        },
        {
          heading: "Manfaat Implementasi",
          items: [
            "Transparansi 100% dalam supply chain",
            "Reduksi greenwashing",
            "Efisiensi operasional",
            "Kepercayaan konsumen yang meningkat",
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1639762681057-40897d1b5d8c?w=600&h=400&fit=crop",
      conclusion:
        "Blockchain membuka era baru transparansi dalam bisnis berkelanjutan, memberikan bukti nyata atas klaim hijau perusahaan.",
    },
  },
  {
    slug: "urban-farming-solusi-ketahanan-pangan",
    title: "Urban Farming: Solusi Inovatif Ketahanan Pangan Perkotaan",
    readTime: "9 mins read",
    author: {
      name: "Diana W.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    heroImage:
      "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&h=400&fit=crop",
    createdAt: "2024-11-12T16:45:00Z",
    content: {
      intro:
        "Dengan populasi perkotaan yang terus bertambah, urban farming menjadi solusi kreatif untuk memenuhi kebutuhan pangan sekaligus mengurangi jejak karbon.",
      sections: [
        {
          heading: "Bentuk Urban Farming Modern",
          items: [
            "Vertical farming — memanfaatkan ruang vertikal",
            "Hydroponic & aquaponic — tanam tanpa tanah",
            "Rooftop gardens — manfaatkan atap gedung",
            "Community gardens — kebun komunitas",
          ],
        },
        {
          heading: "Keuntungan Urban Farming",
          items: [
            "Jarak distribusi yang pendek (food miles rendah)",
            "Penggunaan air yang efisien",
            "Kontrol hama tanpa pestisida berlebihan",
            "Peningkatan kualitas udara perkotaan",
          ],
        },
        {
          heading: "Implementasi di Jakarta",
          paragraphs: [
            "Program 'Jakarta Hijau' telah mengkonversi 50+ lahan tidur menjadi kebun urban, menghasilkan 2 ton sayuran per bulan untuk masyarakat sekitar.",
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1591871937573-74dbba515c4e?w=600&h=400&fit=crop",
      conclusion:
        "Urban farming bukan sekadar tren, tetapi kebutuhan strategis untuk kota yang berkelanjutan dan mandiri pangan.",
    },
  },
  {
    slug: "ekonomi-sirkular-masa-depan-bisnis",
    title:
      "Ekonomi Sirkular: Masa Depan Bisnis yang Berkelanjutan dan Menguntungkan",
    readTime: "11 mins read",
    author: {
      name: "Robert K.",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    },
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    createdAt: "2024-11-10T11:20:00Z",
    content: {
      intro:
        "Ekonomi sirkular mengubah paradigma 'ambil-pakai-buang' menjadi sistem regeneratif yang mempertahankan nilai produk dan material selama mungkin.",
      sections: [
        {
          heading: "Prinsip Dasar Ekonomi Sirkular",
          items: [
            "Design out waste and pollution",
            "Keep products and materials in use",
            "Regenerate natural systems",
            "Rethinking business models",
          ],
        },
        {
          heading: "Model Bisnis Sirkular yang Sukses",
          items: [
            "Product-as-a-Service — penyewaan bukan kepemilikan",
            "Sharing platforms — optimalisasi penggunaan aset",
            "Resource recovery — daur ulang menjadi bahan baku",
            "Product life extension — repair dan refurbish",
          ],
        },
        {
          heading: "Impact pada Lingkungan dan Ekonomi",
          paragraphs: [
            "Studi menunjukkan ekonomi sirkular dapat mengurangi emisi CO2 hingga 48% dan menciptakan 700,000 pekerjaan hijau di ASEAN pada 2030.",
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
      conclusion:
        "Ekonomi sirkular menawarkan win-win solution: profit bagi bisnis dan planet yang lebih sehat untuk generasi mendatang.",
    },
  },
  {
    slug: "mobil-listrik-indonesia-hijau",
    title: "Mobil Listrik: Akselerasi Menuju Transportasi Indonesia yang Hijau",
    readTime: "7 mins read",
    author: {
      name: "Budi Santoso",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    heroImage:
      "https://images.unsplash.com/photo-1593941707882-a5bba5331f77?w=800&h=400&fit=crop",
    createdAt: "2024-11-08T13:10:00Z",
    content: {
      intro:
        "Indonesia sedang bersiap untuk revolusi kendaraan listrik, dengan target 2 juta unit kendaraan listrik di jalan pada 2025. Bagaimana kesiapannya?",
      sections: [
        {
          heading: "Infrastruktur Pendukung",
          items: [
            "Stasiun pengisian — target 10,000 unit charging station",
            "Battery swapping — solusi untuk keterbatasan charging time",
            "Local battery production — manfaatkan nikel Indonesia",
            "Smart grid integration — kelola beban listrik",
          ],
        },
        {
          heading: "Insentif dan Regulasi",
          items: [
            "Subsidi pembelian kendaraan listrik",
            "Pengurangan pajak kendaraan",
            "Insentif untuk produsen lokal",
            "Regulasi standar keselamatan",
          ],
        },
        {
          heading: "Tantangan yang Dihadapi",
          paragraphs: [
            "Meski potensi besar, Indonesia masih menghadapi tantangan harga kendaraan yang mahal, infrastruktur yang belum merata, dan kesadaran masyarakat.",
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",
      conclusion:
        "Transisi ke kendaraan listrik membutuhkan kolaborasi pemerintah, industri, dan masyarakat untuk menciptakan ekosistem yang berkelanjutan.",
    },
  },
  {
    slug: "restorasi-mangrove-pelindung-pesisir",
    title:
      "Restorasi Mangrove: Solusi Alami untuk Perlindungan Pesisir Indonesia",
    readTime: "10 mins read",
    author: {
      name: "Maria T.",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    },
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
    createdAt: "2024-11-05T08:30:00Z",
    content: {
      intro:
        "Mangrove bukan hanya ekosistem yang indah, tetapi juga benteng alami yang melindungi pesisir dari abrasi dan menyimpan karbon 4x lebih banyak dari hutan tropis.",
      sections: [
        {
          heading: "Fungsi Ekologis Mangrove",
          items: [
            "Perlindungan pesisir dari abrasi dan tsunami",
            "Penyerapan karbon (blue carbon) yang efektif",
            "Habitat bagi biodiversitas laut dan darat",
            "Filter polutan dari darat ke laut",
          ],
        },
        {
          heading: "Program Restorasi Nasional",
          items: [
            "Rehabilitasi 600,000 hektar mangrove hingga 2024",
            "Keterlibatan masyarakat lokal (pesisir)",
            "Pendekatan ecotourism untuk sustainability",
            "Monitoring dengan teknologi drone dan satellite",
          ],
        },
        {
          heading: "Kesuksesan di Demak, Jawa Tengah",
          paragraphs: [
            "Program restorasi mangrove di Demak berhasil mengurangi abrasi 70% dan meningkatkan pendapatan masyarakat melalui ekowisata dan perikanan berkelanjutan.",
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
      conclusion:
        "Investasi dalam restorasi mangrove adalah investasi triple win: untuk lingkungan, ekonomi, dan ketahanan masyarakat pesisir.",
    },
  },
  {
    slug: "smart-city-indonesia-masa-depan",
    title: "Smart City di Indonesia: Menuju Kota Cerdas dan Berkelanjutan",
    readTime: "14 mins read",
    author: {
      name: "Ahmad F.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
    createdAt: "2024-11-01T15:00:00Z",
    content: {
      intro:
        "Konsep smart city di Indonesia berkembang pesat, menggabungkan teknologi digital dengan prinsip keberlanjutan untuk menciptakan kota yang layak huni dan efisien.",
      sections: [
        {
          heading: "Pilar Smart City Indonesia",
          items: [
            "Smart governance — pelayanan publik digital",
            "Smart economy — ekosistem bisnis inovatif",
            "Smart environment — pengelolaan lingkungan cerdas",
            "Smart living — kualitas hidup yang meningkat",
          ],
        },
        {
          heading: "Inovasi Terdepan",
          items: [
            "Integrated command center — monitor kota 24/7",
            "Smart traffic management — kurangi kemacetan",
            "Waste management system — optimalisasi pengelolaan sampah",
            "Digital public services — satu aplikasi untuk semua layanan",
          ],
        },
        {
          heading: "Tantangan Implementasi",
          paragraphs: [
            "Meski potensi besar, pengembangan smart city menghadapi tantangan kesenjangan digital, keamanan siber, dan kebutuhan investasi infrastruktur yang masif.",
          ],
        },
        {
          heading: "Best Practices: Kota Bandung",
          items: [
            "Aplikasi 'Bandung Command Center' terintegrasi",
            "Smart parking system mengurangi congestion",
            "Digital payment untuk semua layanan publik",
            "Community participation melalui platform digital",
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      conclusion:
        "Smart city yang sukses bukan tentang teknologi tercanggih, tetapi tentang bagaimana teknologi meningkatkan kualitas hidup warga secara inklusif dan berkelanjutan.",
    },
  },
];
