import MainContainer from "@/components/ui/MainContainer";

export default function LegalComponent() {
  return (
    <MainContainer className="mt-30 flex items-start justify-center py-12">
      <div className="w-full max-w-3xl bg-white rounded-2xl p-8 md:p-12">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">Legal</h1>
        </header>

        {/* Content Column */}
        <article className="prose prose-sm sm:prose-base max-w-none leading-relaxed text-gray-900">
          {/* Term of Use */}
          <section className="mb-6">
            <h2 className="text-sm font-semibold">Term of Use</h2>
            <p className="text-sm mt-2">
              Selamat datang di Rimba Kembali. Dengan mengakses atau menggunakan
              situs kami, kamu setuju untuk terikat oleh syarat dan ketentuan
              berikut:
            </p>

            <ol className="list-decimal ml-5 mt-3 space-y-2 text-sm">
              <li>
                <strong>Penggunaan Website</strong>
                <p className="mt-1">
                  Website ini disediakan untuk tujuan edukasi dan kampanye
                  lingkungan. Kamu dilarang menggunakannya untuk untuk aktivitas
                  yang melanggar hukum, merusak, atau mengganggu layanan kami.
                </p>
              </li>

              <li>
                <strong>Hak Kekayaan Intelektual</strong>
                <p className="mt-1">
                  Seluruh konten seperti teks, gambar, logo, dan ilustrasi
                  merupakan milik Rimba Kembali. Tidak diperbolehkan menyalin,
                  mendistribusikan, atau menggunakan konten tanpa izin.
                </p>
              </li>

              <li>
                <strong>Akurasi Informasi</strong>
                <p className="mt-1">
                  Kami berusaha menjaga informasi tetap akurat, namun tidak
                  menjamin kesempurnaan konten. Penggunaan informasi sepenuhnya
                  menjadi tanggung jawab pengguna.
                </p>
              </li>
            </ol>
          </section>

          {/* Divider */}
          <div className="h-px bg-gray-100 my-6"></div>

          {/* Privacy Policy */}
          <section>
            <h2 className="text-sm font-semibold">Privacy Policy</h2>
            <p className="text-sm mt-2">
              Privasi penting bagi kami. Kebijakan ini menjelaskan bagaimana
              kami mengumpulkan, menggunakan, dan melindungi data pengguna.
            </p>

            <h3 className="text-sm font-bold mt-4">
              1. Informasi yang Kami Kumpulkan
            </h3>
            <p className="text-sm mt-1">Kami dapat mengumpulkan:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
              <li>Nama</li>
              <li>Alamat email</li>
              <li>Nomor telepon (jika kamu mengisi formulir)</li>
              <li>
                Pesan atau pertanyaan yang kamu kirimkan melalui formulir kontak
              </li>
              <li>
                Data teknis seperti perangkat, peramban, dan halaman yang
                dikunjungi
              </li>
            </ul>

            <h3 className="text-sm font-bold mt-4">
              2. Cara Kami Menggunakan Informasi
            </h3>
            <ol className="list-decimal ml-5 mt-2 space-y-2 text-sm">
              <li>Mengirim respons atas atau atas permintaan</li>
              <li>Meningkatkan kualitas layanan dan konten</li>
              <li>Memberi pemberitahuan terkait kampanye jika kamu setuju</li>
            </ol>

            <h3 className="text-sm font-bold mt-4">
              3. Penyimpanan & Keamanan Data
            </h3>
            <p className="text-sm mt-1">
              Kami melindungi data dengan standar keamanan yang wajar dan hanya
              menyimpan informasi selama diperlukan untuk keperluan operasional.
            </p>

            <h3 className="text-sm font-bold mt-4">4. Cookie</h3>
            <p className="text-sm mt-1">
              Kami menggunakan cookie untuk meningkatkan pengalaman pengguna.
              Kamu dapat mengatur atau menonaktifkan cookie melalui pengaturan
              peramban.
            </p>

            <h3 className="text-sm font-bold mt-4">5. Hak Pengguna</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
              <li>Meminta akses ke data yang kamu berikan</li>
              <li>Meminta perubahan atau penghapusan data</li>
              <li>Menarik persetujuan kapan saja</li>
            </ul>
          </section>
        </article>
      </div>
    </MainContainer>
  );
}
