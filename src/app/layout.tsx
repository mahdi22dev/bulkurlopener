import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// import { GoogleAnalytics } from "@next/third-parties/google";

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
        <Script
          id="aclib"
          type="text/javascript"
          src="//acscdn.com/script/aclib.js"
          strategy="beforeInteractive"
        />
      </head>
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

      <body className={inter.className}>
        {/* <Nav /> */}
        {children}
        {/* 
        <GoogleAnalytics gaId="G-RPCKM58N7X" /> */}
      </body>
    </html>
  );
}
