import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HashNavFix } from "@/components/HashNavFix";
import { GOOGLE_ANALYTICS_ID, GOOGLE_SITE_VERIFICATION } from "@/lib/analytics";
import { siteIcons } from "@/lib/favicons";
import { inter } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: siteIcons,
  title: {
    default: "CalcularRFC | Calculadora RFC México",
    template: "%s | CalcularRFC",
  },
  description:
    "Calculadora gratuita para estimar el RFC de persona física en formato SAT con lógica algorítmica pública y desglose transparente.",
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
    google: GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
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
        <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
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
