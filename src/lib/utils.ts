// gulir halus ke section ber-id; kalau section tidak ada di halaman ini,
// biarkan link pindah halaman seperti biasa
export function gulirKe(e: { preventDefault: () => void }, id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
}