import { ReactNode } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}