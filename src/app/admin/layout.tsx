export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar — urusan teman kamu */}
      <aside className="flex w-56 flex-col bg-[#5B2A86] p-6 text-white">
        <div className="mb-8">
          <p className="text-sm font-bold">PILAR</p>
          <p className="text-[10px] opacity-70">Pusat Informasi Lapangan & Relasi</p>
        </div>
        <p className="text-xs opacity-70">Sidebar — teman kamu</p>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}