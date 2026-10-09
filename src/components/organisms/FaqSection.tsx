import React from "react";
import FaqItem from "@/components/molecules/FaqItem";
import { faqs } from "@/data/faqs";

export default function FaqSection() {
  return (
    <section id="informasi" className="w-full min-h-screen bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-2xl">
        {/* Judul */}
        <h1 className="mb-3 text-center text-3xl font-bold text-black md:text-4xl">
          FAQ
        </h1>
        <p className="mb-12 text-center text-sm text-gray-700 md:text-base">
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
          <p className="mb-6 text-sm text-gray-700 md:text-base">
            Hubungi kami jika kamu butuh bantuan lebih lanjut.
          </p>
          <a
            href="/#kontak"
            className="inline-block border border-black bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white"
          >
            Kontak
          </a>
        </div>
      </div>
    </section>
  );
}