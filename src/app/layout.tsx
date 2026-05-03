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

const SITE_URL = "https://estudioroco.com.ar";
const SITE_NAME = "Estudio Roco & Asociados";
const TITLE =
  "Estudio Roco & Asociados — Estudio jurídico contable especializado en impuestos · Jujuy";
const DESCRIPTION =
  "Estudio jurídico contable en San Salvador de Jujuy, especializado en impuestos. Planificación impositiva, auditoría, sueldos, contabilidad, servicios jurídicos y consultoría para empresas y particulares.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — Estudio Roco & Asociados" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  generator: "Next.js",
  keywords: [
    "Estudio contable Jujuy",
    "Contadores Jujuy",
    "Asesoramiento impositivo Jujuy",
    "Planificación impositiva",
    "Auditoría contable Jujuy",
    "Liquidación de sueldos Jujuy",
    "Estudio jurídico contable",
    "Estudio Roco",
    "Estudio Roco & Asociados",
    "San Salvador de Jujuy",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Estudio Roco & Asociados S.R.L.",
  legalName: "Estudio Roco & Asociados S.R.L.",
  description: DESCRIPTION,
  url: SITE_URL,
  email: "davidruano@estudioroco.com.ar",
  telephone: "+54 9 3885 05-3766",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19 de Abril 683, 8° A · Edificio AMERIAN",
    addressLocality: "San Salvador de Jujuy",
    addressRegion: "Jujuy",
    addressCountry: "AR",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Jujuy, Argentina" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "16:00",
      closes: "20:00",
    },
  ],
  founder: [
    { "@type": "Person", name: "David Ezequiel Ruano", jobTitle: "Contador Público — Socio" },
    { "@type": "Person", name: "Francisco Rodríguez Correa", jobTitle: "Contador Público — Socio" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires raw HTML
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
