# PRD — PILAR (Pusat Informasi Lapangan & Relasi)

|                   |                                                  |
| ----------------- | ------------------------------------------------ |
| **Document Type** | Product Requirements Document                    |
| **Project Name**  | PILAR                                            |
| **Tagline**       | "Pilar Awal Menuju Pengalaman Profesional."      |
| **Version**       | 1.0.0                                            |
| **Status**        | Draft                                            |
| **Last Updated**  | 2026-10-19                                       |
| **Audience**      | Tim pengembang (tambahkan pihak lain bila perlu) |
| **Deploy**        | https://pilar-project.vercel.app/                |

---

## 1. Project Overview

### 1.1 Background

PILAR adalah platform web yang membantu siswa menemukan dan mendapatkan informasi mengenai tempat Praktik Kerja Lapangan (PKL) yang sesuai dengan jurusan dan bidang yang diminati.

Siswa SMK kesulitan menentukan tempat PKL karena informasi yang tersedia tersebar, tidak terstruktur, dan tidak selalu relevan dengan kebutuhan siswa. Siswa juga tidak tahu opsi apa saja yang tersedia, tidak punya gambaran detail tiap tempat, tidak bisa membandingkan pilihan secara objektif, dan tidak punya panduan kriteria memilih. Akibatnya, keputusan diambil tanpa pertimbangan matang.

### 1.2 Problem Validation

| Akar Masalah        | Gambaran dari Sisi Siswa                                  |
| ------------------- | --------------------------------------------------------- |
| Tidak tahu opsi     | "Aku baru tahu tempat X dari teman, katanya ada di sana." |
| Tidak tahu detail   | "Aku nggak tahu kerjanya ngapain aja di sana."            |
| Tidak tahu kriteria | "Aku ikut teman aja, soalnya nggak tahu harus lihat apa." |

- **Masalah utama:** informasi tersebar, tetapi tidak terpusat.
- **Solusi utama:** PILAR sebagai pusat informasi (**list + detail + search**).

### 1.3 Product Vision

Menjadi pusat informasi tempat PKL yang terstruktur, mudah dicari, dan mudah dipahami oleh siswa.

### 1.4 Value Proposition

Mempermudah siswa dalam mencari tempat PKL tanpa harus mencari informasi secara manual dari berbagai sumber.

### 1.5 Objectives

1. Memudahkan siswa mencari tempat PKL.
2. Menyediakan informasi perusahaan dan instansi yang menerima siswa PKL.
3. Membantu siswa menemukan tempat PKL sesuai jurusan.

### 1.6 Success Metrics

| Metric              | Target awal                                                     |
| ------------------- | --------------------------------------------------------------- |
| Kelengkapan halaman | Seluruh halaman pada bagian 6 tersedia dan dapat diakses        |
| Pencarian & filter  | Hasil sesuai jurusan dan kategori yang dipilih                  |
| Detail tempat       | Setiap tempat memiliki halaman detail yang terbuka dengan benar |
| Responsive UI       | Dapat digunakan di desktop, tablet, dan mobile                  |
| Build quality       | Production build berhasil                                       |

---

## 2. Scope

### 2.1 In Scope

- Navbar dan footer di seluruh halaman.
- Beranda.
- Halaman pencarian: daftar tempat PKL dalam bentuk card / list, filter jurusan dan kategori, pagination.
- Halaman detail tempat PKL, termasuk daftar cabang untuk tempat yang memiliki cabang.
- Bagian 3 langkah menemukan tempat PKL.
- FAQ.
- Halaman/bagian kontak.
- Halaman About Us.
- Responsive layout.

### 2.2 Out of Scope

- Login/akun siswa.
- Pengajuan PKL langsung melalui sistem.
- Formulir pengajuan tempat PKL baru (pengajuan dilakukan dengan menghubungi admin melalui halaman Kontak).
- Fitur perbandingan otomatis antar tempat.
- Rating/ulasan tempat PKL.
- Dashboard admin di web (kemungkinan dikembangkan di kemudian hari; saat ini data dikelola lewat Strapi).

Fitur out of scope tidak boleh dibuat tanpa persetujuan eksplisit.

---

## 3. Target User

