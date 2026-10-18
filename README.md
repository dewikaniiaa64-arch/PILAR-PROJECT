# PILAR — Pusat Informasi Lapangan dan Relasi

Website pusat informasi tempat Praktik Kerja Lapangan (PKL), relasi industri, dan informasi jurusan untuk siswa SMKN 2 Sumedang.

PILAR dikembangkan untuk membantu siswa menemukan informasi tempat PKL yang sesuai dengan jurusan dan bidang keahlian mereka. Website ini menyediakan informasi tempat PKL, kategori, jurusan, serta detail perusahaan agar siswa lebih mudah memperoleh referensi sebelum melaksanakan PKL.

Frontend dibangun menggunakan **Next.js, React, TypeScript, dan Tailwind CSS**, dengan backend **Strapi v5** yang di-deploy di Railway. Media gambar dikelola melalui Cloudinary, sedangkan frontend di-hosting di Vercel.

---

## 1. Tech Stack

| Bagian | Teknologi |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Bahasa | TypeScript |
| Styling | Tailwind CSS v4 |
| Ikon | lucide-react |
| Backend / CMS | Strapi v5 |
| Database / Data API | Dikelola melalui konfigurasi backend Strapi |
| Media | Cloudinary |
| Frontend Deployment | Vercel |
| Backend Deployment | Railway |
| Linting | ESLint 9 + eslint-config-next |

> Detail teknologi dan versi harus disesuaikan dengan implementasi aktual di `package.json` dan file konfigurasi project.

## 2. Dokumentasi Project

Dokumentasi project disimpan di root repository dan folder `docs/`. Setiap anggota tim diharapkan membaca dokumentasi yang relevan sebelum mengubah implementasi.

| Dokumen | Kegunaan |
|---|---|
| [`AGENTS.md`](./AGENTS.md) | Aturan kerja developer dan AI coding agent, batasan perubahan, serta konvensi implementasi. |
| [`docs/PRD.md`](./docs/PRD.md) | Product Requirements Document: tujuan, pengguna, ruang lingkup, kebutuhan, dan kriteria penerimaan produk. |
| [`docs/TECHNICAL_SPEC.md`](./docs/TECHNICAL_SPEC.md) | Spesifikasi teknis, arsitektur aplikasi, integrasi API, dan keputusan teknis. |
| [`docs/UI_UX_SPEC.md`](./docs/UI_UX_SPEC.md) | Panduan desain antarmuka, layout, komponen visual, dan interaksi pengguna. |
| [`docs/TASKS.md`](./docs/TASKS.md) | Daftar task, prioritas, dependensi, dan status pengerjaan. |
| [`docs/commands.md`](./docs/commands.md) | Referensi command development, build, linting, dan workflow Git. |
| [`docs/component.md`](./docs/component.md) | Katalog komponen dan konvensi struktur komponen menggunakan pendekatan Atomic Design. |

**Prinsip utama:** dokumentasi menjadi panduan kerja, sedangkan kode dan konfigurasi aktual menjadi acuan untuk memahami kondisi implementasi saat ini. Jika terdapat perbedaan, identifikasi perbedaannya terlebih dahulu sebelum melakukan perubahan.

## 3. Struktur Repository

Struktur berikut merupakan gambaran organisasi project. Pastikan nama dan lokasi setiap file sesuai dengan repository aktual.

```text
PILAR-PROJECT/
├── README.md
├── AGENTS.md
├── docs/
│   ├── PRD.md
│   ├── TECHNICAL_SPEC.md
│   ├── UI_UX_SPEC.md
│   ├── TASKS.md
│   ├── commands.md
│   └── component.md
├── public/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   ├── tentang/
│   │   └── ...
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   ├── lib/
│   │   └── api.ts
│   ├── types/
│   │   └── place.ts
│   └── data/
├── package.json
├── next.config.ts
└── tsconfig.json
```

Keterangan:

