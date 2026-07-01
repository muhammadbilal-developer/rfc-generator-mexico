import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HashNavFix } from "@/components/HashNavFix";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rfc-generator-mexico.vercel.app"),
  title: {
    default: "CalcularRFC | Calculadora RFC México",
    template: "%s | CalcularRFC",
  },
  description:
    "Calculadora gratuita para estimar el RFC de persona física en formato SAT con lógica algorítmica pública y desglose transparente.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CalcularRFC",
    description: "Estima tu RFC con reglas algorítmicas públicas del formato SAT.",
    type: "website",
    url: "/",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcularRFC",
    description: "Estima tu RFC con reglas algorítmicas públicas del formato SAT.",
    images: ["/og-image.svg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className={`${inter.className} flex min-h-dvh w-full flex-col overflow-x-hidden text-text-primary`}>
        <HashNavFix />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
        {process.env.NEXT_PUBLIC_CLARITY_ID ? (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
