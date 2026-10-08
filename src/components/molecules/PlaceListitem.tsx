import Link from "next/link";
import { MapPin } from "lucide-react";
import { Place } from "../../types/place";
import Badge from "../atoms/badge";
import PlaceLogo from "../atoms/PlaceLogo";

export default function PlaceListItem({ place }: { place: Place }) {
    return (
        <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 sm:p-4 sm:flex-row sm:items-center sm:gap-4">
            {/* Logo + Judul + Info */}
            <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                <PlaceLogo nama={place.nama} logo={place.logo} />
                <div className="flex-1">
                    <h3 className="font-semibold text-black text-sm sm:text-base line-clamp-2">
                        {place.nama}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                        {place.kategori.map((k) => (
                            <Badge key={k}>{k}</Badge>
                        ))}
                        {place.jurusan.map((j) => (
                            <Badge key={j}>{j}</Badge>
                        ))}
                    </div>
                    <div className="mt-1.5 flex items-start gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-gray-400 mt-0.5" />
                        <p className="text-xs text-gray-400 line-clamp-2">
                            {place.lokasi}
                        </p>
                    </div>
                </div>
            </div>

            {/* Tombol */}
            <Link
                href={`/tempat/${place.id}`}
                className="shrink-0 rounded bg-linear-to-r from-[#5A0FB6] via-[#6912DA] to-[#670AD799] px-4 py-2 text-center text-xs font-semibold text-white hover:opacity-90 transition sm:w-auto"
            >
                Lihat Detail
            </Link>
        </div>
    );
}