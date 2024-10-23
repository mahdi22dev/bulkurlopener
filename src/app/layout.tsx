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
      <meta name="monetag" content="4f949ceaa2d654b1db6168d2279e87ab"></meta>
      <div
        dangerouslySetInnerHTML={{
          __html: `    <script>(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('nunsourdaultozy.net',8382350,document.createElement('script'))</script>`,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `<script>(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://shebudriftaiter.net/tag.min.js',8382347,document.body||document.documentElement)</script>`,
        }}
      />

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
