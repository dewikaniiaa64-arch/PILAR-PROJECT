# Command — Project PILAR

Dokumen ini berisi daftar perintah (command) yang digunakan dalam pengembangan project PILAR. Pastikan untuk selalu memeriksa file `package.json` sebelum menjalankan perintah.

## 1. Package Manager
Project ini menggunakan **npm** sebagai package manager utama. Hindari mencampurnya dengan `yarn`, `pnpm`, atau `bun` agar tidak terjadi konflik dependensi.

## 2. Menjalankan Project (Development)
Untuk menjalankan server dalam mode pengembangan (dengan fitur *hot reload*):
```bash
npm run dev