export type Place = {
    id: number;
    documentId: string;
    nama: string;
    logo: string;
    deskripsi: string;
    lokasi: string;
    kategori: string[];
    jurusan: string[];
    // Opsional untuk halaman detail
    kuota?: number;
    telepon?: string;
    email?: string;
    website?: string;
    linkMaps?: string;
    fotoDetail?: string | null;
};