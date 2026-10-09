import React from "react";

export default function TentangPage() {
  return (
    <main className="w-full">
      {/* ===== BANNER FULL LEBAR ===== */}
      <section className="relative w-full overflow-hidden">
        {/* FOTO BACKGROUND
            HP: menutupi seluruh section (object-cover)
            md+: lebar penuh, tinggi mengikuti rasio foto */}
        <img
          src="/images/bg-about.jpg"
          alt=""
          className="absolute inset-0 block h-full w-full select-none object-cover object-right md:static md:h-auto md:object-contain"
          draggable={false}
        />

        {/* lapisan putih tipis agar teks terbaca di HP */}
        <div className="absolute inset-0 bg-white/75 md:hidden" />

        {/* KONTEN
            HP: menumpuk ke bawah
            md+: menimpa foto, berjajar kiri-kanan */}
        <div className="relative flex flex-col items-center gap-6 px-6 py-10 md:absolute md:inset-0 md:flex-row md:gap-0 md:p-0">
          {/* LOGO */}
          <div className="flex justify-center md:w-[34%] md:pl-[2%]">
            <img
              src="/images/logo.png"
              alt="Logo PILAR"
              className="h-auto w-28 sm:w-36 md:w-[60%]"
            />
          </div>

          {/* TEKS */}
          <div className="w-full md:w-[42%]">
            <h1 className="mb-3 text-2xl font-bold text-[#42106D] sm:text-3xl md:mb-3 md:text-2xl lg:text-3xl xl:text-4xl">
              About Pilar
            </h1>

            <p className="mb-3 text-sm leading-relaxed text-[#42106D] sm:text-base md:mb-3 md:text-xs md:leading-snug lg:text-sm xl:text-base">
              <span className="font-semibold">PILAR</span> (Pusat Informasi Dan
              Relasi) adalah platform yang membantu siswa menemukan dan
              mendapatkan informasi mengenai tempat Praktik Kerja Lapangan (PKL)
              yang sesuai dengan jurusan dan bidang yang diminati.
            </p>

            <p className="mb-1 text-sm font-semibold text-[#42106D] sm:text-base md:text-xs lg:text-sm xl:text-base">
              Tujuan Kami adalah:
            </p>

            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#3B1670] sm:text-base md:space-y-0.5 md:text-xs md:leading-snug lg:text-sm xl:text-base">
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