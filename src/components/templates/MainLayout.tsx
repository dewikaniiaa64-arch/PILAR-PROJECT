import { ReactNode } from "react";
import Navbar from "../organisms/navbar";
import Footer from "../organisms/footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}


