import React from "react";
import FaqItem from "@/components/molecules/FaqItem";
import { faqs } from "@/data/faqs";

export default function FaqSection() {
  return (
    <section className="w-full min-h-screen bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-2xl">
        {/* Judul */}
        <h1 className="mb-3 text-center text-3xl font-bold text-black md:text-4xl">
          FAQ
        </h1>
        <p className="mb-12 text-center text-sm text-black md:text-base">
          Pertanyaan yang sering diajukan seputar Pusat Informasi Tempat PKL.
        </p>

        {/* List FAQ */}
        <div>
          {faqs.length > 0 ? (
            faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Belum ada FAQ.</p>
          )}
        </div>

        {/* Section "Masih ada pertanyaan?" */}
        <div className="mt-16 text-center">
          <h2 className="mb-2 text-xl font-bold text-black md:text-2xl">
            Masih ada pertanyaan?
          </h2>
          <p className="mb-6 text-sm text-black md:text-base">
            Hubungi kami jika kamu butuh bantuan lebih lanjut.
          </p>
          <a
            href="/kontak"
            className="inline-block rounded-lg border border-[#5A0FB6] bg-linear-to-r from-[#5A0FB6] via-[#6912DA] to-[#670AD7]/60 px-8 py-2.5 text-lg font-medium text-white transition hover:opacity-90"
          >
            Kontak
          </a>
        </div>
      </div>
    </section>
  );
}