- `src/app/` — halaman, route, dan layout menggunakan Next.js App Router.
- `src/components/atoms/` — komponen UI dasar yang sederhana.
- `src/components/molecules/` — gabungan komponen dasar untuk membentuk bagian UI yang lebih spesifik.
- `src/components/organisms/` — bagian UI yang lebih kompleks, seperti navbar, footer, dan section halaman.
- `src/lib/` — utility, API client, dan fungsi pendukung.
- `src/types/` — definisi tipe TypeScript yang digunakan bersama.
- `src/data/` — data lokal atau dummy jika masih diperlukan.
- `public/` — aset statis yang digunakan oleh aplikasi.
- `docs/` — dokumentasi teknis dan panduan pengembangan.

Dokumentasi project tidak diletakkan di dalam `public/` atau `src/`. Folder `public/` ditujukan untuk aset statis, sedangkan `src/` berisi kode aplikasi.

## 4. Menjalankan Project

### Prasyarat

Pastikan perangkat telah memiliki:

- Node.js dengan versi yang kompatibel dengan project.
- npm.
- Git.
- Akses ke repository PILAR-PROJECT.
- Backend Strapi yang dapat diakses untuk menguji integrasi API.

### Instalasi

1. Clone repository:

   ```bash
   git clone <URL_REPOSITORY>
   ```

2. Masuk ke direktori project:

   ```bash
   cd PILAR-PROJECT
   ```

3. Instal dependencies:

   ```bash
   npm install
   ```

4. Siapkan environment variable pada file `.env.local` di root project.

   ```env
   NEXT_PUBLIC_API_URL=https://pilarbe-production.up.railway.app/api
   ```

   Jika repository menyediakan `.env.example`, file tersebut dapat digunakan sebagai referensi konfigurasi.

5. Jalankan development server:

   ```bash
   npm run dev
   ```

6. Buka aplikasi melalui:

   `http://localhost:3000`

Gunakan konfigurasi environment yang sesuai dengan backend yang sedang digunakan.

### Command Development

| Command | Fungsi |
|---|---|
| `npm run dev` | Menjalankan development server. |
| `npm run build` | Membuat production build. |
| `npm run start` | Menjalankan aplikasi hasil build. |
| `npm run lint` | Memeriksa masalah linting. |

Jalankan command sesuai scripts yang tersedia di `package.json`. Jangan mengasumsikan script lain tersedia jika belum didefinisikan.

## 5. Environment Variables

Frontend menggunakan environment variable untuk menentukan alamat backend API.

| Nama | Contoh Nilai | Wajib |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `https://pilarbe-production.up.railway.app/api` | Ya |

Ketentuan:

- Simpan konfigurasi lokal dalam `.env.local`.
- Jangan commit `.env.local` ke repository.
- Pastikan `.env.local` masuk ke `.gitignore`.
- Di Vercel, atur environment variable melalui **Settings → Environment Variables** untuk environment deployment yang diperlukan.
- Perubahan environment variable yang digunakan saat build memerlukan deployment ulang agar diterapkan pada hasil build terbaru.
- Jangan menyimpan password, token rahasia, atau credential privat dalam variabel `NEXT_PUBLIC_`, karena nilainya dapat terekspos ke browser.

## 6. Backend dan Integrasi API

Backend PILAR menggunakan Strapi v5 yang di-deploy melalui Railway.

| Keterangan | URL |
|---|---|
| API Base URL | `https://pilarbe-production.up.railway.app/api` |
| Strapi Admin Panel | `https://pilarbe-production.up.railway.app/admin` |

### Endpoint Utama

| Endpoint | Kegunaan |
|---|---|
| `/tempat-pkls` | Mengambil data tempat PKL. |
| `/kategoris` | Mengambil data kategori. |
| `/jurusans` | Mengambil data jurusan. |
| `/roless` | Mengambil data role atau peran yang tersedia. |

Nama endpoint mengikuti konfigurasi API yang digunakan dalam project. Pastikan endpoint dan permission sesuai dengan konfigurasi Strapi yang aktif.

