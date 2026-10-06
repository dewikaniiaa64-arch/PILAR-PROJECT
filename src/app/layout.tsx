import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import MainLayout from "@/components/templates/MainLayout";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
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
    <html lang="id">
      <body className={montserrat.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
