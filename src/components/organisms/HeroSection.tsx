import Image from "next/image";
import Button from "../atoms/button";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-purple-50">
      {/* lingkaran dekoratif */}
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-200 sm:-right-10 sm:-top-10 sm:h-44 sm:w-44" />
      <div className="absolute -right-6 top-4 h-24 w-24 rounded-full bg-purple-400 sm:-right-8 sm:top-6 sm:h-36 sm:w-36" />
      <div className="absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-purple-200 sm:-bottom-40 sm:-left-20 sm:h-96 sm:w-96" />

      <div className="relative mx-auto grid max-w-6xl gap-y-6 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-x-10 md:gap-y-0 lg:py-20">
        {/* 1. judul */}
        <h1 className="text-center text-3xl font-bold leading-tight text-black sm:text-4xl md:col-start-1 md:row-start-1 md:self-end md:text-left lg:text-5xl">
          Temukan tempat PKL yang tepat untuk masa depanmu
        </h1>

        {/* 2. foto: di HP muncul tepat di bawah judul */}
        <div className="flex justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:items-center">
          <Image
            src="/images/hero.png"
            alt="Siswa mencari tempat PKL bersama"
            width={520}
            height={400}
            priority
            className="h-auto w-full max-w-sm md:max-w-full"
          />
        </div>

        {/* 3. paragraf + tombol */}
        <div className="text-center md:col-start-1 md:row-start-2 md:self-start md:pt-6 md:text-left">
          <p className="mx-auto max-w-md text-sm leading-relaxed text-black md:mx-0">
            Pusat Informasi Tempat PKL membantu siswa menemukan tempat praktik
            kerja lapangan yang sesuai minat dan kebutuhan. Cari tahu nama
            tempat, bidang kegiatan, dan lokasinya dalam satu platform
            terstruktur.
          </p>
          <Button href="/pencarian" variant="outline" className="mt-6 sm:mt-8">
            Jelajahi
          </Button>
        </div>
      </div>
    </section>
  );
}