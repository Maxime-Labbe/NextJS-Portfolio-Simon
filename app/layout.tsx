import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import picturesData from "@/data/pictures.json";

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
  const preloadImages = Object.values(picturesData)
    .map((serie: { pictures?: { image: string }[] }) =>
      serie.pictures?.slice(0, 3).map((pic: { image: string }) => pic.image)
    )
    .flat()
    .filter(Boolean);
  return (
    <html lang="fr">
      <head>
        {preloadImages.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${couture.variable} ${quantify.variable}`}>
        {children}
      </body>
    </html>
  );
}
