# PILAR — Pusat Informasi Lapangan dan Relasi

PILAR adalah platform informasi tempat Praktik Kerja Lapangan (PKL), relasi industri, dan informasi jurusan untuk siswa SMKN 2 Sumedang. 

🌐 **Live Demo:** [https://pilar-project.vercel.app](https://pilar-project.vercel.app)

PILAR dikembangkan untuk membantu siswa menemukan informasi tempat PKL yang sesuai dengan jurusan dan bidang keahlian mereka. Website ini menyediakan informasi tempat PKL, kategori, jurusan, serta detail perusahaan agar siswa lebih mudah memperoleh referensi sebelum melaksanakan PKL.

Frontend dibangun menggunakan Next.js, React, TypeScript, dan Tailwind CSS, dengan backend Strapi v5 yang di-deploy di Railway. Media gambar dikelola melalui Cloudinary, sedangkan frontend di-hosting di Vercel.

## ✨ Fitur Utama
- **Pencarian & Filter:** Cari tempat PKL berdasarkan nama, jurusan, atau kategori secara *real-time*.
- **Halaman Detail:** Informasi lengkap mulai dari deskripsi, kuota, role, kontak, hingga link Google Maps.
- **Tampilan Responsif:** Nyaman diakses melalui perangkat *desktop* maupun *mobile*.
- **Skeleton Loading:** Memberikan pengalaman UX yang mulus saat menunggu data dari API.

## 1. Tech Stack
| Bagian | Teknologi |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Bahasa | TypeScript |
| Styling | Tailwind CSS v4 |
| Ikon | lucide-react |
| Backend / CMS | Strapi v5 |
| Media | Cloudinary |
| Frontend Deployment | Vercel |
| Backend Deployment | Railway |

## 2. Cara Menjalankan Project
**Prasyarat:** Pastikan perangkat telah terinstal Node.js, npm, dan Git.

1. Clone repository ini:
   ```bash
   git clone https://github.com/dewikaniiaa64-arch/PILAR-PROJECT.git
   cd PILAR-PROJECT