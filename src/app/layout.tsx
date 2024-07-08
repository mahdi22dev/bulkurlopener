// app/layout.js

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
      <head>
        {/* Load Adcash library */}
        <Script
          id="aclib"
          type="text/javascript"
          src="//acscdn.com/script/aclib.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Script
          id="aclib-run"
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              aclib.runAutoTag({
                zoneId: 'tu16zwd9ei',
              });
            `,
          }}
        />
        <GoogleAnalytics gaId="G-RPCKM58N7X" />
      </body>
    </html>
  );
}
