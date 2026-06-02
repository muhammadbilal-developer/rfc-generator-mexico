import type { Metadata } from "next";
import Script from "next/script";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for RFC Generator Mexico, including cookies, analytics, and user rights.",
};

export default function PrivacyPolicyPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rfc-generator-mexico.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://rfc-generator-mexico.vercel.app/privacy-policy" },
    ],
  };

  return (
    <>
      <LegalPageLayout>
        <h1>Privacy Policy</h1>
        <h2 className="mt-8 text-2xl font-semibold">Overview</h2>
        <p className="mt-3">This Privacy Policy explains how RFC Generator Mexico collects, uses, and protects personal information. Our objective is to provide a transparent, trust-first experience for users who calculate RFC estimates through public algorithm logic.</p>
        <p className="mt-3">We design the product to process RFC calculator data on the client side whenever possible. Inputs used for generation are not sold, and no unnecessary retention is performed as part of standard calculator usage.</p>
        <h2 className="mt-8 text-2xl font-semibold">Information We Process</h2>
        <h3 className="mt-6 text-xl font-semibold">Calculator Inputs</h3>
        <p className="mt-3">For RFC calculation, users may enter paternal surname, maternal surname, given names, and date of birth. These values are processed in-browser to build an algorithmic estimate and are not required to be permanently stored by the service.</p>
        <h3 className="mt-6 text-xl font-semibold">Contact Form Data</h3>
        <p className="mt-3">If you contact us, we process your name, email, support category, subject, and message to respond to your request. We also use a honeypot anti-spam field and server-side validation to reduce abuse and protect mailbox integrity.</p>
        <h3 className="mt-6 text-xl font-semibold">Technical and Analytics Data</h3>
        <p className="mt-3">Like most websites, we collect limited technical information such as device type, browser family, interaction events, and anonymized usage patterns. These metrics help us improve performance, usability, and accessibility.</p>
        <h2 className="mt-8 text-2xl font-semibold">Cookies and Similar Technologies</h2>
        <p className="mt-3">We may use cookies or similar identifiers for analytics and service quality. Analytics providers may include Google Analytics and Microsoft Clarity depending on environment configuration and consent requirements applicable to your jurisdiction.</p>
        <p className="mt-3">Cookies can support session continuity, aggregate reporting, and diagnostics. You can control cookie behavior through browser settings and, where required, consent tools. Disabling some cookies may affect feature quality but basic access generally remains available.</p>
        <h2 className="mt-8 text-2xl font-semibold">How We Use Information</h2>
        <p className="mt-3">We use data to operate the website, provide RFC estimate functionality, respond to support inquiries, monitor abuse, and improve reliability. We do not sell personal data. We do not use user input for unrelated advertising profiling by default.</p>
        <p className="mt-3">When analytics are enabled, reports are used to understand traffic and product quality trends. We seek to avoid collecting more data than necessary and prefer aggregate metrics whenever possible.</p>
        <h2 className="mt-8 text-2xl font-semibold">Legal Bases and User Rights</h2>
        <p className="mt-3">Depending on your jurisdiction, processing may rely on legitimate interests, contract-like service delivery, legal obligations, and consent where required. We respect GDPR-style principles including data minimization, purpose limitation, and accountability.</p>
        <p className="mt-3">You may request access, correction, deletion, portability, restriction, or objection regarding personal data we process. You can also withdraw consent where applicable. We will respond within reasonable legal timelines and may request verification of identity for security.</p>
        <h2 className="mt-8 text-2xl font-semibold">Data Sharing and Processors</h2>
        <p className="mt-3">We may share limited information with infrastructure and service providers such as hosting, observability, analytics, and email delivery platforms acting as processors. These partners are expected to maintain appropriate confidentiality and security controls.</p>
        <p className="mt-3">We may disclose data if required by law, to protect rights and security, or in connection with lawful investigations. We do not authorize third parties to use your data for unrelated independent purposes without a valid legal basis.</p>
        <h2 className="mt-8 text-2xl font-semibold">Retention and Security</h2>
        <p className="mt-3">We retain contact submissions only for the period necessary to provide support, manage operations, and satisfy legal obligations. Calculator input values are designed for transient processing and are not intended for long-term persistence by default flow.</p>
        <p className="mt-3">Security measures include transport encryption, access control, anti-spam checks, and basic monitoring. No method is perfectly secure, so users should avoid sharing excessive sensitive data and should verify official RFC records through SAT channels.</p>
        <h2 className="mt-8 text-2xl font-semibold">International Transfers</h2>
        <p className="mt-3">Our providers may process data in multiple regions. When cross-border transfer rules apply, we aim to rely on lawful safeguards such as contractual protections and provider compliance frameworks.</p>
        <h2 className="mt-8 text-2xl font-semibold">Children's Privacy</h2>
        <p className="mt-3">This website is not directed to children. If you believe data from a child has been submitted inadvertently, contact us so we can review and remove it where appropriate.</p>
        <h2 className="mt-8 text-2xl font-semibold">Updates and Contact</h2>
        <p className="mt-3">We may update this policy as features, legal standards, or provider relationships change. Continued use after updates indicates acceptance of the revised policy.</p>
        <p className="mt-3">For privacy requests, use the contact form and include enough detail for identity verification and request scope. Last updated: June 2, 2026.</p>
      </LegalPageLayout>
      <Script id="breadcrumb-privacy" type="application/ld+json">{JSON.stringify(breadcrumb)}</Script>
    </>
  );
}
