import ContactCard from "../molecules/ContactCard";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const kontak = [
  {
    judul: "Admin",
    deskripsi:
      "Untuk kendala atau pertanyaan mengenai Website dan informasi tempat PKL",
    links: [
      { label: "WhatsApp", href: "https://wa.me/6281325463214", tipe: "whatsapp" },
      { label: "Email", href: "mailto:admin@pilar.example", tipe: "email" },
    ],
  },
  {
    judul: "Wakasek Hubin",
    deskripsi:
      "Untuk informasi umum mengenai PKL termasuk kebijakan dan ketentuan yang berlaku.",
    links: [
      { label: "WhatsApp", href: "https://wa.me/628122250189", tipe: "whatsapp" },
      { label: "Email", href: "mailto:hubin@pilar.example", tipe: "email" },
    ],
  },
  {
    judul: "Kaprog",
    deskripsi:
      "Untuk kendala atau pertanyaan mengenai Website dan informasi tempat PKL",
    links: [
      { label: "AKL", href: "https://wa.me/6289665345365", tipe: "whatsapp" },
      { label: "PM", href: "https://wa.me/6281234567893", tipe: "whatsapp" },
      { label: "MPLB", href: "https://wa.me/6282167489238", tipe: "whatsapp" },
      { label: "PPLG", href: "https://wa.me/6285224303770", tipe: "whatsapp" },
    ],
  },
] as const;

export default function ContactSection() {
  return (
    <section
  className={`${roboto.className} bg-purple-50 px-4 py-12 sm:px-6 sm:py-16`}
>
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold text-black">Kontak</p>
        <h1 className="mt-2 text-4xl font-bold text-black md:text-5xl">
          Hubungi Kami
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-black">
          Punya pertanyaan mengenai tempat PKL atau informasi yang tersedia?
          Jangan ragu untuk menghubungi kami melalui kontak berikut
        </p>

        {/* 2 kartu di atas, kartu ke-3 otomatis di tengah bawah */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:mt-14 md:gap-x-20">
          {kontak.map((k) => (
            <ContactCard
              key={k.judul}
              judul={k.judul}
              deskripsi={k.deskripsi}
              links={[...k.links]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}