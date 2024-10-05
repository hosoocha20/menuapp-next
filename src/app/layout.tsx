import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import 'material-symbols/outlined.css';

import "./globals.css";
import "./uiMaterials.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const monsterrat = Montserrat( { subsets: ["latin"],variable: "--font-monsterrat" })

export const metadata: Metadata = {
  title: "SmartMenu",
  description: "Your smart digital menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monsterrat.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
