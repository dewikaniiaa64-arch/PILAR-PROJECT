import React from "react";

export default function TentangPage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-gray-50">
      
      {/* ===== LINGKARAN KIRI ATAS ===== */}
      <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-[#7B5EA7] md:-left-16 md:-top-16 md:h-44 md:w-44" />
      <div className="pointer-events-none absolute left-16 -top-6 h-24 w-24 rounded-full bg-[#B8A0D9] md:left-20 md:-top-8 md:h-32 md:w-32" />
      <div className="pointer-events-none absolute left-0 top-24 h-16 w-16 rounded-full bg-[#D5C5EC] md:left-2 md:top-28 md:h-20 md:w-20" />

      //{/* ===== LINGKARAN KANAN BAWAH ===== */}
      //<div className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-[#7B5EA7] md:-right-16 md:-bottom-16 md:h-44 md:w-44" />
      //<div className="pointer-events-none absolute right-16 -bottom-6 h-24 w-24 rounded-full bg-[#B8A0D9] md:right-20 md:-bottom-8 md:h-32 md:w-32" />
      //<div className="pointer-events-none absolute right-0 bottom-24 h-16 w-16 rounded-full bg-[#D5C5EC] md:right-2 md:bottom-28 md:h-20 md:w-20" />

      {/* ===== KONTEN ===== */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 md:px-12">
        <div className="w-full max-w-4xl">
          
          {/* Layout: logo kiri, teks kanan */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
            
            {/* ===== LOGO ===== */}
            <div className="shrink-0">
              <img
                src="/image/logo.png"
                alt="Logo PILAR"
                className="h-40 w-auto md:h-56"
              />
            </div>

            {/* ===== TEKS ===== */}
            <div className="flex-1">
              {/* Judul */}
              <h1 className="mb-6 text-center text-2xl font-bold text-[#5B2A86] md:text-left md:text-3xl">
                About Pilar
              </h1>

              {/* Paragraf 1 */}
              <p className="mb-5 text-xs leading-relaxed text-[#1a1a1a] md:text-sm">
                <span className="font-semibold">PILAR</span> (Pusat Informasi
                Dan Relasi) adalah platform yang membantu siswa menemukan dan
                mendapatkan informasi mengenai tempat Praktik Kerja Lapangan
                (PKL) yang sesuai dengan jurusan dan bidang yang diminati.
              </p>

              {/* Subjudul */}
              <p className="mb-2 text-xs font-semibold text-[#1a1a1a] md:text-sm">
                Tujuan Kami adalah:
              </p>

              {/* List */}
              <ul className="list-disc space-y-1 pl-5 text-xs leading-relaxed text-[#1a1a1a] md:text-sm">
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
        </div>
      </div>
    </main>
  );
}