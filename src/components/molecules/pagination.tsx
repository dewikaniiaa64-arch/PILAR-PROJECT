type Props = {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onChange }: Props) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-2">
            <button
                onClick={() => onChange(page - 1)}
                disabled={page === 1}
                className="px-2 text-sm disabled:opacity-30"
            >
                ‹
            </button>
            {pages.map((n) => (
                <button
                    key={n}
                    onClick={() => onChange(n)}
                    className={`h-7 w-7 rounded-full text-xs ${n === page ? "bg-radial from-[#7703BABA] to-[#610596] text-white" : "text-gray-600 hover:bg-purple-100"
                        }`}
                >
                    {n}
                </button>
            ))}
            <button
                onClick={() => onChange(page + 1)}
                disabled={page === totalPages}
                className="px-2 text-sm disabled:opacity-30"
            >
                ›
            </button>
        </div>
    );
}