### Ketentuan Integrasi API

- Gunakan `NEXT_PUBLIC_API_URL` sebagai base URL agar alamat backend tidak tersebar di banyak file.
- Periksa implementasi API client di `src/lib/api.ts` sebelum menambahkan fungsi pengambilan data baru.
- Gunakan tipe TypeScript yang sesuai dengan struktur data API.
- Tangani loading state, data kosong, dan error state sesuai kebutuhan halaman.
- Gunakan parameter `populate` jika gambar atau relasi Strapi diperlukan oleh halaman.

Contoh parameter:

```text
/tempat-pkls?populate=*
```

Parameter `populate=*` dapat digunakan untuk mengambil relasi dan media yang diperlukan, tetapi hasilnya mengikuti struktur content type serta konfigurasi permission Strapi.

### Konfigurasi Gambar

Jika gambar dari Cloudinary digunakan melalui Next.js Image, domain sumber gambar harus diizinkan melalui `images.remotePatterns` pada `next.config.ts`.

Contoh domain:

```text
res.cloudinary.com
```

Sesuaikan konfigurasi dengan hostname gambar yang benar-benar digunakan. Hindari mengizinkan domain yang tidak diperlukan.

## 7. Aturan Implementasi

Setiap perubahan kode harus mengikuti ketentuan berikut:

1. Ikuti struktur folder, pola penamaan, styling, dan konvensi kode yang telah digunakan.
2. Gunakan TypeScript untuk mendefinisikan props, model data, dan tipe yang diperlukan.
3. Gunakan Server Components sebagai default pada Next.js App Router. Tambahkan `'use client'` hanya jika membutuhkan interaktivitas client-side, state, event handler, atau React hooks.
4. Terapkan Atomic Design secara pragmatis. Pisahkan komponen jika meningkatkan penggunaan ulang dan keterbacaan kode.
5. Gunakan komponen, utility, dan dependencies yang sudah tersedia sebelum membuat duplikasi atau menambahkan library baru.
6. Pisahkan tampilan, business logic, dan akses data jika pemisahan tersebut membantu pemeliharaan.
7. Pastikan halaman dan komponen mendukung tampilan responsif sesuai kebutuhan desain.
8. Perhatikan aksesibilitas, validasi input, loading state, empty state, dan error state sesuai konteks fitur.
9. Jangan mengubah file di luar ruang lingkup task tanpa alasan yang jelas.
10. Jangan mengklaim build, lint, atau pemeriksaan lain berhasil jika belum dijalankan.

## 8. Workflow AI Coding Agent

AI coding agent yang membantu pengembangan PILAR harus mengikuti alur berikut:

1. Baca `AGENTS.md` dan dokumentasi yang relevan dengan task.
2. Periksa `package.json`, konfigurasi Next.js, TypeScript, dan struktur implementasi aktual.
3. Pahami kebutuhan task melalui `docs/PRD.md`, `docs/TECHNICAL_SPEC.md`, dan `docs/UI_UX_SPEC.md`.
4. Periksa `docs/TASKS.md` untuk mengetahui prioritas, dependensi, dan status pengerjaan.
5. Periksa implementasi yang sudah ada sebelum membuat atau mengubah file.
6. Buat perubahan sekecil mungkin untuk memenuhi kebutuhan tanpa mengubah arsitektur yang tidak berkaitan.
7. Jalankan pemeriksaan yang relevan berdasarkan scripts yang tersedia.
8. Tinjau diff untuk memastikan tidak ada perubahan yang tidak diperlukan.
9. Laporkan ringkasan perubahan, hasil pemeriksaan, dan kendala yang masih ada.
10. Perbarui dokumentasi atau status task jika perubahan memengaruhi keduanya.

## 9. Workflow Git dan Kontribusi Tim

Gunakan branch terpisah untuk setiap fitur atau perbaikan agar pekerjaan anggota tim lebih mudah ditinjau.

