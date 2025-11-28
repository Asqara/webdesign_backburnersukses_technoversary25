import MainContainer from "@/components/ui/MainContainer";

export default function HelpRimbaKembali() {
  return (
    <MainContainer className="mt-30 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">Help</h1>

        {/* Help Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Help</h2>
          <p className="text-sm text-justify leading-relaxed mb-4">
            Selamat datang di pusat bantuan Rimba Kembali! Halaman ini berisi
            kumpulan panduan singkat untuk menggunakan seluruh fitur website
            dengan mudah.
          </p>

          {/* Cara Berdonasi */}
          <div className="mb-4">
            <h3 className="text-base font-bold mb-2">1. Cara Berdonasi</h3>
            <p className="text-sm text-justify leading-relaxed">
              Kami menyediakan beberapa metode pembayaran yang aman dan cepat.
              Pilih jumlah donasi → pilih metode transfer → transfer sesuai
              nominal → konfirmasi pembayaran. Kami akan menerima konfirmasi
              otomatis setelah pembayaran berhasil.
            </p>
          </div>

          {/* Cara Bergabung sebagai Relawan */}
          <div className="mb-4">
            <h3 className="text-base font-bold mb-2">
              2. Cara Bergabung sebagai Relawan
            </h3>
            <p className="text-sm text-justify leading-relaxed">
              Kunjungi halaman Volunteer lalu isi data dirilar. Kamu akan
              terhubung ke grup informasi kegiatan dan menerima jadwal aksi
              terbaru. Semangat berbagi di aksi berikutnya!
            </p>
          </div>
        </div>

        {/* Security FAQs Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Security FAQs</h2>
          <p className="text-sm text-justify leading-relaxed mb-4">
            Kami memahami pentingnya keamanan data dan kenyamanan pengguna.
            Berikut jawaban untuk pertanyaan umum terkait keamanan di Rimba
            Kembali:
          </p>

          {/* Question 1 */}
          <div className="mb-4">
            <h3 className="text-base font-bold mb-2">
              1. Apakah data pribadi saya aman?
            </h3>
            <p className="text-sm text-justify leading-relaxed">
              Ya, kami hanya mengumpulkan data yang diperlukan untuk keperluan
              donasi dan aktivitas komunitas. Data kamu disimpan dengan standar
              keamanan dasar dan tidak dibagikan tanpa izin.
            </p>
          </div>

          {/* Question 2 */}
          <div className="mb-4">
            <h3 className="text-base font-bold mb-2">
              2. Apakah transaksi donasi aman?
            </h3>
            <p className="text-sm text-justify leading-relaxed">
              Metode pembayaran kami menggunakan jalur transfer yang umum
              digunakan oleh aman. Kami tidak menyimpan informasi sensitif
              seperti PIN, password, atau detail kartu.
            </p>
          </div>

          {/* Question 3 */}
          <div className="mb-4">
            <h3 className="text-base font-bold mb-2">
              3. Bagaimana jika ada yang bermasalah?
            </h3>
            <p className="text-sm text-justify leading-relaxed">
              Segera hubungi kontak resmi WhatsApp kami. Tim kami akan membantu
              memverifikasi identitas dan mengembalikan akuntmu.
            </p>
          </div>

          {/* Question 4 */}
          <div className="mb-4">
            <h3 className="text-base font-bold mb-2">
              4. Apakah informasi saya diberikan kepada pihak ketiga?
            </h3>
            <p className="text-sm text-justify leading-relaxed">
              Tidak. Rimba Kembali tidak membagikan dana pengguna kepada pihak
              lain untuk tujuan komersial.
            </p>
          </div>

          {/* Question 5 */}
          <div className="mb-4">
            <h3 className="text-base font-bold mb-2">
              5. Apa yang harus saya lakukan jika menemukan aktivitas
              mencurigakan?
            </h3>
            <p className="text-sm text-justify leading-relaxed">
              Laporkan segera kepada kami. Kami akan memeriksa dan mengambil
              tindakan yang diperlukan untuk menjaga keamanan bersama.
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
