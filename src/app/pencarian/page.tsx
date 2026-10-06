import PlaceSearchSection from "../../components/organisms/PlaceSearchSection";

export default function PencarianPage() {
    return (
        <main className="bg-gray-50 w-full ">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <h1 className="text-center text-3xl font-bold text-pilar">
                    Temukan Tempat PKL Yang Cocok Untuk Kamu
                </h1>
                <p className="mt-1 text-center text-xs text-gray-600">
                    Masa Depan Kamu Di Mulai Dari Sini!
                </p>
                <div className="mt-8">
                    <PlaceSearchSection />
                </div>
            </div>
        </main>
    );
}