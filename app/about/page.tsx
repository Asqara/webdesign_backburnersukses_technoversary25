import MainContainer from "@/components/ui/MainContainer";
import Image from "next/image";
export default function AboutRimbaKembali() {
  return (
    <MainContainer className="p-10">
      <div className="max-w-2xl mx-auto md:mt-30">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">About</h1>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <Image src="/main-logo.svg" fill alt="Main logo" />
          </div>
        </div>

        {/* Community Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Community</h2>
          <p className="text-sm text-justify leading-relaxed mb-4">
            Rimba Kembali adalah komunitas lingkungan yang bergerak dalam upaya
            menghijaukan kembali ruang hidup melalui aksi nyata, edukasi, dan
            kolaborasi. Kami percaya bahwa perubahan tidak harus besar—cukup
            dimulai dari langkah sederhana yang dilakukan bersama.
          </p>
          <p className="text-sm text-justify leading-relaxed">
            Melalui kegiatan seperti penanaman pohon, pembersihan lingkungan,
            hingga program edukasi berbasis alam, Rimba Kembali mengajak
            masyarakat untuk tumbung kembali dengan alam. Kami menyebarkan
            kesadaran bahwa setiap individu memiliki peran dalam perubahan, dan
            bersama-sama kita dapat menciptakan masa depan yang lebih hijau dan
            berkelanjutan. Karena setiap tindakan kecil punya dampak besar
            ketika dilakukan bersama-sama.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <div className="text-sm space-y-1">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              rimbakembali@gmail.com
            </p>
            <p>
              <span className="font-semibold">Instagram:</span> @rimbakembali
            </p>
            <p>
              <span className="font-semibold">Phone:</span> 0812-3456-7890
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
