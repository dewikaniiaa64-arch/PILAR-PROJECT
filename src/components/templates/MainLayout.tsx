"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../organisms/navbar";
import Footer from "../organisms/footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const halamanAdmin = pathname.startsWith("/admin");

  // halaman admin & login: tampilkan isinya saja, tanpa Navbar dan Footer
  if (halamanAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}