Alur kontribusi:

1. Pastikan branch kerja sesuai dengan task.
2. Buat branch baru jika diperlukan.
3. Implementasikan perubahan sesuai ruang lingkup task.
4. Jalankan pemeriksaan yang relevan.
5. Commit perubahan menggunakan pesan yang jelas.
6. Buat Pull Request (PR) dan hubungkan dengan Issue terkait.
7. Minta review dari anggota tim.
8. Perbaiki feedback yang relevan.
9. Setelah disetujui, merge ke branch tujuan sesuai aturan repository.

Contoh penamaan branch:

```text
feat/navbar-footer
feat/api-integration
feat/place-detail
fix/responsive-layout
docs/update-readme
```

Contoh pesan commit:

```bash
git add .
git commit -m "feat: integrate place API"
git push -u origin feat/api-integration
```

**Prinsip workflow:** `1 Task/Bug = 1 Issue = 1 Branch = 1 PR`, sesuai aturan tim yang berlaku.

## 10. Definition of Done

Task dinyatakan selesai jika:

- [ ] Kebutuhan dan acceptance criteria yang relevan telah terpenuhi.
- [ ] Implementasi mengikuti struktur dan konvensi project.
- [ ] Tampilan responsif dan interaksi berjalan sesuai kebutuhan.
- [ ] Loading, empty, error, dan validasi ditangani jika relevan.
- [ ] Tidak ada perubahan di luar scope yang tidak diperlukan.
- [ ] Pemeriksaan yang relevan telah dijalankan dan hasilnya dilaporkan.
- [ ] Pull Request telah dibuat dan direview sesuai workflow tim.
- [ ] Dokumentasi dan status task diperbarui jika diperlukan.

## 11. Deployment

### Frontend

Frontend PILAR di-deploy menggunakan Vercel.

- Production: **URL deployment perlu diisi sesuai domain aktual.**
- Preview: Vercel dapat membuat deployment preview berdasarkan konfigurasi integrasi repository dan branch.

Alur deployment:

1. Kerjakan fitur di branch terpisah.
2. Push perubahan ke repository.
3. Periksa deployment preview jika tersedia.
4. Uji halaman, integrasi API, dan tampilan responsif.
5. Perbaiki masalah yang ditemukan.
6. Merge ke branch production sesuai aturan repository.
7. Verifikasi hasil deployment production.

### Backend

Backend menggunakan Strapi v5 yang di-deploy melalui Railway.

Pastikan backend dapat diakses dan endpoint yang dibutuhkan memiliki konfigurasi permission yang sesuai. Jika terjadi masalah integrasi, periksa status deployment, respons API, konfigurasi environment variable, dan CORS.

## 12. Tim Pengembang

| Peran | Jumlah | Tanggung Jawab |
|---|---:|---|
| UI/UX Designer | 1 | Menyusun desain Figma, alur pengguna, dan panduan UI/UX. |
| Backend Developer | 1 | Mengelola Strapi, struktur content type, API, CORS, dan deployment Railway. |
| Frontend Developer | 3 | Mengembangkan halaman, komponen UI, integrasi API, dan deployment frontend. |

Pembagian tugas rinci mengikuti Issue, Pull Request, dan dokumentasi task yang dikelola oleh tim.

## 13. Lisensi dan Penggunaan

PILAR merupakan project internal kelompok pengembang SMKN 2 Sumedang untuk mendukung penyampaian informasi tempat PKL dan relasi industri.

Penggunaan, distribusi, atau publikasi project mengikuti persetujuan tim dan ketentuan yang berlaku. Jangan menyertakan data pribadi, credential, atau informasi internal yang tidak ditujukan untuk publik.

---

**Catatan:** README ini merupakan dokumentasi utama dan titik awal bagi developer maupun AI coding agent untuk memahami project PILAR. Perbarui dokumentasi apabila terdapat perubahan arsitektur, struktur folder, endpoint, konfigurasi, atau workflow pengembangan.
