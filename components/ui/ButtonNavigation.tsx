"use client";

import { useRouter } from "next/navigation";
import ArrowIcon from "../icons/arrow";

type Props = {
  text: string;
  href?: string; // optional: kalau disediakan, tombol navigasi
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  arrow?: boolean;
  size?: "sm" | "md" | "lg";
};

export default function ButtonNavigation({
  text,
  href,
  onClick,
  arrow = false,
  size = "md",
}: Props) {
  const router = useRouter();

  const sizeClass =
    size === "sm"
      ? "px-4 py-1 text-sm"
      : size === "lg"
      ? "px-8 py-3 text-lg"
      : "px-5 py-1 text-base min-w-[110px]";

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    // panggil onClick eksternal dulu jika ada
    onClick?.(e);
    // navigasi via router kalau href ada
    if (!e.defaultPrevented && href) {
      router.push(href);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center text-center gap-2
  font-semibold text-green-700
  rounded-[38px]
  transition-all duration-200
  hover:scale-105
  shadow-[0_0_8.623px_2.156px_rgba(0,0,0,0.25)]
  bg-[linear-gradient(140deg,#FFF_1.03%,#CDF4AE_93.17%)]
  ${sizeClass}`}
    >
      {text}
    </button>
  );
}
