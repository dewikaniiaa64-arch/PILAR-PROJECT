"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm text-black md:text-base">{question}</span>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
          <ChevronDown
            className={`h-4 w-4 text-gray-700 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            strokeWidth={2}
          />
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-xs leading-relaxed text-gray-700 md:text-sm">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}