import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import StepItem from "@/components/molecules/Stepitem";

// pembungkus bulat hitam (hanya dipakai ikon pencarian)
const iconWrap =
  "flex h-8 w-8 items-center justify-center rounded-full bg-black text-white";

const steps = [
  {
    icon: (
      <span className={iconWrap}>
        <Search className="h-4 w-4" strokeWidth={2.5} />
      </span>
    ),
    title: "Cari tempat yang sesuai minatmu",
    description:
      "Gunakan fitur pencarian untuk menemukan tempat PKL berdasarkan bidang atau lokasi yang kamu inginkan.",
  },
  {
    // DIUBAH: SVG dipanggil langsung, tanpa pembungkus dan tanpa filter
    icon: (
      <Image
        src="/images/icons/peringatan.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0"
      />
    ),
    title: "Baca detail informasi tempat",
    description:
      "Pelajari profil, bidang kegiatan, dan lokasi setiap tempat PKL secara lengkap.",
  },
  {
    // DIUBAH: SVG dipanggil langsung, tanpa pembungkus dan tanpa filter
    icon: (
      <Image
        src="/images/icons/panah.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0"
      />
    ),
    title: "Tentukan pilihan terbaikmu",
    description:
      "Bandingkan pilihan yang ada dan putuskan tempat PKL yang paling cocok untukmu.",
  },
];

export default function StepsSection() {
  return (
    <section className="w-full min-h-screen bg-purple-50 py-16 px-6 md:px-12 lg:px-20 flex items-center">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <h2 className="max-w-xl text-2xl font-bold leading-snug text-black sm:text-3xl md:max-w-2xl md:text-4xl lg:text-5xl">
  Tiga langkah sederhana menemukan tempat PKL impian
</h2>

          <p className="max-w-2xl text-sm leading-relaxed text-black sm:text-base">
            Prosesnya tidak rumit. Kamu cukup mencari, membaca detail, lalu
            menentukan pilihan. Semua informasi tersaji rapi dalam satu platform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepItem
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}