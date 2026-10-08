export interface Cabang {
    nama: string;
    alamat: string;
    linkMaps?: string;
    telepon?: string;
}

export interface Place {
    id: number;
    nama: string;
    logo: string;
    deskripsi: string;
    kategori: string[];
    jurusan: string[];
    foto: string[];
    lokasi: string;
    linkMaps: string;
    tentang: string;
    daftarKegiatan: string[];
    kuota: number;
    telepon: string;
    email: string;
    website: string;
    role: string[];

    // Field baru: untuk tempat yang punya banyak cabang
    cabang?: Cabang[];
}