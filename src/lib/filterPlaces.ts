import { Place } from "../types/place";

export function filterPlaces(
    places: Place[],
    query: string,
    jurusan: string,
    kategori: string
): Place[] {
    // Jika places kosong (masih loading), langsung kembalikan array kosong
    if (!places) return [];

    const q = query.trim().toLowerCase();

    return places.filter((p) => {
        // 1. Cek Nama (jika query kosong, otomatis true)
        const cocokNama = q === "" || p.nama.toLowerCase().includes(q);

        // 2. Cek Jurusan (Gunakan trim untuk jaga-jaga ada spasi dari API)
        const cocokJurusan =
            jurusan === "" ||
            p.jurusan.some((j) => j.trim().toLowerCase() === jurusan.trim().toLowerCase());

        // 3. Cek Kategori
        const cocokKategori =
            kategori === "" ||
            p.kategori.some((k) => k.trim().toLowerCase() === kategori.trim().toLowerCase());

        return cocokNama && cocokJurusan && cocokKategori;
    });
}