import Link from "next/link";
import { MapPin } from "lucide-react";
import { Place } from "../../types/place";
import PlaceLogo from "../atoms/PlaceLogo";

export default function PlaceListItem({ place }: { place: Place }) {
    // Menggabungkan kategori & jurusan dengan pemisah koma (sesuai desain)
    const semuaKategori = [...place.kategori, ...place.jurusan].join(", ");

    return (
        <div className="flex flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            {/* Logo Kiri */}
            <div className="shrink-0">
                <PlaceLogo nama={place.nama} logo={place.logo} />
            </div>

            {/* Info Tengah */}
            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#370389] text-sm sm:text-base line-clamp-1 mb-1">
                    {place.nama}
                </h3>

                {/* Kategori & Jurusan (Teks biasa, bukan Badge) */}
                <p className="text-xs text-gray-500 mb-1 line-clamp-1">
                    {semuaKategori}
                </p>

                {/* Lokasi */}
                <div className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <p className="truncate">{place.lokasi}</p>
                </div>
            </div>

            {/* Tombol Kanan (Teks Ungu Saja) */}
            <div className="shrink-0 flex items-start pt-0.5 sm:pt-0">
                <Link
                    href={`/tempat/${place.id}`}
                    className="text-xs font-semibold text-[#5A0FB6] hover:text-[#42106D] transition"
                >
                    Lihat Detail
                </Link>
            </div>
        </div>
    );
}