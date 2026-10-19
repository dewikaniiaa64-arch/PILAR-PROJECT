import { Place } from "../types/place";

export function filterPlaces(
    places: Place[],
    query: string,
    jurusan: string,
    kategori: string
): Place[] {
    const q = query.trim().toLowerCase();

    return places.filter((p) => {
        const cocokNama = p.nama.toLowerCase().includes(q);


        const cocokJurusan = jurusan === "" || p.jurusan.some((j) => j.trim() === jurusan.trim());
        const cocokKategori = kategori === "" || p.kategori.some((k) => k.trim() === kategori.trim());

        return cocokNama && cocokJurusan && cocokKategori;
    });
}