| Peran           | Deskripsi                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Siswa           | Pengguna utama: siswa yang akan melaksanakan PKL. Dapat mengakses seluruh halaman publik tanpa login.                |
| Admin (backend) | Mengelola data tempat PKL (termasuk kuota) melalui Strapi. Tidak memiliki antarmuka khusus di situs publik saat ini. |

Situs juga menampilkan kontak Wakasek Hubin dan Kaprog sebagai narahubung informasi, tetapi keduanya tidak mengelola data di sistem.

---

## 4. Functional Requirements

### FR-001 — Navbar & Footer

Requirements:

- Navbar tampil di semua halaman dan memuat tautan: Beranda, Cari Tempat PKL, Informasi, Kontak, About Us.
- Footer memuat tautan navigasi (Tentang, Jelajahi, Bantuan), tautan media sosial, dan informasi hak cipta.

Acceptance criteria:

- Given pengguna di halaman mana pun, then navbar dan footer tampil konsisten.
- Given pengguna menekan tautan navbar, then pengguna diarahkan ke bagian/halaman yang sesuai.

### FR-002 — Beranda

Requirements:

- Menampilkan judul dan deskripsi singkat PILAR, ilustrasi, dan tombol "Jelajahi" menuju halaman pencarian.
- Memuat bagian pencarian, 3 langkah, FAQ, dan kontak dalam satu alur halaman.

Acceptance criteria:

- Given pengguna menekan "Jelajahi", then pengguna diarahkan ke halaman pencarian.

### FR-003 — Pencarian Tempat PKL (Card & List)

Requirements:

- Menampilkan daftar tempat PKL dalam bentuk card (logo, nama, deskripsi singkat, kategori, seluruh jurusan yang sesuai, tombol "Lihat Detail").
- Filter berdasarkan **Jurusan**: Akuntansi, MPLB, Pemasaran, PPLG.
- Filter berdasarkan **Kategori** (dropdown), dengan opsi bawaan "Semua Kategori" (menampilkan semua tempat) dan kategori dari Strapi: Pemerintahan & Pelayanan Publik; Pendidikan & Administrasi; Teknologi & Industri; Bisnis, Keuangan & Retail; Industri. "Semua Kategori" hanya berupa opsi bawaan filter; entri "Semua Kategori" ganda yang masih ada di data Strapi akan dihapus.
- Pencarian berdasarkan nama tempat.
- Pagination.
- Tampilan list selain card.
- Loading, empty, dan error states.

Acceptance criteria:

- Given pengguna memilih jurusan, then hanya tempat yang sesuai jurusan tersebut yang tampil.
- Given pengguna memilih kategori, then hanya tempat dengan kategori tersebut yang tampil.
- Given pengguna memilih opsi bawaan "Semua Kategori", then tempat dari semua kategori tampil.
- Given pengguna mengetik nama tempat, then hanya tempat dengan nama yang sesuai yang tampil.
- Given jurusan dan kategori dipilih bersamaan, then hasil memenuhi keduanya.
- Given tempat memiliki lebih dari satu jurusan, then card menampilkan seluruh jurusan tersebut.
- Given hasil kosong, then empty state ditampilkan.
- Given pengambilan data gagal, then error state ditampilkan, bukan empty state.

### FR-004 — Detail Tempat PKL

Requirements:

- Setiap tempat memiliki halaman detail sendiri (`/tempat/:id`).
- Halaman detail menampilkan:
  - Foto tempat.
  - Nama tempat dan label kategori.
  - Alamat lengkap beserta tautan Google Maps.
  - **Tentang**: deskripsi tempat.
  - **Jurusan Yang Sesuai**: satu atau lebih jurusan.
  - **Role**: posisi/peran yang tersedia bagi siswa PKL (contoh: Staf Administrasi Publik, Staf Pelayanan, Staf Data, Staf Rekam Medis).
  - **Kuota**: jumlah siswa yang diterima (contoh: 10 Siswa). Untuk tempat yang memiliki cabang, kuota mencakup seluruh cabang dan tidak ditampilkan pada card cabang. Angka kuota ditampilkan sebagai informasi total penerimaan. Angka ini tidak dibagi berdasarkan jumlah role yang tersedia. Pembagian kuota per role diserahkan sepenuhnya kepada kebijakan masing-masing perusahaan/instansi mitra.
  - Kontak tempat: telepon, email, dan website.
