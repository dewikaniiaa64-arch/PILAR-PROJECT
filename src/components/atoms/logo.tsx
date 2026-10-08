import Link from "next/link";
import Image from "next/image";
import { Sekuya } from "next/font/google";

const sekuya = Sekuya({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-1 sm:gap-2">
      <Image
        src="/images/logo.png"
        alt="Logo PILAR"
        width={100}
        height={60}
        priority
        className="h-15 w-auto sm:h-18"
      />
      <div className="flex flex-col leading-tight">
        <span
          className={`${sekuya.className} text-xl tracking-wide sm:text-2xl ${
            light ? "text-white" : "bg-[linear-gradient(to_bottom,#2D065C,#5A0FB6,rgba(103,10,215,0.62))] bg-clip-text text-transparent"
          }`}
        >
          PILAR
        </span>
        <span
          className={`text-[10px] sm:text-xs ${
            light ? "text-purple-100" : "text-purple-800"
          }`}
        >
          Pusat Informasi Lapangan &amp; relasi
        </span>
      </div>
    </Link>
  );
}