export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: 1,
    question: "Bagaimana cara mencari tempat?",
    answer:
      "Kamu bisa menggunakan kolom pencarian di halaman Pusat Informasi Tempat PKL. Ketik kata kunci bidang atau lokasi yang kamu inginkan. Hasil pencarian akan menampilkan daftar tempat yang sesuai.",
  },
  {
    id: 2,
    question: "Apa saja informasi yang tersedia?",
    answer:
      "Setiap tempat PKL menampilkan nama, gambaran singkat, bidang kegiatan, dan lokasi. Informasi ini disusun agar mudah dipahami. Kamu bisa melihatnya di halaman Detail Tempat PKL.",
  },
  {
    id: 3,
    question: "Apakah ada kriteria pemilihan?",
    answer:
      "Tidak ada kriteria khusus dari platform. Kamu bebas memilih berdasarkan minat dan kebutuhanmu sendiri. Gunakan informasi yang tersedia untuk membandingkan pilihan.",
  },
  {
    id: 4,
    question: "Apakah informasinya selalu diperbarui?",
    answer:
      "Kami berusaha memperbarui data secara berkala. Namun, sebaiknya konfirmasi langsung ke tempat PKL terkait untuk informasi terbaru. Platform ini membantu memberi gambaran awal.",
  },
  {
    id: 5,
    question: "Apakah bisa mengajukan tempat baru?",
    answer:
      "Saat ini fitur pengajuan tempat baru belum tersedia. Kamu bisa menghubungi kami melalui halaman kontak untuk memberikan saran. Masukanmu sangat berharga untuk pengembangan platform.",
  },
];