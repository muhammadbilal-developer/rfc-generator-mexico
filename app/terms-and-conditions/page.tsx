import type { Metadata } from "next";
import Script from "next/script";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions governing use of RFC Generator Mexico.",
};

export default function TermsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rfc-generator-mexico.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Terms and Conditions", item: "https://rfc-generator-mexico.vercel.app/terms-and-conditions" },
    ],
  };
  return (
    <>
      <LegalPageLayout>
        <h1>Terms and Conditions</h1>
        <h2 className="mt-8 text-2xl font-semibold">Acceptance of Terms</h2>
        <p className="mt-3">By accessing or using RFC Generator Mexico, you agree to these Terms and Conditions. If you do not agree, you must discontinue use of the website. These terms govern both calculator usage and communication through support channels.</p>
        <h2 className="mt-8 text-2xl font-semibold">Service Scope</h2>
        <p className="mt-3">The service provides an estimate of RFC structure for persona física based on public algorithm references. It is not the SAT official system and does not replace legal registration or tax validation channels.</p>
        <p className="mt-3">Feature availability may evolve. We may update interfaces, controls, and outputs to improve quality, security, or compliance. We can add, modify, suspend, or discontinue service components without prior notice.</p>
        <h2 className="mt-8 text-2xl font-semibold">Acceptable Use</h2>
        <h3 className="mt-6 text-xl font-semibold">Permitted Conduct</h3>
        <p className="mt-3">You may use the website for lawful educational and operational purposes, including estimating RFC format and understanding algorithm behavior. You are responsible for entering accurate information and validating official records through SAT.</p>
        <h3 className="mt-6 text-xl font-semibold">Prohibited Conduct</h3>
        <p className="mt-3">You may not misuse the service, including scraping at abusive rates, automating attacks, bypassing anti-spam controls, distributing malware, reverse engineering protected mechanisms, or attempting unauthorized access to systems or infrastructure.</p>
        <p className="mt-3">You may not use the website in violation of applicable law, for fraud, identity abuse, deceptive invoicing workflows, or any activity that harms users, providers, or platform operations.</p>
        <h2 className="mt-8 text-2xl font-semibold">Intellectual Property</h2>
        <p className="mt-3">All site content, branding, visual elements, and software implementation are owned by or licensed to RFC Generator Mexico except third-party assets used under their respective terms. Use of the website does not grant ownership rights.</p>
        <p className="mt-3">You may not reproduce, republish, commercially exploit, or create derivative works from the platform without prior written permission, except where law expressly permits limited fair use.</p>
        <h2 className="mt-8 text-2xl font-semibold">Third-Party Services</h2>
        <p className="mt-3">The platform may rely on third-party services including hosting, analytics, image providers, and future email delivery vendors. Their terms and privacy practices may apply independently when you interact with those systems.</p>
        <h2 className="mt-8 text-2xl font-semibold">Disclaimers</h2>
        <p className="mt-3">Outputs are provided for informational purposes and are not guaranteed official. SAT may assign values that differ from calculator estimates, particularly in homoclave-sensitive situations or record conflicts.</p>
        <p className="mt-3">The website is provided on an "as-is" and "as-available" basis without warranties of accuracy, reliability, merchantability, fitness, or uninterrupted operation. You assume responsibility for verification and downstream use.</p>
        <h2 className="mt-8 text-2xl font-semibold">Limitation of Liability</h2>
        <p className="mt-3">To the maximum extent permitted by law, RFC Generator Mexico is not liable for indirect, incidental, special, consequential, or punitive damages, including business interruption, compliance delays, or losses from reliance on generated values.</p>
        <p className="mt-3">Total liability for any claim related to use of the website is limited to the amount paid by you for the service in the preceding twelve months, which is typically zero for free usage.</p>
        <h2 className="mt-8 text-2xl font-semibold">Indemnification</h2>
        <p className="mt-3">You agree to indemnify and hold harmless RFC Generator Mexico, its operators, and partners from claims, damages, costs, and expenses arising from misuse of the service, violation of these terms, or infringement of third-party rights.</p>
        <h2 className="mt-8 text-2xl font-semibold">Termination</h2>
        <p className="mt-3">We may suspend or terminate access when abuse, security threats, legal concerns, or policy violations are detected. Termination may occur without prior notice when immediate action is required to protect platform integrity.</p>
        <h2 className="mt-8 text-2xl font-semibold">Governing Law and Disputes</h2>
        <p className="mt-3">These terms are governed by applicable law determined by service operation context. Disputes should first be addressed through good-faith communication. Where required, competent courts will have jurisdiction subject to mandatory legal rights.</p>
        <h2 className="mt-8 text-2xl font-semibold">Changes to Terms</h2>
        <p className="mt-3">We may revise these terms from time to time. Updated versions take effect when published. Continued use after publication indicates acceptance of the revised terms.</p>
        <h2 className="mt-8 text-2xl font-semibold">Contact</h2>
        <p className="mt-3">For questions about these Terms and Conditions, please use the contact page with sufficient detail. Last updated: June 2, 2026.</p>
        <h2 className="mt-8 text-2xl font-semibold">Compliance and Enforcement</h2>
        <p className="mt-3">We reserve the right to investigate suspicious activity, impose rate limits, and enforce technical safeguards that protect service availability. Repeated abusive behavior may trigger temporary or permanent blocks at the network, account, or request level.</p>
        <p className="mt-3">Enforcement decisions may include cooperation with hosting providers, fraud-prevention services, and legal authorities where appropriate. Nothing in these terms prevents us from taking immediate action to reduce harm and preserve platform integrity.</p>
        <h2 className="mt-8 text-2xl font-semibold">No Waiver and Severability</h2>
        <p className="mt-3">Failure to enforce any term does not constitute a waiver of future enforcement rights. If a specific provision is found invalid or unenforceable, the remaining provisions continue in full effect to the extent allowed by law.</p>
        <p className="mt-3">Headings are provided for readability and do not limit interpretation. Terms should be interpreted to reflect lawful intent, platform safety, and transparent use for informational RFC estimation.</p>
        <h2 className="mt-8 text-2xl font-semibold">Entire Agreement</h2>
        <p className="mt-3">These Terms and Conditions, together with the Disclaimer and Privacy Policy, represent the full agreement between you and RFC Generator Mexico regarding service use. They supersede prior informal statements about functionality or support expectations.</p>
        <p className="mt-3">If you are using the service on behalf of a company, you represent that you have authority to bind that entity to these terms, and references to "you" include the entity and its authorized users.</p>
      </LegalPageLayout>
      <Script id="breadcrumb-terms" type="application/ld+json">{JSON.stringify(breadcrumb)}</Script>
    </>
  );
}
