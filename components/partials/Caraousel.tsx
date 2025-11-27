"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const carouselData = [
  {
    id: 1,
    title: "Kembali Mengabdi",
    image: "/images/1.jpg",
    href: "/kegiatan/kembali-mengabdi",
  },
  {
    id: 2,
    title: "Rimba Kembali Mengabdi #Batch 1",
    image: "/images/2.jpg",
    href: "/kegiatan/rimba-batch-1",
  },
  {
    id: 3,
    title: "Rimba Kembali Mengabdi #Batch 2",
    image: "/images/1.jpg",
    href: "/kegiatan/rimba-batch-2",
  },
  {
    id: 4,
    title: "Program Edukasi Lingkungan",
    image: "/images/1.jpg",
    href: "/kegiatan/edukasi-lingkungan",
  },
  {
    id: 5,
    title: "Penanaman Pohon Bersama",
    image: "/images/1.jpg",
    href: "/kegiatan/penanaman-pohon",
  },
];

export default function CarouselPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Increased duration for better UX

    return () => clearInterval(interval);
  }, [currentIndex, isAutoplay]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleItems = () => {
    const items = [];

    // For mobile - show only center item
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [{ ...carouselData[currentIndex], position: 0 }];
    }

    // For tablet and desktop - show 3 items
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + carouselData.length) % carouselData.length;
      items.push({ ...carouselData[index], position: i });
    }
    return items;
  };

  const handleItemClick = (href: string, position: number) => {
    if (position === 0) {
      router.push(href);
    } else if (position === -1) {
      handlePrev();
    } else if (position === 1) {
      handleNext();
    }
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="w-full px-4 py-8 lg:px-8 lg:py-16 bg-white">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-12 text-gray-800">
        Kegiatan Kami
      </h2>

      <div
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
      >
        {/* Navigation Buttons - Hidden on mobile, visible on tablet and desktop */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20
            bg-gradient-to-r from-white to-green-100
            text-green-600 rounded-full p-3 lg:p-4 shadow-2xl
            transition-all duration-300 hover:scale-110 hover:shadow-xl
            border border-green-200 backdrop-blur-sm"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="lg:w-7 lg:h-7"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.8636 13.6365C23.8636 13.9755 23.7289 14.3007 23.4891 14.5404C23.2494 14.7802 22.9242 14.9149 22.5852 14.9149H7.77267L13.2613 20.4035C13.3869 20.5205 13.4876 20.6617 13.5575 20.8185C13.6274 20.9753 13.665 21.1446 13.668 21.3163C13.671 21.4879 13.6394 21.6584 13.5751 21.8176C13.5109 21.9768 13.4152 22.1214 13.2938 22.2428C13.1724 22.3642 13.0278 22.4599 12.8686 22.5242C12.7094 22.5885 12.5389 22.62 12.3672 22.617C12.1956 22.614 12.0263 22.5764 11.8695 22.5065C11.7127 22.4367 11.5715 22.3359 11.4545 22.2103L3.78403 14.5399C3.54463 14.3002 3.41016 13.9752 3.41016 13.6365C3.41016 13.2977 3.54463 12.9728 3.78403 12.733L11.4545 5.06259C11.6968 4.83678 12.0174 4.71384 12.3486 4.71968C12.6798 4.72553 12.9958 4.85969 13.23 5.09392C13.4642 5.32815 13.5984 5.64414 13.6042 5.97534C13.6101 6.30653 13.4871 6.62707 13.2613 6.86941L7.77267 12.358H22.5852C22.9242 12.358 23.2494 12.4927 23.4891 12.7325C23.7289 12.9722 23.8636 13.2974 23.8636 13.6365Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20
            bg-gradient-to-l from-white to-green-100
            text-green-600 rounded-full p-3 lg:p-4 shadow-2xl
            transition-all duration-300 hover:scale-110 hover:shadow-xl
            border border-green-200 backdrop-blur-sm"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="lg:w-7 lg:h-7"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.40915 13.6365C3.40915 13.9755 3.54384 14.3007 3.78359 14.5404C4.02334 14.7802 4.34851 14.9149 4.68756 14.9149H19.5001L14.0114 20.4035C13.8858 20.5205 13.7851 20.6617 13.7152 20.8185C13.6453 20.9753 13.6078 21.1446 13.6047 21.3163C13.6017 21.4879 13.6333 21.6584 13.6976 21.8176C13.7619 21.9768 13.8576 22.1214 13.979 22.2428C14.1004 22.3642 14.245 22.4599 14.4042 22.5242C14.5633 22.5885 14.7338 22.62 14.9055 22.617C15.0771 22.614 15.2464 22.5764 15.4032 22.5065C15.5601 22.4367 15.7012 22.3359 15.8182 22.2103L23.4887 14.5399C23.7281 14.3002 23.8626 13.9752 23.8626 13.6365C23.8626 13.2977 23.7281 12.9728 23.4887 12.733L15.8182 5.06259C15.5759 4.83678 15.2554 4.71384 14.9242 4.71968C14.593 4.72553 14.277 4.85969 14.0427 5.09392C13.8085 5.32815 13.6744 5.64414 13.6685 5.97534C13.6627 6.30653 13.7856 6.62707 14.0114 6.86941L19.5001 12.358H4.68756C4.34851 12.358 4.02334 12.4927 3.78359 12.7325C3.54384 12.9722 3.40915 13.2974 3.40915 13.6365Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-20 px-2">
          <button
            onClick={handlePrev}
            className="bg-white/90 text-green-600 rounded-full p-3 shadow-lg
              transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.8636 13.6365C23.8636 13.9755 23.7289 14.3007 23.4891 14.5404C23.2494 14.7802 22.9242 14.9149 22.5852 14.9149H7.77267L13.2613 20.4035C13.3869 20.5205 13.4876 20.6617 13.5575 20.8185C13.6274 20.9753 13.665 21.1446 13.668 21.3163C13.671 21.4879 13.6394 21.6584 13.5751 21.8176C13.5109 21.9768 13.4152 22.1214 13.2938 22.2428C13.1724 22.3642 13.0278 22.4599 12.8686 22.5242C12.7094 22.5885 12.5389 22.62 12.3672 22.617C12.1956 22.614 12.0263 22.5764 11.8695 22.5065C11.7127 22.4367 11.5715 22.3359 11.4545 22.2103L3.78403 14.5399C3.54463 14.3002 3.41016 13.9752 3.41016 13.6365C3.41016 13.2977 3.54463 12.9728 3.78403 12.733L11.4545 5.06259C11.6968 4.83678 12.0174 4.71384 12.3486 4.71968C12.6798 4.72553 12.9958 4.85969 13.23 5.09392C13.4642 5.32815 13.5984 5.64414 13.6042 5.97534C13.6101 6.30653 13.4871 6.62707 13.2613 6.86941L7.77267 12.358H22.5852C22.9242 12.358 23.2494 12.4927 23.4891 12.7325C23.7289 12.9722 23.8636 13.2974 23.8636 13.6365Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="bg-white/90 text-green-600 rounded-full p-3 shadow-lg
              transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.40915 13.6365C3.40915 13.9755 3.54384 14.3007 3.78359 14.5404C4.02334 14.7802 4.34851 14.9149 4.68756 14.9149H19.5001L14.0114 20.4035C13.8858 20.5205 13.7851 20.6617 13.7152 20.8185C13.6453 20.9753 13.6078 21.1446 13.6047 21.3163C13.6017 21.4879 13.6333 21.6584 13.6976 21.8176C13.7619 21.9768 13.8576 22.1214 13.979 22.2428C14.1004 22.3642 14.245 22.4599 14.4042 22.5242C14.5633 22.5885 14.7338 22.62 14.9055 22.617C15.0771 22.614 15.2464 22.5764 15.4032 22.5065C15.5601 22.4367 15.7012 22.3359 15.8182 22.2103L23.4887 14.5399C23.7281 14.3002 23.8626 13.9752 23.8626 13.6365C23.8626 13.2977 23.7281 12.9728 23.4887 12.733L15.8182 5.06259C15.5759 4.83678 15.2554 4.71384 14.9242 4.71968C14.593 4.72553 14.277 4.85969 14.0427 5.09392C13.8085 5.32815 13.6744 5.64414 13.6685 5.97534C13.6627 6.30653 13.7856 6.62707 14.0114 6.86941L19.5001 12.358H4.68756C4.34851 12.358 4.02334 12.4927 3.78359 12.7325C3.54384 12.9722 3.40915 13.2974 3.40915 13.6365Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className={`
            flex items-center justify-center transition-all duration-500 ease-out
            ${visibleItems.length > 1 ? "gap-4 md:gap-6 lg:gap-8" : ""}
            ${isAnimating ? "opacity-90" : "opacity-100"}
          `}
          >
            {visibleItems.map((item, idx) => {
              const isCenter = item.position === 0;
              const isMobile = visibleItems.length === 1;

              return (
                <div
                  key={`${item.id}-${idx}`}
                  className={`
                    transition-all duration-500 ease-in-out cursor-pointer
                    ${isCenter ? "z-10" : "z-0"}
                    ${
                      isCenter
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-60 lg:opacity-70"
                    }
                    ${
                      isMobile
                        ? "w-full"
                        : isCenter
                        ? "w-full md:w-[70%] lg:w-[60%]"
                        : "w-0 md:w-[25%] lg:w-[30%]"
                    }
                  `}
                  onClick={() => handleItemClick(item.href, item.position)}
                >
                  <div className="relative group">
                    {/* Image Container */}
                    <div
                      className={`
                      relative rounded-2xl overflow-hidden shadow-2xl
                      transition-all duration-300 group-hover:shadow-3xl
                      ${
                        isCenter
                          ? "aspect-video"
                          : "aspect-video md:aspect-[4/3]"
                      }
                    `}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={isCenter}
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                        <h3
                          className={`
                          text-white font-bold mb-2 line-clamp-2
                          ${
                            isCenter
                              ? "text-xl md:text-2xl lg:text-3xl"
                              : "text-lg md:text-xl"
                          }
                        `}
                        >
                          {item.title}
                        </h3>

                        {isCenter && (
                          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-green-300 text-sm font-medium">
                              Selengkapnya
                            </span>
                            <svg
                              className="w-4 h-4 text-green-300 transform transition-transform group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Center item badge */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-6 md:mt-8 lg:mt-12">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAnimating(true);
                setCurrentIndex(idx);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`
                transition-all duration-300 rounded-full
                ${
                  currentIndex === idx
                    ? "bg-green-600 scale-110"
                    : "bg-green-300 hover:bg-green-400"
                }
                ${currentIndex === idx ? "h-3 w-8" : "h-3 w-3"}
              `}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
      </div>
    </div>
  );
}
