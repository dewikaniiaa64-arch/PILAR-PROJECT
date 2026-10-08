import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-4 py-2 text-sm font-medium transition-colors";
  const styles = {
     primary:
      "bg-[linear-gradient(to_right,#2D065C,#5608B5,rgba(103,10,215,0.74))] text-white hover:brightness-125 rounded-lg",
    outline:
      "border border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white",
  };
  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
}