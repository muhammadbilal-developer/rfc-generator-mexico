import type { Metadata } from "next";
import Script from "next/script";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Read the disclaimer for RFC Generator Mexico and the limits of algorithm-based RFC estimates.",
};

export default function DisclaimerPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rfc-generator-mexico.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Disclaimer", item: "https://rfc-generator-mexico.vercel.app/disclaimer" },
    ],
  };
  return (
    <>
      <LegalPageLayout>
        <h1>Disclaimer</h1>
        <h2>Educational Estimate Only</h2>
        <p>RFC Generator Mexico provides an informational estimate based on public SAT algorithm references for persona física calculations. The result is not a legal certificate, not a tax filing confirmation, and not an official registration record.</p>
        <p>The generated RFC is intended for educational, preparatory, and user-interface convenience purposes. It helps users understand the structure of base letters, birth date segment, homoclave, and verification digit under commonly documented rules.</p>
        <h3>No SAT Affiliation</h3>
        <p>This website is independent and is not owned, endorsed, or operated by Servicio de Administración Tributaria (SAT) or any Mexican government authority. Any reference to SAT is used solely to describe publicly known formatting methods and eligibility context.</p>
        <p>Official outcomes are controlled by SAT systems and records. If you need a legally valid RFC for invoicing, employment, banking, or compliance actions, verify through the official SAT channels directly.</p>
        <h2>Algorithmic Limits and Homoclave Variance</h2>
        <p>The homoclave portion is the most sensitive segment because official assignment can involve homonym disambiguation and internal registry state that public calculators cannot fully replicate. For this reason, two individuals with similar details can receive distinct final official outcomes.</p>
        <p>Even when your calculated RFC appears consistent with public formulas, SAT may still return a different value. You should treat this tool as an estimate and never as a guarantee for legal or contractual obligations.</p>
        <h3>As-Is Service</h3>
        <p>The service is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis without warranties of completeness, merchantability, fitness for a specific purpose, uninterrupted availability, or non-infringement. We do not guarantee that every output is suitable for your use case.</p>
        <p>Users are responsible for validating all outputs before relying on them. You should independently check official portals, legal advisors, and licensed tax professionals whenever decisions have regulatory, financial, or legal impact.</p>
        <h2>No Professional Advice</h2>
        <p>Nothing on this website is legal advice, tax advice, accounting advice, or professional consulting. Content is general information and does not account for personal circumstances, residency details, historical registrations, or SAT internal records.</p>
        <p>Use of this website does not create a professional-client relationship. For specific guidance, consult qualified professionals in your jurisdiction.</p>
        <h2>Liability Limitation</h2>
        <p>To the fullest extent permitted by law, RFC Generator Mexico and its operators are not liable for direct, indirect, incidental, consequential, punitive, or special damages arising from use or inability to use the website, including any reliance on generated values.</p>
        <p>Examples include rejected invoices, delayed filings, compliance penalties, contractual disputes, business interruption, data-entry errors, and opportunity costs. Your sole remedy for dissatisfaction is to stop using the service.</p>
        <h3>User Responsibility</h3>
        <p>By using the service, you confirm that you understand the estimate nature of the result and agree to verify your RFC through SAT before legal use. You also agree to provide truthful information when calculating values.</p>
        <p>You should not submit sensitive data that is unnecessary for calculation. Avoid sharing private identifiers beyond required fields and always use secure browsing practices on shared devices.</p>
        <h2>External Links and Availability</h2>
        <p>Any link to third-party services is provided for convenience. We do not control or guarantee external content accuracy, security posture, or policy updates. Visiting external websites is at your own risk.</p>
        <p>Service availability may change due to maintenance, updates, hosting events, and technical issues. We can modify, suspend, or discontinue features without prior notice.</p>
        <h2>Policy Updates</h2>
        <p>This disclaimer may be revised periodically to reflect legal changes, product updates, and operational improvements. Continued use after updates means acceptance of the revised terms.</p>
        <h3>Practical Verification Guidance</h3>
        <p>Before using any generated code for an invoice, payroll onboarding, banking workflow, or procurement form, verify directly against SAT records. If an external party requests your RFC, confirm that your official certificate and SAT account reflect the same value.</p>
        <p>A practical workflow is to use this calculator as a preparation tool, then check official SAT systems, then save only the official value in your contracts and internal systems. This process reduces avoidable rejection errors and supports compliance readiness.</p>
        <h3>No Guarantee of Suitability</h3>
        <p>Different organizations may implement validations in ways that include strict formatting checks, backend cross-references, or integration with fiscal status records. A value that looks structurally valid may still fail business rules outside this tool.</p>
        <p>Because requirements vary by institution, it is your responsibility to confirm acceptance criteria before submission. When in doubt, contact the receiving institution and request written confirmation of expected RFC validation standards.</p>
        <h3>Regional and Regulatory Context</h3>
        <p>Tax workflows can change over time due to reforms, administrative criteria, and digital filing updates. Public algorithm summaries may lag behind internal implementation details. This website cannot guarantee immediate adaptation to every procedural change.</p>
        <p>You should monitor official communications and consult licensed specialists when compliance risk is material. Your reliance decisions should always consider legal deadlines, filing responsibilities, and the sensitivity of the transaction involved.</p>
        <p>Last updated: June 2, 2026.</p>
      </LegalPageLayout>
      <Script id="breadcrumb-disclaimer" type="application/ld+json">{JSON.stringify(breadcrumb)}</Script>
    </>
  );
}
