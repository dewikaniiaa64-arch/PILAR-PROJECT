import Link from "next/link";
import { Place } from "../../types/place";
import Badge from "../atoms/badge";
import PlaceLogo from "../atoms/PlaceLogo";

export default function PlaceCard({ place }: { place: Place }) {
    return (
        <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 sm:p-4">
            <PlaceLogo nama={place.nama} logo={place.logo} />
            <h3 className="font-semibold text-black text-sm sm:text-base line-clamp-2">
                {place.nama}
            </h3>
            <p className="line-clamp-3 text-xs text-gray-400">
                {place.deskripsi}
            </p>
            <div className="flex flex-wrap gap-1">
                {place.kategori.map((j) => (
                    <Badge key={j}>{j}</Badge>
                ))}
                {place.jurusan.map((j) => (
                    <Badge key={j}>{j}</Badge>
                ))}
            </div>
            <Link
                href={`/tempat/${place.id}`}
                className="mt-auto rounded bg-linear-to-r from-[#5A0FB6] via-[#6912DA] to-[#670AD799] py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold text-white hover:opacity-90 transition"
            >
                Lihat Detail &gt;
            </Link>
        </div>
    );
}