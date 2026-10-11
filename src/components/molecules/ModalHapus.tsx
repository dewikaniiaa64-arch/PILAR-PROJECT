"use client";

type ModalHapusProps = {
    buka: boolean;
    onClose: () => void;
    onKonfirmasi: () => void;
};

export default function ModalHapus({ buka, onClose, onKonfirmasi }: ModalHapusProps) {
    if (!buka) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 overflow-hidden">
                {/* Konten */}
                <div className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-black mb-3">Hapus?</h2>
                    <p className="text-sm text-black">
                        Apakah kamu yakin ingin menghapusnya?
                    </p>
                </div>

                {/* Tombol — dibatasi garis atas */}
                <div className="grid grid-cols-2 border-t border-gray-300">
                    <button
                        type="button"
                        onClick={onClose}
                        className="py-3 text-base font-semibold text-black hover:bg-gray-100 transition"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={onKonfirmasi}
                        className="py-3 text-base font-semibold text-red-600 hover:bg-red-50 transition border-l border-gray-300"
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
}