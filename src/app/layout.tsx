import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";
import {Sora} from "next/font/google";
import clsx from "clsx";


const fontSora = Sora({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
})

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
      <body className={clsx(fontSora.className, "bg-[#F0F0F5]")}>
        <div className="w-full flex justify-center">
            <Navbar />
        </div>
        <div className="w-full flex justify-center">
          <main className="w-[1440px] h-screen p-20">
            {children}
          </main>
        </div>       
        </body>
    </html>
  );
}
