"use client";

import { Check } from "lucide-react";

type ModalSuksesProps = {
    buka: boolean;
    pesan?: string;
    onClose: () => void;
};

export default function ModalSukses({
    buka,
    pesan = "Perubahan Tersimpan",
    onClose
}: ModalSuksesProps) {
    if (!buka) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 p-8 text-center">
                {/* Icon Centang */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center">
                        <Check className="w-8 h-8 text-green-500" strokeWidth={3} />
                    </div>
                </div>

                {/* Pesan */}
                <p className="text-lg font-semibold text-black mb-6">
                    {pesan}
                </p>

                {/* Tombol OK */}
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-purple-700 text-white font-semibold px-8 py-2.5 rounded-lg hover:bg-purple-800 transition"
                >
                    OK
                </button>
            </div>
        </div>
    );
}