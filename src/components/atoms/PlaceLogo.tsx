export default function PlaceLogo({
    nama,
    logo,
    className = "h-16 w-28",
}: {
    nama: string;
    logo: string;
    className?: string;
}) {
    return (
        <div className={className}>
            {logo ? (
                <img
                    src={logo}
                    alt={`Logo ${nama}`}
                    className="h-full w-full object-contain object-left"
                />
            ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700">
                    {nama.charAt(0)}
                </div>
            )}
        </div>
    );
}