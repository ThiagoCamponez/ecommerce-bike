import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";
import {Sora} from "next/font/google";


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
      <body className={fontSora.className}>
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
