import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import MainLayout from "@/components/templates/MainLayout";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "PILAR | Pusat Informasi Lapangan & Relasi",
  description: "Cari dan temukan tempat PKL yang sesuai dengan jurusanmu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${montserrat.variable} ${roboto.variable}`}>
      {/* DIUBAH: montserrat.className -> roboto.className */}
      <body className={roboto.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}