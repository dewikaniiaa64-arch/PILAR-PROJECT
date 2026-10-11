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
        <section id="pencarian" className="flex flex-col gap-4 sm:gap-6">
            {/* ==== Filter Box ==== */}
            <div className="rounded-lg border border-purple-400 p-3 sm:p-4 md:p-6">
                <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-center">
                    <input
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setPage(1);
                        }}
                        placeholder="Cari Tempat PKL Impianmu"
                        className="flex-1 rounded border border-purple-400 px-3 py-2 text-sm text-[#430F829E] placeholder:text-[#430F829E] focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />

                    {/* Dropdown Jurusan & Kategori — Sejajar di mobile */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 md:contents">
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
                                <option key={j} value={j}>{j}</option>
                            ))}
                        </select>

                        <select
                            value={kategori}
                            onChange={(e) => {
                                setKategori(e.target.value);
                                setPage(1);
                            }}
                            className="rounded border border-purple-400 px-3 py-2 text-sm text-purple-900 md:w-56"
                        >
                            <option value="">Semua Kategori</option>
                            {KATEGORI.map((k) => (
                                <option key={k} value={k}>{k}</option>
                            ))}
                        </select>
                    </div>

                    {/* Tombol Cari */}
                    <button
                        type="button"
                        aria-label="Cari"
                        className="flex h-9 w-9 shrink-0 items-center justify-center self-end rounded bg-linear-to-b from-[#5A0FB6] to-[#C4A5EC] text-white hover:opacity-90 sm:self-auto"
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
            </div>

            {/* ==== Toggle Tampilan ==== */}
            <div className="flex justify-end gap-2 sm:gap-3">
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
                        className="h-5 w-5 sm:h-6 sm:w-6"
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
                        className="h-5 w-5 sm:h-6 sm:w-6"
                    >
                        <rect x="3" y="3" width="8" height="8" rx="1.5" />
                        <rect x="13" y="3" width="8" height="8" rx="1.5" />
                        <rect x="3" y="13" width="8" height="8" rx="1.5" />
                        <rect x="13" y="13" width="8" height="8" rx="1.5" />
                    </svg>
                </button>
            </div>

            {/* ==== Hasil ==== */}
            {hasil.length === 0 ? (
                <p className="py-10 text-center text-sm text-gray-500">
                    Tempat PKL tidak ditemukan. Coba kata kunci atau filter lain.
                </p>
            ) : view === "grid" ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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