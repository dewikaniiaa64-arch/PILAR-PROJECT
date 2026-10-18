export default function PlaceListItemSkeleton() {
    return (
        <div className="flex flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm animate-pulse">
            {/* Skeleton Logo */}
            <div className="shrink-0 w-12 h-12 bg-gray-200 rounded-md"></div>

            {/* Skeleton Teks */}
            <div className="flex-1 min-w-0 space-y-2">
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>

            {/* Skeleton Tombol Lihat Detail */}
            <div className="shrink-0">
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
}