- Untuk tempat yang memiliki cabang (contoh: Alfamart), bagian **Cabang yang Bisa Dipilih** berisi card per cabang: nama cabang, alamat, tautan "Lihat di Maps", dan nomor telepon. Tempat tanpa cabang (contoh: RSUD) tidak menampilkan bagian ini.
- Tidak ada bagian lain selain yang tercantum di atas.
- ID yang tidak ditemukan menampilkan not-found state.

Acceptance criteria:

- Given pengguna menekan "Lihat Detail", then halaman detail tempat tersebut terbuka.
- Given tempat memiliki lebih dari satu jurusan, then seluruh jurusan tampil pada "Jurusan Yang Sesuai".
- Given pengguna menekan tautan peta, then lokasi tempat terbuka di Google Maps.
- Given tempat memiliki cabang, then seluruh cabangnya tampil pada "Cabang yang Bisa Dipilih".
- Given tempat tidak memiliki cabang, then bagian "Cabang yang Bisa Dipilih" tidak tampil.
- Given tempat memiliki cabang, then kuota hanya tampil di bagian utama halaman detail, bukan di card cabang.
- Given pengguna menekan "Lihat di Maps" pada sebuah cabang, then lokasi cabang tersebut terbuka di Google Maps.
- Given ID tidak valid, then not-found state tampil.

### FR-005 — Tiga Langkah

Requirements: menampilkan tiga langkah:

1. Cari tempat yang sesuai minatmu.
2. Baca detail informasi tempat.
3. Tentukan pilihan terbaikmu.

Deskripsi langkah 1 mengikuti perilaku pencarian: pencarian berdasarkan nama tempat, sedangkan filter berdasarkan jurusan dan bidang (kategori).

### FR-006 — FAQ

Requirements:

- Menampilkan daftar pertanyaan yang dapat dibuka/ditutup. Pertanyaan saat ini: cara mencari tempat, informasi yang tersedia, kriteria pemilihan, pembaruan informasi, dan pengajuan tempat baru.
- Jawaban untuk "Apakah bisa mengajukan tempat baru?": pengajuan dilakukan dengan menghubungi admin melalui halaman Kontak.
- Jawaban untuk pertanyaan lainnya mengikuti isi FAQ yang sudah final di situs.

### FR-007 — Kontak

Requirements:

- Menampilkan kontak untuk Admin, Wakasek Hubin, dan Kaprog (per jurusan), masing-masing dengan WhatsApp dan/atau email.

### FR-008 — About Us

Requirements:

- Menampilkan penjelasan PILAR, tujuan, dan logo.
- Nama lengkap yang dipakai adalah **Pusat Informasi Lapangan dan Relasi**.

---

## 5. Business Rules

| ID     | Rule                                                                                                                                               |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| BR-001 | Halaman publik dapat diakses tanpa login                                                                                                           |
| BR-002 | Setiap tempat PKL wajib memiliki kategori dan minimal satu jurusan                                                                                 |
| BR-003 | Kategori hanya memakai nilai yang ditentukan di Strapi (5 kategori, termasuk "Industri")                                                           |
| BR-004 | Jurusan hanya memakai nilai yang ditentukan (4 jurusan)                                                                                            |
| BR-005 | Error tidak membocorkan secret atau stack trace                                                                                                    |
| BR-006 | Data tempat PKL bersumber dari Strapi. Perubahan data, termasuk kuota, dilakukan oleh admin (backend) melalui Strapi; pihak lain menghubungi admin |
| BR-007 | Data pada card dan halaman detail berasal dari satu sumber (Strapi) dan harus konsisten                                                            |

---

## 6. Information Architecture

| Route         | Halaman                                                     | Akses  |
| ------------- | ----------------------------------------------------------- | ------ |
| `/`           | Beranda (dengan bagian pencarian, informasi, kontak, about) | Publik |
| `/pencarian`  | Pencarian tempat PKL                                        | Publik |
| `/tempat/:id` | Detail tempat PKL                                           | Publik |
| `/tentang`    | About Us                                                    | Publik |

