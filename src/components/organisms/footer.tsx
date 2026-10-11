import Link from "next/link";
import Image from "next/image";
import { Sekuya } from "next/font/google";

const sekuya = Sekuya({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

const kolom = [
  {
    judul: "Tentang",
    link: [
      { label: "Beranda", href: "/#beranda" },
      { label: "About Us", href: "/tentang" },
    ],
  },
  {
    judul: "Jelajahi",
    link: [
      { label: "Informasi", href: "/#informasi" },
      { label: "Cari Tempat PKL", href: "/#pencarian" },
    ],
  },
  {
    judul: "Bantuan",
    link: [
      { label: "FAQ", href: "/#informasi" },
      { label: "Kontak", href: "/#kontak" },
    ],
  },
   {
    judul: "Sosial",
    link: [
      { label: "Instagram", href: "https://instagram.com/smkn2sumedang.official" },
      { label: "Facebook", href: "https://www.facebook.com/officialsmkn2sumedang.sch.id" },
      { label: "Tik Tok", href: "https://tiktok.com/@smkn2sumedang.official" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#FBF5F3] pt-10 sm:pt-16 lg:pt-24">
      <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#3b1d6e_0%,#6b2a9a_60%,#8e3bb8_100%)] text-white">
        {/* gelombang: tinggi menyesuaikan ukuran layar */}
        <svg
          className="absolute left-0 -top-px h-10 w-full fill-[#FBF5F3] sm:h-17.5 lg:h-27.5"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 L160,0 C230,0 250,107 311,107 C400,107 410,20 498,20 C590,20 620,107 720,107 C820,107 850,20 942,20 C1030,20 1050,107 1129,107 C1190,107 1210,0 1290,0 L1440,0 Z" />
        </svg>

        {/* logo bulat + tulisan PILAR */}
        <div className="relative flex flex-col items-center pt-4 sm:pt-6 lg:pt-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-purple-600 bg-slate-50 sm:h-24 sm:w-24 lg:h-30 lg:w-30">
            <Image
              src="/images/logo.png"
              alt="Logo PILAR"
              width={90}
              height={70}
              className="h-auto w-3/4"
            />
          </div>
          <p
            className={`${sekuya.className} mt-4 text-2xl tracking-wider sm:mt-6 sm:text-3xl`}
          >
            PILAR
          </p>
        </div>

       {/* garis putus-putus */}
<div className="mx-auto max-w-6xl px-4 sm:px-6">
  <div className="mt-6 border-t border-dotted border-white/70" />
</div>

        {/* kolom link: 2 kolom di HP, 3 kolom di layar >= sm */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-4 py-8 sm:grid-cols-4 sm:px-6 sm:py-10">
          {kolom.map((k) => (
            <div key={k.judul}>
              <h3 className="text-base font-medium sm:text-lg">{k.judul}</h3>
              <ul className="mt-3 space-y-3 text-sm font-semibold sm:mt-4">
                {k.link.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-purple-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bagian bawah */}
        <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
          <div className="border-t border-white/70" />
         <div className="mt-6 flex justify-center text-xs sm:justify-end">
  <p>© {new Date().getFullYear()} Pusat Informasi Tempat PKL</p>
</div>
        </div>
      </div>
    </footer>
  );
}