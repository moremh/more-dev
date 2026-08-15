import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "More — Desarrollo web y sistemas",
  description:
    "Diseño y desarrollo de páginas web y sistemas a medida para negocios, profesionales y proyectos.",
  keywords: [
    "desarrollo web",
    "sistemas a medida",
    "desarrolladora junior",
    "páginas web",
    "Tucumán",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "More — Desarrollo web y sistemas",
    description:
      "Páginas web y sistemas a medida, con diseños dinámicos y adaptados a todos los dispositivos.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
