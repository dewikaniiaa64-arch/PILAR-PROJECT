import Link from "next/link";
import { Place } from "../../types/place";
import Badge from "../atoms/badge";
import PlaceLogo from "../atoms/PlaceLogo";

export default function PlaceListItem({ place }: { place: Place }) {
    return (
        <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4">
            <PlaceLogo nama={place.nama} logo={place.logo} />
            <div className="flex-1">
                <h3 className="font-semibold text-purple-900">{place.nama}</h3>
                <p className="text-xs text-gray-600">{place.deskripsi}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                    <Badge>{place.kategori}</Badge>
                    {place.jurusan.map((j) => (
                        <Badge key={j}>{j}</Badge>
                    ))}
                </div>
            </div>
            <Link
                href={`/tempat/${place.id}`}
                className="px-4 py-2 text-xs font-semibold text-purple-950 hover:text-purple-500"
            >
                Lihat Detail
            </Link>
        </div>
    );
}