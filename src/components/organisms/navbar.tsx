"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "../atoms/logo";
import Button from "../atoms/button";

const menu = [
  { label: "Beranda", id: "beranda" },
  { label: "Cari Tempat PKL", id: "pencarian" },
  { label: "Informasi", id: "informasi" },
  { label: "Kontak", id: "kontak" },
  { label: "About Us", id: "tentang" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [aktif, setAktif] = useState("");

  // setiap halaman digulir, cari section terakhir yang sudah melewati 40% tinggi layar
  useEffect(() => {
    const cek = () => {
      let id = "";
      menu.forEach((m) => {
        const el = document.getElementById(m.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          id = m.id;
        }
      });
      setAktif(id);
    };
    cek();
    window.addEventListener("scroll", cek);
    return () => window.removeEventListener("scroll", cek);
  }, [pathname]);

  const gayaMenu = (id: string) =>
    `text-sm font-semibold text-purple-900 underline decoration-2 underline-offset-8 transition-colors ${
      aktif === id
        ? "decoration-purple-900"
        : "decoration-transparent hover:decoration-purple-300"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-slate-50 shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 sm:px-8 sm:py-4 lg:px-16">
        <Logo />

        {/* menu desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {menu.map((item) => (
            <li key={item.id}>
              <Link href={`/#${item.id}`} className={gayaMenu(item.id)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Button href="/admin">Admin</Button>
          </li>
        </ul>

        {/* tombol hamburger (HP) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="rounded p-2 text-purple-900 hover:bg-purple-100 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* menu HP */}
      {open && (
        <ul className="border-t border-purple-100 bg-slate-50 px-4 pb-4 md:hidden">
          {menu.map((item) => (
            <li key={item.id} className="py-3">
              <Link
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className={gayaMenu(item.id)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button href="/admin" className="w-full text-center">
              Admin
            </Button>
          </li>
        </ul>
      )}
    </header>
  );
}