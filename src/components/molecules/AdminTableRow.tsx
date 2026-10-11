import { Pencil, Trash2, MapPin, Users } from "lucide-react";

interface AdminTableRowProps {
  data: {
    id: number;
    nama: string;
    logo?: string;
    kategori: string;
    posisi: string;
    kuota: number;
    lokasi: string;
  };
  onEdit: () => void;
  onHapus: () => void;
}

export default function AdminTableRow({
  data,
  onEdit,
  onHapus,
}: AdminTableRowProps) {
  return (
    <tr className="border-t border-gray-200 hover:bg-gray-50">
      {/* Perusahaan */}
      <td className="px-3 py-3 md:px-4">
        <div className="flex items-center gap-2">
          {data.logo ? (
            <img
              src={data.logo}
              alt={data.nama}
              className="h-8 w-8 shrink-0 rounded object-contain"
            />
          ) : (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-gray-100 text-xs font-bold text-gray-500">
              {data.nama.charAt(0)}
            </div>
          )}
          <span className="text-xs font-medium text-black md:text-sm">
            {data.nama}
          </span>
        </div>
      </td>

      {/* Kategori */}
      <td className="px-3 py-3 md:px-4">
        <span className="inline-block rounded-[6] bg-purple-100 px-2 py-1 text-[10px] font-medium text-[#2D065C] md:px-3 md:text-xs">
          {data.kategori}
        </span>
      </td>

      {/* Posisi */}
      <td className="px-3 py-3 text-[10px] font-medium text-black md:px-4 md:text-xs">
        {data.posisi}
      </td>

      {/* Kuota */}
      <td className="whitespace-nowrap px-3 py-3 text-[10px] font-medium text-gray-400 md:px-4 md:text-xs">
        <Users className="mr-1 inline h-3 w-3" />
        {data.kuota} siswa
      </td>

      {/* Lokasi */}
      <td className="whitespace-nowrap px-3 py-3 text-[10px] font-medium text-gray-400 md:px-4 md:text-xs">
        <MapPin className="mr-1 inline h-3 w-3" />
        {data.lokasi}
      </td>

      {/* Aksi */}
      <td className="px-3 py-3 md:px-4">
        <div className="flex gap-2 md:gap-3">
          <button
            onClick={onEdit}
            className="text-gray-400 transition hover:opacity-70"
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={onHapus}
            className="text-gray-400 transition hover:opacity-70"
            title="Hapus"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}