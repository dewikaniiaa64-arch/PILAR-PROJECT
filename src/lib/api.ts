const API_URL = process.env.NEXT_PUBLIC_API_URL;

type StrapiMasterData = {
    data: { id: number; nama: string }[];
};

// 1. Fungsi Ambil Tempat PKL (Ditambah limit 100)
export async function getTempatPKL() {
    try {
        // Menambahkan &pagination[limit]=100 agar mengambil semua data
        const response = await fetch(`${API_URL}/tempat-pkls?populate=*&pagination[limit]=100`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Gagal mengambil data: ${response.status}`);
        }

        const result = await response.json();
        return result.data || [];
    } catch (error) {
        console.error("Error fetching tempat PKL:", error);
        return [];
    }
}

// 2. Fungsi Penerjemah Data (Mapping)
export function mapStrapiData(item: any) {
    return {
        id: item.id,
        documentId: item.documentId,
        nama: item.nama_tempat,
        logo: item.logo?.url || null,
        deskripsi: item.card_description || item.deskripsi || "",
        lokasi: item.lokasi_utama || "",
        kategori: item.kategori?.map((k: any) => k.nama) || [],
        jurusan: item.jurusans?.map((j: any) => j.nama) || [],
        kuota: item.kuota,
        telepon: item.telepon,
        email: item.email,
        website: item.website,
        linkMaps: item.link_maps,
        fotoDetail: item.foto_detail?.url || null,
    };
}

// 3. Fungsi Ambil Detail Tempat PKL
export async function getDetailTempatPKL(documentId: string) {
    try {
        const response = await fetch(`${API_URL}/tempat-pkls?filters[documentId][$eq]=${documentId}&populate=*`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Gagal mengambil detail: ${response.status}`);
        }

        const result = await response.json();
        return result.data && result.data.length > 0 ? result.data[0] : null;
    } catch (error) {
        console.error("Error fetching detail tempat PKL:", error);
        return null;
    }
}

// 4. Fungsi Ambil Kategori (Anti-Dobel)
export async function getKategori(): Promise<string[]> {
    try {
        // Menambahkan limit 100 juga untuk kategori
        const response = await fetch(`${API_URL}/kategoris?pagination[limit]=100`, { cache: "no-store" });
        if (!response.ok) throw new Error("Gagal mengambil kategori");

        const result: StrapiMasterData = await response.json();

        const rawKategori = result.data?.map((item) => item.nama.trim()) || [];
        return Array.from(new Set(rawKategori));
    } catch (error) {
        console.error(error);
        return [];
    }
}

// 5. Fungsi Ambil Jurusan (Anti-Dobel)
export async function getJurusan(): Promise<string[]> {
    try {
        // Menambahkan limit 100 juga untuk jurusan
        const response = await fetch(`${API_URL}/jurusans?pagination[limit]=100`, { cache: "no-store" });
        if (!response.ok) throw new Error("Gagal mengambil jurusan");

        const result: StrapiMasterData = await response.json();

        const rawJurusan = result.data?.map((item) => item.nama.trim()) || [];
        return Array.from(new Set(rawJurusan));
    } catch (error) {
        console.error(error);
        return [];
    }
}