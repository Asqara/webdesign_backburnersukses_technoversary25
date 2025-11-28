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
    title:
      "Rimba Kembali #Batch 7 - Aksi Nyata Pelestarian Lingkungan yang Inspiratif",
    excerpt:
      "Rimba Kembali resmi memulai Batch 7 melalui aksi lapangan strategis yang melibatkan ratusan relawan dalam misi restorasi ekosistem. Program ini tidak hanya menanam bibit pohon, tetapi juga membangun kesadaran kolektif untuk pelestarian hutan berkelanjutan...",
    imageUrl: "/images/imagesUrl/activity-1.jpg",
    daysAgo: 2,
    readTime: "6 menit baca",
    author: {
      name: "Ahmad Wijaya",
      avatar: "/images/authors/ahmad-wijaya.jpg",
    },
    createdAt: "2024-01-15",
    content: {
      intro:
        "Batch ketujuh program Rimba Kembali telah resmi diluncurkan dengan semangat kolaboratif yang menggugah dari seluruh relawan dan komunitas lokal. Inisiatif ini menekankan aksi konkret pelestarian lingkungan melalui pendekatan terintegrasi yang menggabungkan restorasi ekosistem, edukasi masyarakat, dan pemberdayaan komunitas.",
      sections: [
        {
          heading: "Kegiatan Unggulan Batch 7",
          items: [
            "Penanaman 500 bibit pohon endemik di kawasan hutan lindung strategis untuk memperkuat koridor ekosistem.",
            "Pembersihan intensif sampah sepanjang aliran sungai 3 km dengan sistem pengelompokan zero waste.",
            "Workshop edukasi komunitas tentang konservasi hutan dan ekonomi hijau berbasis alam.",
            "Pembuatan 1.000 titik biopori untuk optimalisasi resapan air tanah dan pencegahan banjir.",
          ],
        },
        {
          heading: "Dampak Signifikan yang Tercapai",
          paragraphs: [
            "Dalam dua minggu pertama, relawan berhasil menanam 500 bibit spesies endemik yang dipilih untuk mendukung biodiversitas lokal dan konektivitas ekosistem. Setiap bibit dilengkapi sistem monitoring pertumbuhan digital untuk memastikan tingkat keberhasilan 85%.",
            "Aksi pembersihan sungai mengumpulkan 250 kg sampah yang terpilah menjadi 60% plastik daur ulang, 30% organik untuk kompos, dan 10% residu berbahaya. Hasilnya, kualitas air meningkat 40% dan habitat ikan lokal mulai pulih.",
            "Edukasi masyarakat menjangkau 300 kepala keluarga dengan pemahaman ekonomi hijau, menciptakan 15 kelompok sadar lingkungan yang siap melanjutkan konservasi mandiri.",
          ],
        },
      ],
      image: "/images/activities/activity-1-detail.jpg",
      conclusion:
        "Batch 7 Rimba Kembali membuktikan bahwa sinergi relawan, komunitas lokal, dan pendekatan berbasis sains dapat menciptakan transformasi ekologi yang berkelanjutan. Komitmen ini menjadi blueprint bagi batch berikutnya dalam membangun Indonesia hijau yang lestari untuk generasi mendatang.",
    },
  },
  {
    id: "a2",
    slug: "rimba-kembali-batch-9",
    title:
      "Rimba Kembali #Batch 9 - Konservasi Penyu dan Pelestarian Ekosistem Pesisir Berkelanjutan",
    excerpt:
      "Batch 9 Rimba Kembali menggelar aksi konservasi intensif di pantai peneluran utama Jawa Timur, menyelamatkan ratusan sarang penyu dan melepaskan ribuan tukik ke samudra. Program ini mengintegrasikan restorasi habitat, edukasi masyarakat, dan monitoring ekosistem untuk kelestarian spesies terancam punah.",
    imageUrl: "/images/activities/activity-2.jpg",
    daysAgo: 6,
    readTime: "6 menit baca",
    author: {
      name: "Sari Dewi",
      avatar: "/images/authors/sari-dewi.jpg",
    },
    createdAt: "2024-01-10",
    content: {
      intro:
        "Batch kesembilan Rimba Kembali mengusung misi mulia konservasi penyu hijau dan pelestarian ekosistem pesisir di pantai peneluran utama Jawa Timur seperti Pantai Bajulmati dan Wonogoro. Kolaborasi relawan, BBKSDA Jatim, dan komunitas lokal ini bertujuan memulihkan populasi penyu yang terancam punah melalui pendekatan holistik.",
      sections: [
        {
          heading: "Aksi Konservasi Unggulan",
          items: [
            "Relokasi aman 120 sarang penyu hijau ke hatchery khusus dengan monitoring suhu dan kelembaban optimal untuk tingkat hatching 85%.",
            "Pelepasanliaran 800+ tukik sehat ke laut lepas saat senja, mengikuti pola alam dengan partisipasi anak-anak lokal.",
            "Pembersihan pantai intensif dari 500 kg sampah plastik dan mikroplastik yang mengancam habitat peneluran.",
            "Pemasangan 50 papan informasi dan pagar pengaman sarang penyu, plus penanaman pandan laut untuk stabilisasi pesisir.",
          ],
        },
        {
          heading: "Dampak dan Monitoring Jangka Panjang",
          paragraphs: [
            "Dalam periode peneluran Juli 2025, tim menemukan 98 telur penyu hijau dari indukan liar, menunjukkan pemulihan habitat berkat restorasi bertahun-tahun. Tingkat kelangsungan hidup tukik meningkat 30% berkat hatchery berbasis komunitas seperti Pokdarwis Sanggaria Tulungagung.",
            "Edukasi menjangkau 200 warga pesisir dengan workshop pengenalan spesies penyu, ancaman perburuan, dan ekonomi biru berkelanjutan. Monitoring satelit dan GPS tukik akan dilanjutkan 6 bulan untuk data migrasi dan tingkat survival.",
            "Kolaborasi dengan BBKSDA Jatim memastikan kepatuhan regulasi CITES dan strategi nasional konservasi penyu Indonesia.",
          ],
        },
      ],
      image: "/images/activities/activity-2-detail.jpg",
      conclusion:
        "Batch 9 Rimba Kembali tidak hanya menyelamatkan generasi penyu saat ini, tetapi juga membangun fondasi konservasi berkelanjutan melalui pemberdayaan komunitas pesisir. Kontribusi nyata ini menjadi inspirasi bagi upaya pelestarian laut Indonesia yang lebih luas.",
    },
  },
  {
    id: "a3",
    slug: "rimba-kembali-batch-10",
    title:
      "Rimba Kembali #Batch 10 - Pemberdayaan Masyarakat Menuju Ekonomi Hijau Berkelanjutan",
    excerpt:
      "Batch 10 Rimba Kembali transformasi paradigma dengan pemberdayaan masyarakat desa melalui pelatihan keterampilan ramah lingkungan, menciptakan ekosistem ekonomi hijau yang mandiri dan berkelanjutan untuk komunitas lokal.",
    imageUrl: "/images/activities/activity-3.jpg",
    daysAgo: 10,
    readTime: "7 menit baca",
    author: {
      name: "Budi Santoso",
      avatar: "/images/authors/budi-santoso.jpg",
    },
    createdAt: "2024-01-05",
    content: {
      intro:
        "Batch kesepuluh Rimba Kembali mengadopsi pendekatan inovatif dengan menempatkan pemberdayaan masyarakat desa sebagai inti strategi pelestarian lingkungan. Program ini mengintegrasikan pelatihan keterampilan hijau, pengembangan ekonomi berkelanjutan, dan pembentukan kemandirian komunitas melalui pendekatan zero waste dan ekonomi sirkular.",
      sections: [
        {
          heading: "Program Pemberdayaan Unggulan",
          items: [
            "Pelatihan pembuatan kerajinan premium dari sampah plastik (ecobrick, furnitur recycled) dengan potensi pasar Rp 5-15 juta/bulan.",
            "Workshop budidaya organik hidroponik dan vertikultur untuk produksi sayur organik siap jual dengan yield 3x konvensional.",
            "Pendirian bank sampah digital terintegrasi dengan aplikasi tracking dan pembayaran via e-wallet untuk 200 KK.",
            "Pelatihan produksi eco-enzyme skala rumah tangga untuk pengolahan limbah organik dan pupuk cair organik.",
          ],
        },
        {
          heading: "Dampak Ekonomi dan Lingkungan",
          paragraphs: [
            "Dalam 3 bulan pertama, 45 warga terlatih menghasilkan produk kerajinan recycled senilai Rp 28 juta dengan 75% dijual ke pasar ekowisata. Bank sampah mengelola 1,2 ton sampah/bulan, mengurangi volume TPA 40% dan menciptakan pendapatan tambahan Rp 4,5 juta/bulan.",
            "Budidaya hidroponik menghasilkan 450 kg sayur organik/bulan dengan margin keuntungan 60%, sementara eco-enzyme menghemat biaya pupuk kimia 70% dan meningkatkan kesuburan tanah 35%. Program ini juga menurunkan emisi karbon 12 ton CO2e/tahun melalui pengurangan sampah dan transportasi.",
            "Pemberdayaan perempuan mencapai 65% peserta, membentuk 3 koperasi desa hijau dengan akses pasar online dan sertifikasi organik nasional.",
          ],
        },
      ],
      image: "/images/activities/activity-3-detail.jpg",
      conclusion:
        "Batch 10 Rimba Kembali membuktikan bahwa pelestarian lingkungan paling efektif ketika terintegrasi dengan kesejahteraan ekonomi masyarakat. Model pemberdayaan ini menjadi blueprint replikasi nasional, menciptakan komunitas mandiri yang menjaga alam sambil membangun kemakmuran berkelanjutan.",
    },
  },
  {
    id: "a4",
    slug: "kampanye-bebas-plastik-2024",
    title:
      "Kampanye Bebas Plastik 2024 - Gerakan Nasional Menuju Indonesia Merdeka Plastik",
    excerpt:
      "Rimba Kembali meluncurkan kampanye bebas plastik nasional yang melibatkan 50 kota besar Indonesia dengan target reduksi 1 juta kantong plastik sekali pakai, menginspirasi #MerdekaDariPlastik melalui aksi komunitas dan edukasi massal.",
    imageUrl: "/images/activities/activity-4.jpg",
    daysAgo: 15,
    readTime: "8 menit baca",
    author: {
      name: "Maya Pertiwi",
      avatar: "/images/authors/maya-pertiwi.jpg",
    },
    createdAt: "2023-12-28",
    content: {
      intro:
        "Kampanye Bebas Plastik 2024 Rimba Kembali menjadi gerakan nasional terbesar yang menyatukan 50 kota di Indonesia dalam misi mengurangi 1 juta kantong plastik sekali pakai. Mengadopsi semangat #MerdekaDariPlastik, inisiatif ini mengintegrasikan aksi lapangan, edukasi komunitas, dan kolaborasi bisnis untuk mencapai target pengurangan sampah plastik 70% pada 2025.",
      sections: [
        {
          heading: "Aksi Unggulan Kampanye Nasional",
          items: [
            "Pawai Bebas Plastik simultan di 50 kota dengan 100.000 peserta membawa tumbler dan tas belanja reusable.",
            "Distribusi 500.000 kantong kain dan botol minum stainless steel gratis ke pasar tradisional dan sekolah.",
            "Workshop zero waste untuk 10.000 UMKM dengan pelatihan pengemasan ramah lingkungan dan sistem refill.",
            "Piknik Bebas Plastik protokol guna ulang dengan 200 tenant makanan tanpa kemasan sekali pakai.",
          ],
        },
        {
          heading: "Dampak dan Hasil Tercapai",
          paragraphs: [
            "Dalam 3 bulan pertama, kampanye berhasil mengumpulkan 2,5 ton sampah plastik dari pawai nasional yang 80% didaur ulang menjadi ecobrick dan furnitur publik. Partisipasi 50 supermarket mengurangi 750.000 kantong plastik melalui sistem bayar tumbler Rp 1.000.",
            "Edukasi menjangkau 150.000 siswa dengan kurikulum anti-plastik sekali pakai, menghasilkan komitmen #CumaSatuKantong dari 280 juta penduduk potensial menghemat 9,8 miliar kantong/tahun.",
            "Kolaborasi dengan Plastic Smart Cities WWF dan WALHI menciptakan 15 bank sampah digital terintegrasi e-wallet, meningkatkan pendapatan pengelola sampah 300%.",
          ],
        },
      ],
      image: "/images/activities/activity-4-detail.jpg",
      conclusion:
        "Kampanye Bebas Plastik 2024 Rimba Kembali membuktikan bahwa gerakan kolektif dapat mengubah perilaku nasional menuju Indonesia merdeka plastik. Dengan sinergi masyarakat, bisnis, dan pemerintah, target 70% reduksi sampah plastik 2025 bukan lagi mimpi, melainkan kenyataan yang sedang kita wujudkan bersama.",
    },
  },
  {
    id: "a5",
    slug: "reboisasi-lereng-gunung",
    title:
      "Program Reboisasi Lereng Gunung - Pemulihan Ekosistem Strategis Nasional",
    excerpt:
      "Aksi masif penanaman 10.000 bibit pohon endemik di lereng gunung krusial untuk pencegahan erosi, konservasi air tanah, dan pemulihan koridor satwa liar di daerah hilir yang rawan bencana.",
    imageUrl: "/images/activities/activity-5.jpg",
    daysAgo: 20,
    readTime: "7 menit baca",
    author: {
      name: "Rizki Maulana",
      avatar: "/images/authors/rizki-maulana.jpg",
    },
    createdAt: "2023-12-23",
    content: {
      intro:
        "Program Reboisasi Lereng Gunung Rimba Kembali menargetkan penanaman 10.000 bibit pohon endemik di zona kritis lereng gunung untuk mencegah erosi masif, menjaga debit air tanah hilir, dan membangun koridor ekologi satwa liar yang terputus.",
      sections: [
        {
          heading: "Lokasi dan Spesies Prioritas",
          items: [
            "Penanaman di lereng Gunung Merbabu dan Lawu dengan kemiringan >30° yang rawan longsor basah.",
            "Bibit prioritas: Jati, Mahoni, Trembesi, dan 15 spesies endemik untuk restorasi multi-strata.",
            "Integrasi agroforestry dengan kopi robusta dan kayu manis untuk ekonomi petani lereng.",
            "Pembuatan terasering kontur dan checkdam untuk optimalisasi resapan air 500 m³/ha.",
          ],
        },
        {
          heading: "Dampak Hidrologi dan Ekologi",
          paragraphs: [
            "Dalam 6 bulan pertama, 8.500 bibit (85% survival rate) berhasil tumbuh, meningkatkan resapan air 35% dan mengurangi runoff permukaan 60%. Monitoring satelit menunjukkan debit mata air hilir naik 25%.",
            "Koridor satwa liar Gunung Merbabu-Lawu mulai terhubung kembali, terdeteksi 12 spesies burung endemik dan 3 jenis mamalia yang bermigrasi antar habitat.",
            "Petani lokal 150 KK mendapat pendapatan tambahan Rp 18 juta/tahun dari agroforestry lereng.",
          ],
        },
      ],
      image: "/images/activities/activity-5-detail.jpg",
      conclusion:
        "Reboisasi lereng gunung bukan hanya penanaman pohon, tetapi investasi strategis ketahanan bencana, ketersediaan air, dan konservasi biodiversitas untuk kesejahteraan hilir berkelanjutan.",
    },
  },
  {
    id: "a6",
    slug: "edukasi-lingkungan-sekolah",
    title:
      "Edukasi Lingkungan untuk 100 Sekolah Dasar - Generasi Hijau Indonesia",
    excerpt:
      "Program edukasi lingkungan terintegrasi menjangkau 100 SD dengan kurikulum Adiwiyata, menciptakan 97.911 kader lingkungan muda melalui praktik PRLH dan eco-school berkelanjutan.",
    imageUrl: "/images/activities/activity-6.jpg",
    daysAgo: 25,
    readTime: "6 menit baca",
    author: {
      name: "Diana Sari",
      avatar: "/images/authors/diana-sari.jpg",
    },
    createdAt: "2023-12-18",
    content: {
      intro:
        "Program Edukasi Lingkungan Rimba Kembali bermitra Sekolah Adiwiyata menjangkau 100 SD di 15 kabupaten dengan kurikulum partisipatif PRLH, membentuk karakter peduli lingkungan sejak dini melalui praktik nyata eco-school.",
      sections: [
        {
          heading: "Modul Pembelajaran Unggulan",
          items: [
            "Kurikulum 3R (Reduce-Reuse-Recycle) terintegrasi mata pelajaran IPA dan PPKn dengan praktik bank sampah sekolah.",
            "Kebun sekolah organik hidroponik + vertikultur untuk pembelajaran ekosistem dan ketahanan pangan.",
            "Lomba Adiwiyata mini: biopori, penanaman pohon, dan inovasi PRLH berbasis pengalaman Piaget.",
            "Panda Mobile keliling dengan simulasi blue carbon dan ancaman perubahan iklim lokal.",
          ],
        },
        {
          heading: "Hasil dan Dampak Jangka Panjang",
          paragraphs: [
            "97.911 siswa SD teredukasi dengan reduksi sampah sekolah 66%, hemat listrik 19%, hemat air 70%, dan 940.114 pohon ditanam melalui program SIDIA nasional.",
            "25.379 lubang biopori dibuat, mencegah banjir musiman di 45 sekolah rawan genangan. Program ini selaras UU No.20/2003 Pendidikan Nasional dan Perpres 87/2017 Penguatan Karakter.",
            "80% sekolah peserta siap sertifikasi Adiwiyata Mandiri, membentuk jejaring 15.000 kader lingkungan antar sekolah.",
          ],
        },
      ],
      image: "/images/activities/activity-6-detail.jpg",
      conclusion:
        "Edukasi lingkungan SD adalah investasi masa depan Indonesia hijau melalui karakter peduli lingkungan yang berkelanjutan, menciptakan generasi siap hadapi krisis iklim dengan tindakan nyata.",
    },
  },
];
