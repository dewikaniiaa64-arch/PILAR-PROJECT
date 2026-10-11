export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
import AdminSidebar from "@/components/organisms/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 bg-gray-50 p-8">{children}</main>
        </div>
    );
}