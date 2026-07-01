import type { Metadata } from "next";
import Image from "next/image";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { JsonLd } from "@/components/JsonLd";
import { AUTHOR } from "@/lib/author";
import { authorPersonJsonLd, authorProfilePageJsonLd } from "@/lib/jsonLd";
import { noindexMetadata, pageCanonical } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  ...noindexMetadata,
  ...pageCanonical(ROUTES.autor),
  title: "Autor",
  description: `Perfil de ${AUTHOR.name}, especialista en contenido fiscal con ${AUTHOR.experienceYears} años de experiencia en CalcularRFC.`,
};

export default function AutorPage() {
  return (
    <>
      <LegalPageLayout>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="mx-auto shrink-0 sm:mx-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-emerald-100 shadow-lg shadow-emerald-900/10 sm:h-48 sm:w-48">
              <Image
                src={AUTHOR.image}
                alt={AUTHOR.imageAlt}
                title={AUTHOR.imageTitle}
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h1>Autor</h1>
            <p className="mt-2 text-xl font-semibold text-text-primary">{AUTHOR.name}</p>
            <p className="mt-1 text-base font-medium text-emerald-700">{AUTHOR.role}</p>
            <p className="mt-1 text-sm text-text-secondary">
              {AUTHOR.experienceYears} años de experiencia en contenido fiscal y herramientas RFC
            </p>
          </div>
        </div>

        <h2>Biografía Profesional</h2>
        <p>{AUTHOR.bio}</p>
        <p>
          En CalcularRFC, María Elena supervisa la redacción de guías sobre consulta de RFC, homoclave, validación de
          formato y buenas prácticas de verificación ante el SAT. Su enfoque combina claridad para el usuario final con
          rigor terminológico y advertencias responsables sobre los límites de las estimaciones algorítmicas.
        </p>

        <h2>Experiencia</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>{AUTHOR.experienceYears} años</strong> documentando procesos de identificación fiscal para persona
            física en México.
          </li>
          <li>
            Redacción y revisión de contenido educativo sobre RFC, CURP, homoclave y trámites relacionados con el SAT.
          </li>
          <li>
            Desarrollo de guías de usuario para calculadoras en línea con procesamiento local en el navegador y énfasis
            en privacidad.
          </li>
          <li>
            Verificación editorial de secciones de preguntas frecuentes, descargos de responsabilidad y material de
            soporte al contribuyente.
          </li>
        </ul>

        <h2>Formación Académica</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {AUTHOR.education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Áreas De Especialización</h2>
        <p>
          Estructura del RFC (letras base, fecha de nacimiento, homoclave y dígito verificador), homonimia fiscal,
          validación de formato, relación entre RFC y CURP, y comunicación clara de límites entre estimaciones de
          calculadora y registros oficiales del SAT.
        </p>

        <h2>Independencia Editorial</h2>
        <p>
          CalcularRFC es un sitio independiente y no está afiliado al Servicio de Administración Tributaria (SAT). El
          contenido publicado prioriza la precisión informativa, la privacidad del usuario y la distinción explícita
          entre herramientas de preparación y certificados oficiales.
        </p>

        <h2>Contacto Editorial</h2>
        <p>
          Para consultas sobre contenido, correcciones o sugerencias editoriales, visite nuestra página de contacto en{" "}
          {ROUTES.contacto}. Última actualización: 1 de julio de 2026.
        </p>
      </LegalPageLayout>
      <JsonLd id="author-person-jsonld" data={authorPersonJsonLd()} />
      <JsonLd id="author-profile-jsonld" data={authorProfilePageJsonLd()} />
    </>
  );
}
