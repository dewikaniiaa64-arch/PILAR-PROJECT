"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type InputProps = {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) {
  const [tampil, setTampil] = useState(false);
  const adalahPassword = type === "password";

  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-black">
        {label}
      </span>

      <div className="relative">
        <input
          type={adalahPassword && tampil ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-[#EDF4F1] px-3 py-3 text-sm text-black placeholder:text-slate-400 focus:border-purple-600 focus:outline-none"
        />

        {adalahPassword && (
          <button
            type="button"
            onClick={() => setTampil(!tampil)}
            aria-label={tampil ? "Sembunyikan password" : "Tampilkan password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          >
            {tampil ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}
      </div>
    </label>
  );
}