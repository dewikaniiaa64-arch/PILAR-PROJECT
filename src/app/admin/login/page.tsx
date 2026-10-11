"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Roboto } from "next/font/google";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // sementara langsung ke dashboard; nanti diganti pengecekan ke backend
    router.push("/admin");
  };

  return (
    <section
      className={`${roboto.className} relative min-h-screen overflow-hidden`}
    >
      {/* foto latar */}
      <Image
        src="/images/bg-login.jpeg"
        alt=""
        fill
        priority
       className="object-cover object-center"
      />

      {/* lapisan putih tipis agar teks terbaca di HP */}
      <div className="absolute inset-0 bg-white/70 md:hidden" />

      <div className="relative px-6 py-8 sm:px-10 lg:px-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-900"
        >
          <ArrowLeft size={16} />
          Kembali
        </Link>

        <div className="mt-16 w-full max-w-sm md:mt-28">
          <h1 className="text-3xl font-bold text-purple-900">LOGIN</h1>
          <p className="mt-3 text-sm text-black">
            Kelola data perusahaan, instansi, dan informasi PKL dengan mudah
            melalui dashboard admin.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="mirralwi@com."
              value={email}
              onChange={setEmail}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Please enter Your Password"
              value={password}
              onChange={setPassword}
            />
            <Button className="mt-4">LOGIN</Button>
          </form>
        </div>
      </div>
    </section>
  );
}