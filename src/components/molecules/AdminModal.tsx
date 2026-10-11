"use client";

import React from "react";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function AdminModal({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-2xl",
}: AdminModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className={`w-full ${maxWidth} max-h-[95vh] overflow-y-auto rounded-xl bg-white p-4 shadow-xl sm:max-h-[90vh] sm:rounded-2xl sm:p-6 md:p-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-width:none`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}