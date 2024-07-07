import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
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
        src="https://omoonsih.net/act/files/tag.min.js?z=7699498"
        data-cfasync="false"
        async
      ></Script>
      <Script
        src="https://alwingulla.com/88/tag.min.js"
        data-zone="77591"
        async
        data-cfasync="false"
      ></Script>
      <Script
        async
        data-cfasync="false"
        src="//thubanoa.com/1?z=7699485"
      ></Script>
      <Script
        src="https://pertawee.net/act/files/tag.min.js?z=7699492"
        data-cfasync="false"
        async
      ></Script>
      <body className={inter.className}>
        <Nav />
        {children}
        <GoogleAnalytics gaId="G-RPCKM58N7X" />
      </body>
    </html>
  );
}
