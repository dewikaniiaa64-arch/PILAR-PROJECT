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
        const cocokJurusan = jurusan === "" || p.jurusan.includes(jurusan);
        const cocokKategori = kategori === "" || p.kategori.includes(kategori);
        return cocokNama && cocokJurusan && cocokKategori;
    });
}