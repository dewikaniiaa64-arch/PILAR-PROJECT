export default function DetailSkeleton() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-pulse">
            {/* Skeleton Tombol Kembali */}
            <div className="h-6 w-24 bg-gray-200 rounded mb-6 sm:mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-10">
                {/* KOLOM KIRI */}
                <div className="flex flex-col gap-4 sm:gap-6">
                    {/* Skeleton Gambar Utama */}
                    <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-gray-200"></div>

                    {/* Skeleton Card Info */}
                    <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 bg-white space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                        <div className="h-6 bg-gray-200 rounded w-32"></div>
                        <div className="space-y-3 mt-4">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>

                {/* KOLOM KANAN */}
                <div className="flex flex-col pt-0 md:pt-2 space-y-4">
                    {/* Skeleton Judul */}
                    <div className="h-8 sm:h-10 bg-gray-200 rounded w-3/4 mb-3"></div>

                    {/* Skeleton Badges */}
                    <div className="flex gap-2 mb-4">
                        <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                    </div>

                    {/* Skeleton Lokasi */}
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>

                    {/* Skeleton Tentang */}
                    <div className="space-y-2 mb-6">
                        <div className="h-5 bg-gray-200 rounded w-24"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}