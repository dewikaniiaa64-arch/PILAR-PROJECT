import React from "react";

interface StepItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function StepItem({ icon, title, description }: StepItemProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-5">{icon}</div>
      <h3 className="mb-3 text-lg font-bold leading-snug text-black md:text-xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-700">{description}</p>
    </div>
  );
}