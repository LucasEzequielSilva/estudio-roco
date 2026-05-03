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
    default:
      "Estudio Roco — Estudio jurídico contable especializado en impuestos · Jujuy",
    template: "%s — Estudio Roco",
  },
  description:
    "Estudio jurídico contable en San Salvador de Jujuy, especializado en impuestos. Planificación impositiva, auditoría, sueldos, contabilidad, servicios jurídicos y consultoría para empresas y particulares.",
  openGraph: {
    title: "Estudio Roco — Jurídico contable especializado en impuestos",
    description:
      "Estudio jurídico contable de Jujuy, especializado en impuestos. Asesoramiento integral para empresas y particulares.",
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
