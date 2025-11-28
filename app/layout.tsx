import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

export const metadata: Metadata = {
  title: "Rimba Kembali",
  description:
    "Bersama-sama mengembalikan bumi menjadi hijau dan lestari untuk generasi mendatang",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins bg-linear-to-b from-primary-50 to-primary-200">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
