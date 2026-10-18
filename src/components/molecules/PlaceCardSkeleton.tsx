export default function PlaceCardSkeleton() {
    return (
        <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 animate-pulse">
            {/* Skeleton Logo */}
            <div className="w-12 h-12 bg-gray-200 rounded-md"></div>

            {/* Skeleton Judul */}
            <div className="h-5 bg-gray-200 rounded w-3/4 mt-2"></div>

            {/* Skeleton Deskripsi (3 baris) */}
            <div className="space-y-2 mt-1">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 rounded w-4/6"></div>
            </div>

            {/* Skeleton Badges (Kategori/Jurusan) */}
            <div className="flex gap-2 mt-2">
                <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            </div>

            {/* Skeleton Tombol */}
            <div className="h-10 bg-gray-200 rounded mt-4"></div>
        </div>
    );
}