import type { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
    return (
        <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700">
            {children}
        </span>
    );
}