import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import "@/app/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
      <div className={inter.className}>
        <Header />
        {children}
        <Footer />
      </div>
  );
}