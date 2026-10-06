"use client";

import { useState } from "react";
import { places } from "../../data/places";
import { filterPlaces } from "../../lib/filterPlaces";
import { JURUSAN, KATEGORI } from "../../lib/constants";
import PlaceCard from "../molecules/Placecard";
import PlaceListItem from "../molecules/PlaceListitem";
import Pagination from "../molecules/pagination";

const PAGE_SIZE = 6;

export default function PlaceSearchSection() {
    const [query, setQuery] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [kategori, setKategori] = useState("");
    const [view, setView] = useState<"grid" | "list">("grid");
    const [page, setPage] = useState(1);

    const hasil = filterPlaces(places, query, jurusan, kategori);
    const totalPages = Math.ceil(hasil.length / PAGE_SIZE);
    const tampil = hasil.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <section className="flex flex-col gap-6">
            {/* Search + filter jurusan */}
            <div className="rounded-lg border border-purple-400 p-4 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <input
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setPage(1);
                        }}
                        placeholder="Cari Tempat PKL Impianmu"
                        className="flex-1 rounded border border-purple-400 px-3 py-2 text-sm text-[#430F829E] placeholder:text-[#430F829E] focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    <select
                        value={jurusan}
                        onChange={(e) => {
                            setJurusan(e.target.value);
                            setPage(1);
                        }}
                        className="rounded border border-purple-400 px-3 py-2 text-sm text-purple-900 md:w-56"
                    >
                        <option value="">Jurusan</option>
                        {JURUSAN.map((j) => (
                            <option key={j} value={j}>
                                {j}
                            </option>
                        ))}
                    </select>
                    <button
                        type="button"
                        aria-label="Cari"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-linear-to-b from-[#7E63A8] to-[#C4A5EC] text-white hover:opacity-90"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>
                </div>

                {/* Chip kategori */}
                <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
                    {KATEGORI.map((k) => (
                        <button
                            key={k}
                            onClick={() => {
                                setKategori(kategori === k ? "" : k);
                                setPage(1);
                            }}
                            className={`rounded border px-3 py-2 text-xs ${kategori === k
                                ? "border-[#42106D] bg-[#42106D] text-white"
                                : "border-purple-400 text-purple-800 hover:bg-purple-50"
                                }`}
                        >
                            {k}
                        </button>
                    ))}
                </div>
            </div>

            {/* Toggle tampilan */}
            <div className="flex justify-end gap-3">
                <button
                    aria-label="Tampilan list"
                    onClick={() => setView("list")}
                    className={view === "list" ? "text-[#42106D]" : "text-purple-400"}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="h-6 w-6"
                    >
                        <line x1="9" y1="6" x2="21" y2="6" />
                        <line x1="9" y1="12" x2="21" y2="12" />
                        <line x1="9" y1="18" x2="21" y2="18" />
                        <line x1="4" y1="6" x2="4.01" y2="6" />
                        <line x1="4" y1="12" x2="4.01" y2="12" />
                        <line x1="4" y1="18" x2="4.01" y2="18" />
                    </svg>
                </button>
                <button
                    aria-label="Tampilan grid"
                    onClick={() => setView("grid")}
                    className={view === "grid" ? "text-[#42106D]" : "text-purple-400"}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                    >
                        <rect x="3" y="3" width="8" height="8" rx="1.5" />
                        <rect x="13" y="3" width="8" height="8" rx="1.5" />
                        <rect x="3" y="13" width="8" height="8" rx="1.5" />
                        <rect x="13" y="13" width="8" height="8" rx="1.5" />
                    </svg>
                </button>
            </div>

            {/* Toggle tampilan */}
            <div className="flex justify-end gap-2 text-xs">
                <button
                    onClick={() => setView("list")}
                    className={view === "list" ? "font-bold text-purple-700" : "text-gray-500"}
                >
                </button>
                <button
                    onClick={() => setView("grid")}
                    className={view === "grid" ? "font-bold text-purple-700" : "text-gray-500"}
                >

                </button>
            </div>

            {/* Hasil */}
            {hasil.length === 0 ? (
                <p className="py-10 text-center text-sm text-gray-500">
                    Tempat PKL tidak ditemukan. Coba kata kunci atau filter lain.
                </p>
            ) : view === "grid" ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {tampil.map((p) => (
                        <PlaceCard key={p.id} place={p} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {tampil.map((p) => (
                        <PlaceListItem key={p.id} place={p} />
                    ))}
                </div>
            )}

            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </section>
    );
}