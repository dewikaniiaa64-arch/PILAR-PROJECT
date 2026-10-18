const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getTempatPKL() {
    try {
        const response = await fetch(`${API_URL}/tempat-pkls?populate=*`, {
            cache: "no-store", // Selalu ambil data terbaru
        });

        if (!response.ok) {
            throw new Error(`Gagal mengambil data: ${response.status}`);
        }

        const result = await response.json();
        return result.data || []; // Kembalikan array kosong jika data null
    } catch (error) {
        console.error("Error fetching tempat PKL:", error);
        return []; // Kalau error, kembalikan array kosong agar UI tidak crash
    }
}
// ... kode getTempatPKL tetap ada ...

// Fungsi untuk menerjemahkan data Strapi ke format UI kita
export function mapStrapiData(item: any) {
    return {
        id: item.id,
        documentId: item.documentId,
        nama: item.nama_tempat,
        logo: item.logo?.url || null,
        deskripsi: item.card_description || item.deskripsi || "",
        lokasi: item.lokasi_utama || "",
        // Mengambil array nama dari relasi
        kategori: item.kategori?.map((k: any) => k.nama) || [],
        jurusan: item.jurusans?.map((j: any) => j.nama) || [],
        // Data tambahan untuk halaman detail (jika nanti dibutuhkan)
        kuota: item.kuota,
        telepon: item.telepon,
        email: item.email,
        website: item.website,
        linkMaps: item.link_maps,
        fotoDetail: item.foto_detail?.url || null,
    };
}
// Fungsi untuk mengambil detail 1 tempat berdasarkan Document ID Strapi
export async function getDetailTempatPKL(documentId: string) {
    try {
        // Gunakan filter documentId agar URL-nya SEO friendly (bukan pakai ID angka)
        const response = await fetch(`${API_URL}/tempat-pkls?filters[documentId][$eq]=${documentId}&populate=*`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Gagal mengambil detail: ${response.status}`);
        }

        const result = await response.json();
        // Strapi mengembalikan array, kita ambil data pertama
        return result.data && result.data.length > 0 ? result.data[0] : null;
    } catch (error) {
        console.error("Error fetching detail tempat PKL:", error);
        return null;
    }
}
// Fungsi untuk mengambil data Kategori dari Strapi
export async function getKategori() {
    try {
        const response = await fetch(`${API_URL}/kategoris`, { cache: "no-store" });
        if (!response.ok) throw new Error("Gagal mengambil kategori");
        const result = await response.json();
        // Ambil array nama kategorinya saja (misal: ["Pendidikan", "Teknologi", ...])
        return result.data?.map((item: any) => item.nama) || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Fungsi untuk mengambil data Jurusan dari Strapi
export async function getJurusan() {
    try {
        const response = await fetch(`${API_URL}/jurusans`, { cache: "no-store" });
        if (!response.ok) throw new Error("Gagal mengambil jurusan");
        const result = await response.json();
        // Ambil array nama jurusannya saja
        return result.data?.map((item: any) => item.nama) || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}