import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "hero";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base = "inline-block px-4 py-2 text-sm font-medium transition-colors";

  const styles = {
    primary:
      "bg-[linear-gradient(to_right,#2D065C,#5608B5,rgba(103,10,215,0.74))] text-white hover:brightness-125 rounded-lg",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    hero: "rounded-sm border border-black/54 bg-[linear-gradient(to_right,#5A0FB6,#6912DA,rgba(103,10,215,0.6))] text-white hover:brightness-110",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}