import Image from "next/image";

type ContactLink = {
  label: string;
  href: string;
  tipe: "whatsapp" | "email";
};

type ContactCardProps = {
  judul: string;
  deskripsi: string;
  links: ContactLink[];
};

const ikonLink = {
  whatsapp: "/images/icons/whatsapp.svg",
  email: "/images/icons/email.svg",
};

export default function ContactCard({
  judul,
  deskripsi,
  links,
}: ContactCardProps) {
  return (
    <div className="flex w-full gap-4 rounded-2xl border border-gray-400 bg-purple-100 p-6 md:w-[420px]">
      <Image
        src="/images/icons/admin.svg"
        alt=""
        width={120}
        height={120}
        className="h-11 w-11 shrink-0"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-black">{judul}</h3>
        <p className="mt-2 text-xs leading-relaxed text-black">{deskripsi}</p>

        <ul
          className={`mt-3 grid gap-x-6 gap-y-2 text-xs text-black ${
            links.length > 2 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.tipe === "whatsapp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-700"
              >
                <Image
                  src={ikonLink[l.tipe]}
                  alt=""
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5 shrink-0"
                />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}