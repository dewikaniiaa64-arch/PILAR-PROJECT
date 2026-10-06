import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  light?: boolean; // true = teks putih (untuk latar ungu, mis. di Footer)
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="Logo PILAR"
        width={64}
        height={48}
        priority
      />
      <div className="flex flex-col leading-tight">
        <span
          className={`text-2xl font-extrabold tracking-wide ${
            light ? "text-white" : "text-purple-900"
          }`}
        >
          PILAR
        </span>
        <span className={`text-xs ${light ? "text-purple-100" : "text-purple-800"}`}>
          Pusat Informasi Lapangan &amp; relasi
        </span>
      </div>
    </Link>
  );
}