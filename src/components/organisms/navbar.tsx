"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Cari Tempat PKL", href: "/pencarian" },
  { label: "Informasi", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const tutupMenu = () => setOpen(false);

  // warna teks selalu sama; yang berubah hanya warna garis bawahnya
  const gayaMenu = (href: string) =>
    `text-sm font-semibold text-purple-900 underline decoration-2 underline-offset-8 transition-colors ${
      pathname === href
        ? "decoration-purple-900"
        : "decoration-transparent hover:decoration-purple-300"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-slate-50 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Logo />

        {/* menu desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={gayaMenu(item.href)}>
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
          aria-expanded={open}
          className="rounded p-2 text-purple-900 hover:bg-purple-100 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* menu HP */}
      {open && (
        <ul className="border-t border-purple-100 bg-slate-50 px-4 pb-4 md:hidden">
          {menu.map((item) => (
            <li key={item.href} className="py-3">
              <Link
                href={item.href}
                onClick={tutupMenu}
                className={gayaMenu(item.href)}
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