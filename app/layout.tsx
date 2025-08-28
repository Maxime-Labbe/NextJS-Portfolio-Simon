import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const couture = localFont({
  src: "../public/fonts/couture-bld.otf",
  variable: "--font-couture",
  weight: "100 900",
});

const quantify = localFont({
  src: "../public/fonts/Quantify.ttf",
  variable: "--font-quantify",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Simon Berchtold",
  description: "Travail de maturité de Simon Berchtold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${couture.variable} ${quantify.variable}`}>
        {children}
      </body>
    </html>
  );
}
