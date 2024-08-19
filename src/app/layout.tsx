import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Bike",
  description: "E-commerce Bike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex justify-center">
            <Navbar />
        </div>
        <main className="w-[1440px] bg-[#DCE2E5] h-screen p-20">
          {children}
        </main>        
        </body>
    </html>
  );
}
