import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estudioroco.com.ar"),
  title: {
    default: "Estudio Roco — Contadores Públicos y Asesores de Empresas",
    template: "%s — Estudio Roco",
  },
  description:
    "Estudio contable en Jujuy. Asesoramiento impositivo, auditoría, sueldos, contabilidad, servicios jurídicos y consultoría para empresas y particulares.",
  openGraph: {
    title: "Estudio Roco",
    description:
      "Contadores Públicos y Asesores de Empresas en Jujuy.",
    url: "https://estudioroco.com.ar",
    siteName: "Estudio Roco",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
