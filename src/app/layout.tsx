import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
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
      <Script
        async={true}
        data-cfasync="false"
        src="//pl23704812.highrevenuenetwork.com/b68cb396e8d7119cb35d96bb3984c381/invoke.js"
      ></Script>
      <Script
        type="text/javascript"
        src="//pl23704912.highrevenuenetwork.com/af/f3/fe/aff3fed084bcf98a6b7a9ad7a590651d.js"
      ></Script>
      <body className={inter.className}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
