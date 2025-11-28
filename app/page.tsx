"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonNavigation from "@/components/ui/ButtonNavigation";
import CardEvent from "@/components/ui/CardEvent";
import CarouselPreview from "@/components/partials/Caraousel";
import type { Variants } from "framer-motion";
import BlogKreatif from "@/components/partials/blogPost";
import MainContainer from "@/components/ui/MainContainer";

export default function Home() {
  const data = [
    {
      title: "Rimba Kembali Donasi",
      logo: "/images/donasi-icon.svg",
      href: "/aksi-hijau/donasi",
      widht: 110,
      height: 150,
    },
    {
      title: "Rimba Kembali Volunteer",
      logo: "/images/volunteer-icon.svg",
      href: "/aksi-hijau/volunteer",
      widht: 150,
      height: 153,
    },
  ];

  const smoothEasing: [number, number, number, number] = [0.22, 1, 0.36, 1]; // pleasant easeOut-ish

  const heroVariants: Variants = {
    hidden: { opacity: 0, x: -48, scale: 0.995 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.2, ease: smoothEasing },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.18, duration: 0.95, ease: smoothEasing },
    },
  };

  const cardsContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.12 } },
  };

  const cardItem: Variants = {
    hidden: { opacity: 0, y: 26, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: smoothEasing },
    },
  };

  return (
    <MainContainer>
      <motion.div
        className="lg:min-h-[900px] hidden max-h-[600px] bg-primary-500 rounded-b-[60px] md:flex relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div
          className="absolute top-0 left-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.1, ease: smoothEasing }}
        >
          <Image
            src="/images/efek-cahaya-kiri.svg"
            alt="efek-cahaya"
            width={500}
            height={300}
          />
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 pointer-events-none"
          animate={{ opacity: [0.92, 1, 0.92], rotate: [0, 1.6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: smoothEasing }}
        >
          <Image
            src="/images/efek-cahaya-kanan.svg"
            alt="efek-cahaya-kanan"
            width={500}
            height={300}
          />
        </motion.div>

        <div className="flex flex-col gap-6 mt-20 lg:mt-50 max-w-[400px] lg:max-w-xl ml-auto z-20 py-24 px-15 lg:px-10">
          <motion.h1
            className="font-bold text-6xl lg:text-8xl text-primary-50 leading-[0.9]"
            variants={heroVariants}
            initial="hidden"
            animate="show"
          >
            Rimba Kembali
          </motion.h1>

          <motion.p
            className="text-primary-50 text-sm lg:text-xl w-full lg:max-w-xl"
            variants={paragraphVariants}
            initial="hidden"
            animate="show"
          >
            Gerakan kolektif untuk menghidupkan kembali alam kita. Kami mengubah
            setiap kepedulian menjadi jejak hijau yang terukur di bumi, dari
            perlombaan ide inovatif lingkungan, inisiatif penanaman pohon
            serentak hingga program edukasi yang membangun komunitas sadar
            lingkungan.
          </motion.p>

          <motion.div
            initial={{ scale: 0.99, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.8, ease: smoothEasing }}
          >
            <ButtonNavigation text="Read More" href="/kegiatan" />
          </motion.div>
        </div>

        <motion.div
          className="lg:w-1/2 lg:h-1/2 w-full h-full md:mt-30 lg:mt-10 flex items-end justify-center z-10"
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.28, duration: 1.0, ease: smoothEasing }}
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 0.6, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none"
          >
            <Image
              src={`/images/pohon-tanaman.png`}
              alt="Pohon-Kiri"
              width={860}
              height={1100}
              loading="eager"
            />
          </motion.div>
        </motion.div>

        <div
          className="absolute rounded-b-[60px] bottom-0 left-0 w-full h-80
    bg-[linear-gradient(180deg,rgba(90,155,69,0)_5.99%,#39612E_100%)]
    pointer-events-none"
        ></div>
      </motion.div>

      <div className="md:hidden relative w-full min-h-[80vh] max-w-md overflow-hidden bg-primary-200 rounded-b-4xl">
        {/* Gambar + Animasi Pohon (di bawah, full, dan nempel bawah) */}

        <Image
          src="/images/pohon-tanaman-mobile.png"
          alt="Pohon-Kiri"
          fill
          priority
          className="object-cover object-bottom"
          loading="eager"
        />

        <div className="absolute inset-0 z-20 flex flex-col px-6 justify-end my-20 text-center text-white">
          <h1 className="text-4xl font-extrabold drop-shadow-lg mb-4">
            Rimba Kembali
          </h1>

          <p className="text-sm max-w-sm leading-relaxed text-white/90 drop-shadow-md mb-8 mx-auto">
            Gerakan kolektif untuk menghidupkan kembali alam kita. Kami mengubah
            setiap kepedulian menjadi langkah nyata, dari ide inovatif, kegiatan
            penanaman pohon serentak, hingga edukasi membangun komunitas sadar
            lingkungan.
          </p>

          <motion.div
            initial={{ scale: 0.99, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.8, ease: smoothEasing }}
          >
            <ButtonNavigation text="Read More" href="/kegiatan" />
          </motion.div>
        </div>
      </div>

      <section className="lg:min-h-[70vh] flex flex-col gap-3 text-center my-10 md:my-20 lg:my-30 items-center">
        <motion.h2
          className="font-semibold text-3xl md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: smoothEasing }}
        >
          Aksi Hijau
        </motion.h2>

        <motion.div className="md:w-[750px] w-xs">
          <motion.p
            className="md:text-xl text-center text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.85, ease: smoothEasing }}
          >
            Aksi Hijau merupakan kegiatan nyata yang lahir dari rasa peduli
            terhadap lingkungan. Gerakan ini mencakup dua bentuk kegiatan yang
            saling melengkapi untuk mendorong perubahan positif.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid max-w-2xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6"
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              variants={cardItem}
              whileHover={{ y: -10, scale: 1.035 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              <CardEvent
                title={item.title}
                href={item.href}
                className="w-[300px] h-[350px]"
                logo={
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={item.widht}
                      height={item.height}
                    />
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CarouselPreview />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: smoothEasing }}
        className="min-h-[65vh] my-10"
      >
        <BlogKreatif />
      </motion.div>
    </MainContainer>
  );
}
