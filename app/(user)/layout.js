import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tammobil Partner",
  description: "Tammobil Telefon Yenilenme Merkezi",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://tammobil.com"),
  keywords: [
    "Tammobil Partner",
    "Telefon Yenilenme Merkezi",
    "Tammobil Telefon",
    "Tammobil Yenilenmiş Telefon",
    "Tammobil Uygun Fiyatlı Telefon",
  ],
  generator: "TAMMOBİL",
  applicationName: "Tammobil",
  referrer: "origin-when-cross-origin",
  creator: "tammobil.com",
  publisher: "tammobil.com",
  verification: {
    google: "123123123",
  },
  alternates: {
    canonical: new URL("https://tammobil.com"),
  },
  openGraph: {
    title: "Tammobil",
    description: "Tammobil Telefon Yenilenme Merkezi",
    url: "https://tammobil.com",
    siteName: "Tammobil",
    locale: "tr_TR",
    type: "website",
  },
  other: {
    "facebook-domain-verification": "123456789",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
