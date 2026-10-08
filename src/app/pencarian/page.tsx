import PlaceSearchSection from "../../components/organisms/PlaceSearchSection";

export default function PencarianPage() {
    return (
        <main className="bg-gray-50 w-full min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                <h1 className="font-roboto text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-pilar">
                    Temukan Tempat PKL Yang Cocok Untuk Kamu
                </h1>
                <p className="mt-2 text-center text-xs sm:text-sm text-gray-600">
                    Masa Depan Kamu Di Mulai Dari Sini!
                </p>
                <div className="mt-6 sm:mt-8 lg:mt-10">
                    <PlaceSearchSection />
                </div>
            </div>
        </main>
    );
}