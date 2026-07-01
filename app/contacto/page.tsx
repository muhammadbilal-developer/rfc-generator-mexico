import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { ContentPageContainer, SECTION_PADDING_Y } from "@/components/LayoutContainer";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonLd";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacte al equipo de CalcularRFC para soporte técnico, consultas legales, privacidad o colaboraciones.",
};

export default function ContactoPage() {
  const pageMeta = {
    name: "Contacto — CalcularRFC",
    description: "Formulario de contacto para soporte y consultas sobre la calculadora RFC de CalcularRFC.",
    path: ROUTES.contacto,
  };

  return (
    <>
      <main className={`flex flex-1 flex-col w-full bg-page ${SECTION_PADDING_Y}`}>
        <ContentPageContainer>
          <div className="mb-8 w-full text-left">
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">Contacto</h1>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              ¿Preguntas sobre su RFC o nuestra calculadora? Respondemos en 1–2 días hábiles.
            </p>
            <p className="mt-2 text-base leading-relaxed text-text-secondary">
              Correo directo:{" "}
              <a
                href="mailto:icalcularrfc.mx@gmail.com"
                className="font-medium text-emerald-700 underline-offset-2 hover:underline"
              >
                icalcularrfc.mx@gmail.com
              </a>
            </p>
          </div>

          <section className="grid w-full overflow-hidden rounded-xl border border-border bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:grid-cols-5 md:min-h-[520px]">
            <div className="p-6 md:col-span-3 md:p-10">
              <ContactForm />
            </div>
            <aside className="relative min-h-[360px] md:col-span-2 md:min-h-full">
              <Image
                src="/images/contacto/soporte-rfc.webp"
                alt="Representante de soporte de CalcularRFC atendiendo consultas sobre RFC"
                title="Soporte CalcularRFC — Atención al cliente RFC"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-emerald-950/10 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-sm font-medium text-text-primary backdrop-blur-md">
                ¿Dudas sobre su RFC? Estamos para ayudarle.
              </p>
            </aside>
          </section>

          <section className="mt-12 w-full space-y-8 text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-text-primary">Cómo Podemos Ayudarle</h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                Nuestro equipo de soporte atiende consultas sobre el uso de la calculadora RFC, interpretación de
                resultados estimados, privacidad de datos, errores técnicos y sugerencias de mejora del sitio. Si su
                pregunta está relacionada con trámites oficiales, le orientaremos hacia los canales correspondientes del
                SAT.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-text-primary">Tipos De Consulta</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-text-secondary">
                <li>Soporte técnico de la calculadora y problemas de visualización.</li>
                <li>Dudas sobre el formato del RFC, homoclave y validación de estructura.</li>
                <li>Solicitudes relacionadas con privacidad y tratamiento de datos personales.</li>
                <li>Comentarios editoriales, correcciones de contenido o propuestas de colaboración.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-text-primary">Tiempo De Respuesta</h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                Procuramos responder en un plazo de 1 a 2 días hábiles. Los mensajes recibidos en fin de semana o días
                festivos se atienden al siguiente día laborable. Para una atención más ágil, indique en el asunto el
                tipo de consulta y, si aplica, la página donde experimentó el inconveniente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-text-primary">Antes De Escribirnos</h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                Recuerde que CalcularRFC ofrece estimaciones informativas y no sustituye registros oficiales del SAT. Si
                necesita contexto sobre nuestra herramienta, visite{" "}
                <Link href={ROUTES.sobreNosotros} className="font-medium text-emerald-700 underline-offset-2 hover:underline">
                  Sobre Nosotros
                </Link>{" "}
                o el perfil de nuestra autora en{" "}
                <Link href={ROUTES.autor} className="font-medium text-emerald-700 underline-offset-2 hover:underline">
                  Autor
                </Link>
                .
              </p>
            </div>
          </section>
        </ContentPageContainer>
      </main>
      <JsonLd id="contacto-webpage" data={webPageJsonLd(pageMeta)} />
      <JsonLd
        id="contacto-breadcrumb"
        data={breadcrumbJsonLd([
          { name: "Inicio", path: ROUTES.home },
          { name: "Contacto", path: ROUTES.contacto },
        ])}
      />
    </>
  );
}
