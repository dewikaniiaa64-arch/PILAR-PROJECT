# PILAR

**Pusat Informasi Lapangan dan Relasi**

PILAR adalah website informasi tempat Praktik Kerja Lapangan (PKL) untuk siswa SMKN 2 Sumedang. Website ini membantu siswa menemukan referensi tempat PKL dan mengenal informasi perusahaan atau instansi yang tersedia.

**Website:** [pilar-project-public.vercel.app](https://pilar-project-public.vercel.app)

## Teknologi

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- lucide-react
- Strapi v5 untuk backend
- Cloudinary untuk media

## Menjalankan Project

Pastikan Node.js, npm, dan Git sudah terpasang.

1. Clone repository:

   ```bash
   git clone https://github.com/dewikaniiaa64-arch/PILAR-PROJECT.git
   ```

2. Masuk ke folder project:

   ```bash
   cd PILAR-PROJECT
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Buat file `.env.local` di folder utama project dan isi alamat API backend:

   ```env
   NEXT_PUBLIC_API_URL=https://pilarbe-production.up.railway.app/api
   ```

5. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Perintah

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan aplikasi dalam mode development |
| `npm run build` | Membuat build untuk production |
| `npm run start` | Menjalankan hasil build |
| `npm run lint` | Memeriksa kode menggunakan ESLint |

## Backend

Backend menggunakan Strapi dan di-hosting melalui Railway.

- **API:** [pilarbe-production.up.railway.app/api](https://pilarbe-production.up.railway.app/api)
- **Admin panel:** [pilarbe-production.up.railway.app/admin](https://pilarbe-production.up.railway.app/admin)

Endpoint yang digunakan oleh aplikasi mencakup data tempat PKL, kategori, jurusan, dan role. Detail endpoint mengikuti konfigurasi backend yang aktif.

## Struktur Repository

```
PILAR-PROJECT/
├── public/              # Aset statis
├── src/                 # Kode aplikasi
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── tsconfig.json
```

## Tim

PILAR dikembangkan oleh tim siswa SMKN 2 Sumedang dengan pembagian tugas di bidang UI/UX, frontend, dan backend.