Bagian 3 langkah, FAQ, dan kontak tetap berupa bagian di beranda (bukan halaman terpisah).

---

## 7. Technical Requirements

Spesifikasi teknis ditulis di bagian ini karena tidak ada dokumen `TECHNICAL_SPEC.md` terpisah.

Stack (berdasarkan `package.json`):

| Komponen                 | Teknologi                                     |
| ------------------------ | --------------------------------------------- |
| Framework                | Next.js 16.3.8                                |
| UI library               | React 19.2.8                                  |
| Bahasa                   | TypeScript 5                                  |
| Styling                  | Tailwind CSS 4 (`@tailwindcss/postcss`)       |
| Ikon                     | lucide-react                                  |
| Linting                  | ESLint 9 (`eslint-config-next`)               |
| Hosting frontend         | Vercel                                        |
| Sumber data tempat PKL   | Strapi (headless CMS), diakses lewat REST API |
| Hosting backend (Strapi) | Railway                                       |

Routing: Next.js App Router.

Prinsip:

- Pisahkan UI, business logic, dan data.
- Gunakan komponen yang dapat dipakai ulang.
- Jangan melakukan refactor luas di luar scope.

---

## 8. Data Model

```ts
type Jurusan = "Akuntansi" | "MPLB" | "Pemasaran" | "PPLG";

type Kategori =
  | "Pemerintahan & Pelayanan Publik"
  | "Pendidikan & Administrasi"
  | "Bisnis, Keuangan & Retail"
  | "Teknologi & Industri"
  | "Industri";

interface Cabang {
  nama: string;
  alamat: string;
  mapsUrl: string;
  telepon: string;
}

interface TempatPKL {
  id: string;
  nama: string;
  deskripsi: string;
  logo: string;
  foto: string;
  kategori: Kategori;
  jurusan: Jurusan[];
  role: string[];
  alamat: string;
  mapsUrl: string;
  kuota: number; // untuk tempat bercabang, mencakup seluruh cabang
  telepon: string;
  email: string;
  website: string;
  cabang?: Cabang[];
}
```

---

## 9. UI/UX Requirements

- Layout konsisten dengan navbar di atas dan footer di bawah.
- Card tempat PKL dengan logo, nama, deskripsi singkat, label kategori, dan seluruh jurusan.
- UI states untuk fitur yang mengambil data: initial, loading, success, empty, error.
- Responsive: desktop, tablet, mobile; hindari horizontal overflow.
- Accessibility: gambar memiliki teks alternatif, dapat dinavigasi dengan keyboard, fokus terlihat, tombol ikon memiliki nama aksesibel.
- Tidak ada dokumen UI/UX terpisah; acuan tampilan adalah situs yang sudah dideploy (lihat **Deploy** di bagian atas dokumen).

---

## 10. Non-Functional Requirements (usulan awal)

- **Performance:** gunakan pagination, optimalkan gambar/logo.
- **Security:** jangan mengekspos secret di frontend; validasi parameter pada URL/query.
- **Maintainability:** penamaan konsisten dan modul punya tanggung jawab jelas.
- **Reliability:** tangani kegagalan memuat data dan halaman tidak ditemukan.

---

## 11. Final Acceptance Criteria

- [ ] Seluruh halaman dalam scope tersedia.
- [ ] Daftar tempat PKL tampil dalam card.
- [ ] Filter jurusan dan kategori berfungsi, termasuk bila dipakai bersamaan.
- [ ] Pagination berfungsi.
- [ ] Halaman detail tersedia untuk setiap tempat, termasuk daftar cabang bila ada.
- [ ] Navbar, footer, FAQ, kontak, dan About Us berfungsi.
- [ ] Empty, error, dan not-found state tersedia.
- [ ] Layout responsif.
- [ ] Production build berhasil.

---

## 12. Assumptions and Open Questions

Tidak ada pertanyaan terbuka saat ini.

Jika muncul keputusan baru yang belum tersedia, catat asumsi, dampak, dan opsi. Jangan mengubah asumsi menjadi requirement definitif secara diam-diam.

---

## 13. Dokumen Terkait

- [README.md](./README.md): gambaran proyek dan panduan penggunaan dokumentasi
- [commands.md](./commands.md): referensi command yang dipakai

_End of PRD._
