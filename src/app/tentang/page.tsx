import React from "react";

export default function TentangPage() {
  return (
    <main className="w-full">
      {/* ===== BANNER FULL LEBAR ===== */}
      <section className="relative w-full overflow-hidden">
        {/* FOTO BACKGROUND (lebar penuh, tinggi mengikuti rasio foto) */}
        <img
          src="/images/bg-about.jpg"
          alt=""
          className="block h-auto w-full select-none"
          draggable={false}
        />

        {/* KONTEN DI ATAS FOTO */}
        <div className="absolute inset-0 flex items-center">
          {/* LOGO (kiri) */}
          <div className="flex w-[34%] justify-center pl-[2%]">
            <img
              src="/images/logo.png"
              alt="Logo PILAR"
              className="h-auto w-[60%]"
            />
          </div>

          {/* TEKS (berhenti sebelum karakter siswa) */}
          <div className="w-[42%]">
            <h1 className="mb-1 text-sm font-bold text-[#42106D] sm:text-lg md:mb-3 md:text-2xl lg:text-3xl xl:text-4xl">
              About Pilar
            </h1>

            <p className="mb-1 text-[6px] leading-snug text-[#42106D] sm:text-[8px] md:mb-3 md:text-xs lg:text-sm xl:text-base">
              <span className="font-semibold">PILAR</span> (Pusat Informasi Dan
              Relasi) adalah platform yang membantu siswa menemukan dan
              mendapatkan informasi mengenai tempat Praktik Kerja Lapangan (PKL)
              yang sesuai dengan jurusan dan bidang yang diminati.
            </p>

            <p className="mb-0.5 text-[6px] font-semibold text-[#42106D] sm:text-[8px] md:text-xs lg:text-sm xl:text-base">
              Tujuan Kami adalah:
            </p>

            <ul className="list-disc space-y-0.5 pl-3 text-[6px] leading-snug text-[#3B1670] sm:text-[8px] md:pl-5 md:text-xs lg:text-sm xl:text-base">
              <li>Memudahkan siswa mencari tempat PKL.</li>
              <li>
                Menyediakan informasi perusahaan dan instansi yang menerima
                siswa PKL.
              </li>
              <li>Membantu siswa menemukan tempat PKL sesuai jurusan.</li>
              <li>Mempermudah proses pengajuan PKL.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}