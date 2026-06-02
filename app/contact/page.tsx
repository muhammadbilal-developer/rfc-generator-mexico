import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { LayoutContainer, SECTION_PADDING_Y } from "@/components/LayoutContainer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact RFC Generator Mexico support for technical, legal, or business questions.",
};

export default function ContactPage() {
  return (
    <main className={`w-full bg-page ${SECTION_PADDING_Y}`}>
      <LayoutContainer className="w-full">
        <div className="mb-8 text-center">
          <p className="mx-auto inline-flex rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-text-secondary shadow-sm">
            Contact
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-xl text-text-secondary">
            Questions about your RFC? Our team responds in 1–2 business days.
          </p>
        </div>

        <section className="grid w-full overflow-hidden rounded-[28px] border border-border bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:grid-cols-5 md:min-h-[520px]">
          <div className="p-6 md:col-span-3 md:p-10">
            <ContactForm />
          </div>
          <aside className="relative min-h-[360px] bg-muted md:col-span-2 md:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85"
              alt="Customer support professional helping with inquiries"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-sm font-medium text-text-primary backdrop-blur-md">
              Questions about your RFC? We&apos;re here to help.
            </p>
          </aside>
        </section>
      </LayoutContainer>
    </main>
  );
}
