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
      <meta name="ppck-ver" content="8e899832263beec79340a65f44e4a8de" />
      <body className={inter.className}>
        <Script id="popcash-script" strategy="lazyOnload">
          {`
          var uid = '481768';
          var wid = '727202';
          var pop_tag = document.createElement('script');
          pop_tag.src = '//cdn.popcash.net/show.js';
          document.body.appendChild(pop_tag);
          pop_tag.onerror = function() {
            pop_tag = document.createElement('script');
            pop_tag.src = '//cdn2.popcash.net/show.js';
            document.body.appendChild(pop_tag);
          };
        `}
        </Script>
        {/* <Nav /> */}
        {children}
        {/* 
        <GoogleAnalytics gaId="G-RPCKM58N7X" /> */}
      </body>
    </html>
  );
}
