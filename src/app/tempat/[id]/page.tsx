// src/app/tempat/[id]/page.tsx
import Link from 'next/link';
import { places } from '@/data/places';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function DetailTempatPage({ params }: Props) {
    const { id } = await params;

    const place = places.find((p) => p.id === Number(id));

    if (!place) {
        notFound();
    }

    return (
        <main className="w-full bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Tombol Kembali */}
                <Link
                    href="/pencarian"
                    className="inline-flex items-center text-[#2D015C] font-semibold mb-6 sm:mb-8 hover:underline text-sm sm:text-base"
                >
                    <span className="mr-2">←</span> Kembali
                </Link>

                {/* Grid Layout: 2 Kolom */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-10">

                    {/* KOLOM KIRI: Gambar & Card Info */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {/* Gambar Utama */}
                        <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                            {place.foto && place.foto[0] ? (
                                <img
                                    src={place.foto[0]}
                                    alt={`Foto ${place.nama}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Tidak ada foto
                                </div>
                            )}
                        </div>

                        {/* Card Info (Kuota, Kontak) */}
                        <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 bg-white shadow-sm">
                            <div className="mb-4 sm:mb-6">
                                <p className="text-sm text-black mb-1">Kuota</p>
                                <p className="text-lg sm:text-xl font-bold text-black">
                                    {place.kuota} Siswa
                                </p>
                            </div>

                            <div className="space-y-3 sm:space-y-4 text-[#8B5CF6] text-sm sm:text-base">
                                {/* Telepon */}
                                {place.telepon && (
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                                        <a href={`tel:${place.telepon}`} className="hover:text-purple-300 break-all">
                                            {place.telepon}
                                        </a>
                                    </div>
                                )}

                                {/* Email */}
                                {place.email && (
                                    <div className="flex items-start gap-3">
                                        <Mail className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                                        <a href={`mailto:${place.email}`} className="hover:text-purple-300 break-all">
                                            {place.email}
                                        </a>
                                    </div>
                                )}

                                {/* Website */}
                                {place.website && (
                                    <div className="flex items-start gap-3">
                                        <Globe className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                                        <a
                                            href={place.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-purple-300 break-all"
                                        >
                                            {place.website}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* KOLOM KANAN: Detail Teks */}
                    <div className="flex flex-col pt-0 md:pt-2">
                        {/* Judul & Kategori */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
                            {place.nama}
                        </h1>
                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                            {place.kategori.map((k, index) => (
                                <span
                                    key={index}
                                    className="bg-purple-100 text-[#2D015C] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold"
                                >
                                    {k}
                                </span>
                            ))}
                        </div>

                        {/* Lokasi & Maps */}
                        <div className="mb-6 sm:mb-8">
                            <div className="flex items-start gap-2 sm:gap-3 text-black font-semibold mb-1">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base">{place.lokasi}</span>
                            </div>
                            {place.linkMaps && (
                                <a
                                    href={place.linkMaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm text-[#8B5CF6] hover:text-purple-500 underline break-all block mt-1 pl-7 sm:pl-9"
                                >
                                    {place.linkMaps}
                                </a>
                            )}
                        </div>

                        {/* Tentang */}
                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-base sm:text-lg font-semibold text-black mb-2">
                                Tentang
                            </h2>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                {place.tentang}
                            </p>
                        </div>

                        {/* Kegiatan */}
                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-base sm:text-lg font-semibold text-black mb-2">
                                Kegiatan
                            </h2>
                            <ul className="list-disc list-inside text-black space-y-1 ml-2 text-sm sm:text-base">
                                {place.daftarKegiatan.map((kegiatan, index) => (
                                    <li key={index}>{kegiatan}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Jurusan yang Sesuai */}
                        <div className="mb-6">
                            <h2 className="text-base sm:text-lg font-bold text-black mb-3">
                                Jurusan Yang Sesuai
                            </h2>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {place.jurusan.map((jur, index) => (
                                    <span
                                        key={index}
                                        className="px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100 text-[#2D015C] rounded-full text-xs sm:text-sm font-semibold"
                                    >
                                        {jur}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Role */}
                        <div>
                            <h2 className="text-base sm:text-lg font-bold text-black mb-3">Role</h2>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {place.role.map((r, index) => (
                                    <span
                                        key={index}
                                        className="px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100 text-[#2D015C] rounded-full text-xs sm:text-sm font-semibold"
                                    >
                                        {r}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION CABANG */}
                {place.cabang && place.cabang.length > 0 && (
                    <div className="mt-8 sm:mt-12">
                        <h2 className="text-lg sm:text-xl font-bold text-black mb-4">
                            Cabang yang Bisa Dipilih
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {place.cabang.map((c, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-3 sm:p-4 bg-white shadow-sm hover:shadow-md transition"
                                >
                                    <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">{c.nama}</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                                        {c.alamat}
                                    </p>
                                    <div className="flex flex-col gap-1 text-xs sm:text-sm">
                                        {c.linkMaps && (
                                            <a
                                                href={c.linkMaps}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#370389] hover:text-purple-500 underline flex items-center gap-2 break-all"
                                            >
                                                <MapPin className="w-4 h-4 shrink-0" /> Lihat di Maps
                                            </a>
                                        )}
                                        {c.telepon && (
                                            <a
                                                href={`tel:${c.telepon}`}
                                                className="text-[#370389] hover:text-purple-500 flex items-center gap-2"
                                            >
                                                <Phone className="w-4 h-4 shrink-0" /> {c.telepon}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}