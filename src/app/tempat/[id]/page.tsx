import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { getDetailTempatPKL } from '@/lib/api';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function DetailTempatPage({ params }: Props) {
    const { id } = await params; // id ini sekarang berisi documentId dari Strapi

    // Ambil data dari API
    const place = await getDetailTempatPKL(id);

    if (!place) {
        notFound();
    }

    return (
        <main className="w-full bg-gray-50 min-h-screen">
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
                        <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                            {place.foto_detail?.url ? (
                                <img
                                    src={place.foto_detail.url}
                                    alt={`Foto ${place.nama_tempat}`}
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
                            {place.nama_tempat}
                        </h1>

                        {/* Kategori dari relasi Strapi */}
                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                            {place.kategori?.map((k: any, index: number) => (
                                <span
                                    key={index}
                                    className="bg-purple-100 text-[#2D015C] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold"
                                >
                                    {k.nama}
                                </span>
                            ))}
                        </div>

                        {/* Lokasi & Maps */}
                        <div className="mb-6 sm:mb-8">
                            <div className="flex items-start gap-2 sm:gap-3 text-black font-semibold mb-1">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base">{place.lokasi_utama}</span>
                            </div>
                            {place.link_maps && (
                                <a
                                    href={place.link_maps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm text-purple-600 underline break-all block mt-1 pl-7 sm:pl-9"
                                >
                                    {place.link_maps}
                                </a>
                            )}
                        </div>

                        {/* Tentang / Deskripsi */}
                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-base sm:text-lg font-semibold text-black mb-2">
                                Tentang
                            </h2>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                {place.deskripsi}
                            </p>
                        </div>

                        {/* Jurusan yang Sesuai */}
                        <div className="mb-6">
                            <h2 className="text-base sm:text-lg font-bold text-black mb-3">
                                Jurusan Yang Sesuai
                            </h2>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {place.jurusans?.map((jur: any, index: number) => (
                                    <span
                                        key={index}
                                        className="px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100 text-[#2D015C] rounded-full text-xs sm:text-sm font-semibold"
                                    >
                                        {jur.nama}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Role */}
                        <div>
                            <h2 className="text-base sm:text-lg font-bold text-black mb-3">Role</h2>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {place.roles?.map((r: any, index: number) => (
                                    <span
                                        key={index}
                                        className="px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100 text-[#2D015C] rounded-full text-xs sm:text-sm font-semibold"
                                    >
                                        {r.nama}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION CABANG */}
                {place.cabang_list && place.cabang_list.length > 0 && (
                    <div className="mt-8 sm:mt-12">
                        <h2 className="text-lg sm:text-xl font-bold text-black mb-4">
                            Cabang yang Bisa Dipilih
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {place.cabang_list.map((c: any, index: number) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-3 sm:p-4 bg-white shadow-sm hover:shadow-md transition"
                                >
                                    <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">{c.nama_cabang}</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                                        {c.alamat_lengkap}
                                    </p>
                                    <div className="flex flex-col gap-1 text-xs sm:text-sm">
                                        {c.link_maps && (
                                            <a
                                                href={c.link_maps}
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