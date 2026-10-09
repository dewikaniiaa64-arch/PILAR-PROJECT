import React from "react";
import { Search, Info, RotateCw } from "lucide-react";
import StepItem from "@/components/molecules/Stepitem";

const steps = [
  {
    icon: <Search className="h-8 w-8 text-black" strokeWidth={2} />,
    title: "Cari tempat yang sesuai minatmu",
    description:
      "Gunakan fitur pencarian untuk menemukan tempat PKL berdasarkan bidang atau lokasi yang kamu inginkan.",
  },
  {
    icon: <Info className="h-8 w-8 text-black" strokeWidth={2} />,
    title: "Baca detail informasi tempat",
    description:
      "Pelajari profil, bidang kegiatan, dan lokasi setiap tempat PKL secara lengkap.",
  },
  {
    icon: <RotateCw className="h-8 w-8 text-black" strokeWidth={2} />,
    title: "Tentukan pilihan terbaikmu",
    description:
      "Bandingkan pilihan yang ada dan putuskan tempat PKL yang paling cocok untukmu.",
  },
];

export default function StepsSection() {
  return (
    <section id="informasi" className="w-full min-h-screen bg-purple-50 py-16 px-6 md:px-12 lg:px-20 flex items-center">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <h2 className="text-3xl font-bold leading-tight text-purple-950 md:text-4xl lg:text-5xl">
            Tiga langkah sederhana
            <br />
            menemukan tempat PKL
            <br />
            impian
          </h2>

          <p className="text-sm leading-relaxed text-purple-950 md:text-base md:pt-2">
            Prosesnya tidak rumit. Kamu cukup mencari, membaca detail, lalu
            menentukan pilihan. Semua informasi tersaji rapi dalam satu
            platform.
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