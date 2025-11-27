"use client";
import MainContainer from "@/components/ui/MainContainer";
import Image from "next/image";
import DonationCard from "@/components/ui/CardDonation";
import { useState, useMemo, useEffect } from "react";
import DonationModal from "@/components/ui/DonationModal";
export default function donasi() {
  const initialItems = useMemo(() => {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
      arr.push({
        id: i,
        title: `Save The Forest ${i}`,
        description:
          "Bantu pelestarian hutan dan pemulihan area hijau yang rusak.",
        imageUrl: "/mnt/data/Frame 48.png",
        goal: 20000000 + (i % 5) * 5000000, // vary goal a bit
        collected: 4000000 * ((i % 5) + 1), // vary collected to show different progress
      });
    }
    return arr;
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // set awal (redundan karena inisialisasi di useState, tapi safe)
    setIsMobile(mq.matches);

    // listen resize
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const perPage = isMobile ? 3 : 6;
  useEffect(() => {
    setCurrentPage(1);
  }, [perPage]);

  const totalPages = Math.ceil(items.length / perPage);
  const goToPage = (n: number) =>
    setCurrentPage(Math.max(1, Math.min(totalPages, n)));

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, currentPage]);
  return (
    <MainContainer>
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="flex flex-col mx-auto text-center gap-6 mt-10 md:mt-40">
        <h1 className="lg:text-5xl text-2xl font-bold">
          Rimba Kembali Donation
        </h1>
        <p className="md:text-lg max-w-xs text-sm md:max-w-4xl mx-auto">
          Program donasi yang bertujuan mendukung kegiatan pelestarian
          lingkungan, seperti penanaman pohon, pemulihan area hijau, dan edukasi
          lingkungan.
        </p>
        <div className="relative w-xs md:w-2xl lg:w-4xl mx-auto h-96 rounded-t-4xl overflow-hidden">
          <Image
            src="/images/1.jpg"
            alt="Images"
            fill
            className="object-cover z-0 rounded-t-4xl"
          />
          <div className="absolute inset-0 bg-primary-500/80 z-10 rounded-t-4xl"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Image
              src="/images/donasi-icon.svg"
              alt="donasi"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto text-center gap-6 my-10">
        <h1 className="text-4xl font-bold">Yuk, Berdonasi!</h1>
        <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedItems.map((item) => (
            <DonationCard
              key={item.id}
              item={item}
              onDonate={() => setIsModalOpen(true)}
            />
          ))}
        </div>
        <div className="mt-6 flex items-center mx-auto justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-[linear-gradient(140deg,#FFF_1.03%,#CDF4AE_93.17%)]
text-primary-500 rounded-full p-3 shadow-lg
transition-all hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.4534 8.91698C20.4534 9.25603 20.3187 9.5812 20.079 9.82095C19.8392 10.0607 19.5141 10.1954 19.175 10.1954H4.36251L9.85115 15.684C9.97675 15.8011 10.0775 15.9422 10.1474 16.099C10.2172 16.2558 10.2548 16.4251 10.2578 16.5968C10.2609 16.7684 10.2293 16.9389 10.165 17.0981C10.1007 17.2573 10.005 17.4019 9.8836 17.5233C9.7622 17.6447 9.6176 17.7404 9.45842 17.8047C9.29923 17.869 9.12873 17.9006 8.95708 17.8975C8.78542 17.8945 8.61614 17.8569 8.45932 17.7871C8.3025 17.7172 8.16137 17.6164 8.04433 17.4908L0.373875 9.82039C0.134471 9.58068 0 9.25576 0 8.91698C0 8.5782 0.134471 8.25327 0.373875 8.01357L8.04433 0.343111C8.28667 0.117293 8.60721 -0.00564438 8.9384 0.000199171C9.2696 0.00604272 9.5856 0.140211 9.81982 0.374438C10.054 0.608665 10.1882 0.924662 10.1941 1.25586C10.1999 1.58705 10.077 1.90759 9.85115 2.14993L4.36251 7.63857H19.175C19.5141 7.63857 19.8392 7.77326 20.079 8.013C20.3187 8.25275 20.4534 8.57792 20.4534 8.91698Z"
                  fill="#4D873D"
                />
              </svg>
            </button>
            <div
              className="
      grid gap-2
      grid-cols-5
      sm:grid-cols-4
      md:grid-cols-6
    "
            >
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`
            w-10 h-10 flex items-center justify-center rounded-full
            transition-all font-medium
            ${
              page === currentPage
                ? "bg-primary-500 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-primary-300"
            }
          `}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-[linear-gradient(140deg,#FFF_1.03%,#CDF4AE_93.17%)]
text-primary-500 rounded-full p-3 shadow-lg
transition-all hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.40915 13.6365C3.40915 13.9755 3.54384 14.3007 3.78359 14.5404C4.02334 14.7802 4.34851 14.9149 4.68756 14.9149H19.5001L14.0114 20.4035C13.8858 20.5205 13.7851 20.6617 13.7152 20.8185C13.6453 20.9753 13.6078 21.1446 13.6047 21.3163C13.6017 21.4879 13.6333 21.6584 13.6976 21.8176C13.7619 21.9768 13.8576 22.1214 13.979 22.2428C14.1004 22.3642 14.245 22.4599 14.4042 22.5242C14.5633 22.5885 14.7338 22.62 14.9055 22.617C15.0771 22.614 15.2464 22.5764 15.4032 22.5065C15.5601 22.4367 15.7012 22.3359 15.8182 22.2103L23.4887 14.5399C23.7281 14.3002 23.8626 13.9752 23.8626 13.6365C23.8626 13.2977 23.7281 12.9728 23.4887 12.733L15.8182 5.06259C15.5759 4.83678 15.2554 4.71384 14.9242 4.71968C14.593 4.72553 14.277 4.85969 14.0427 5.09392C13.8085 5.32815 13.6744 5.64414 13.6685 5.97534C13.6627 6.30653 13.7856 6.62707 14.0114 6.86941L19.5001 12.358H4.68756C4.34851 12.358 4.02334 12.4927 3.78359 12.7325C3.54384 12.9722 3.40915 13.2974 3.40915 13.6365Z"
                  fill="#4D873D"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
