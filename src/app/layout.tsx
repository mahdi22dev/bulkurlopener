import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bulk URL Opener Tool",
  description: "Very Fast Bulk URL Opener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-200">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
