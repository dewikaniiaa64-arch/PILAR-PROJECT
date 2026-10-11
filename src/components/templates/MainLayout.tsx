"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../organisms/navbar";
import Footer from "../organisms/footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  // Kalau di halaman admin → tidak pakai navbar & footer
  if (isAdmin) {
    return <>{children}</>;
  }

  // Halaman publik → pakai navbar & footer seperti biasa
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}