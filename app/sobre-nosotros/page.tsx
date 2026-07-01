import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ContentPageContainer, SECTION_PADDING_Y } from "@/components/LayoutContainer";
import { AUTHOR } from "@/lib/author";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonLd";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce CalcularRFC: calculadora gratuita de RFC para México con estimaciones en formato SAT, procesamiento en el navegador y sin registro.",
};

export default function SobreNosotrosPage() {
  const pageMeta = {
    name: "Sobre Nosotros — CalcularRFC",
    description:
      "Información sobre CalcularRFC, nuestra calculadora gratuita de RFC para persona física en México.",
    path: ROUTES.sobreNosotros,
  };

  return (
    <>
      <main className={`flex flex-1 flex-col w-full bg-page ${SECTION_PADDING_Y}`}>
        <ContentPageContainer className="text-left">
          <h1 className="w-full text-3xl font-bold tracking-tight text-text-primary md:text-4xl">Sobre Nosotros</h1>

          <div className="mt-6 w-full space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              CalcularRFC es una plataforma educativa y práctica creada para ayudar a personas en México a comprender y
              estimar su Registro Federal de Contribuyentes (RFC) de persona física. Nuestra calculadora utiliza reglas
              de formato documentadas públicamente y muestra un desglose claro del resultado: letras base, segmento de
              fecha, homoclave y dígito verificador.
            </p>

            <h2 className="!mt-8 text-2xl font-bold text-text-primary">Nuestra Misión</h2>
            <p>
              Facilitar el acceso a información fiscal comprensible, sin barreras de registro ni costo. Queremos que
              contribuyentes, empleados y trabajadores independientes puedan prepararse antes de verificar su RFC en los
              canales oficiales del SAT, reduciendo errores de formato y confusiones frecuentes sobre la homoclave.
            </p>

            <h2 className="!mt-8 text-2xl font-bold text-text-primary">Cómo Funciona La Calculadora</h2>
            <p>
              Usted introduce apellidos, nombre(s) y fecha de nacimiento. El cálculo se ejecuta en su navegador y el
              resultado aparece al instante. No almacenamos sus datos personales en nuestros servidores como parte del
              flujo estándar de la herramienta. Puede copiar, compartir o exportar el resultado estimado para su
              referencia personal.
            </p>

            <h2 className="!mt-8 text-2xl font-bold text-text-primary">Privacidad Y Transparencia</h2>
            <p>
              La privacidad es un principio central del proyecto. Priorizamos el procesamiento local, la minimización de
              datos y la comunicación honesta sobre lo que la calculadora puede y no puede garantizar. Los resultados son
              estimaciones informativas; para uso legal, laboral o fiscal vinculante debe validar siempre su RFC oficial.
            </p>

            <h2 className="!mt-8 text-2xl font-bold text-text-primary">Independencia Del SAT</h2>
            <p>
              CalcularRFC es un sitio independiente. No estamos afiliados, respaldados ni operados por el Servicio de
              Administración Tributaria (SAT). Cualquier referencia al SAT se utiliza únicamente para describir contexto
              fiscal y métodos de formato conocidos públicamente.
            </p>

            <h2 className="!mt-8 text-2xl font-bold text-text-primary">Equipo Editorial</h2>
            <p>
              El contenido del sitio es revisado por {AUTHOR.name}, {AUTHOR.role.toLowerCase()} con{" "}
              {AUTHOR.experienceYears} años de experiencia en documentación fiscal. Puede conocer su trayectoria,
              formación y áreas de especialización en nuestra página de{" "}
              <Link href={ROUTES.autor} className="font-medium text-emerald-700 underline-offset-2 hover:underline">
                Autor
              </Link>
              .
            </p>

            <h2 className="!mt-8 text-2xl font-bold text-text-primary">Contáctenos</h2>
            <p>
              Si tiene preguntas, sugerencias o necesita soporte, escríbanos a través de{" "}
              <Link href={ROUTES.contacto} className="font-medium text-emerald-700 underline-offset-2 hover:underline">
                Contacto
              </Link>
              . Valoramos los comentarios que nos ayudan a mejorar la claridad, accesibilidad y utilidad de la
              herramienta.
            </p>
          </div>
        </ContentPageContainer>
      </main>
      <JsonLd id="sobre-nosotros-webpage" data={webPageJsonLd(pageMeta)} />
      <JsonLd
        id="sobre-nosotros-breadcrumb"
        data={breadcrumbJsonLd([
          { name: "Inicio", path: ROUTES.home },
          { name: "Sobre Nosotros", path: ROUTES.sobreNosotros },
        ])}
      />
    </>
  );
}
