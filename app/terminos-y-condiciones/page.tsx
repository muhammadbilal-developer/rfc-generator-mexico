import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LegalCrossLinks } from "@/components/LegalCrossLinks";
import { noindexMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  ...noindexMetadata,
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de CalcularRFC: alcance del servicio, uso aceptable, propiedad intelectual y limitaciones.",
};

export default function TerminosCondicionesPage() {
  return (
    <LegalPageLayout>
      <h1>Términos y Condiciones</h1>
      <p className="mt-3 text-sm text-text-secondary">Última actualización: 1 de julio de 2026</p>

      <h2>Aceptación De Los Términos</h2>
      <p>
        Al acceder o utilizar CalcularRFC, usted acepta estos Términos y Condiciones en su totalidad. Si no está de
        acuerdo, debe dejar de usar el sitio web. Estos términos regulan el uso de la calculadora RFC, la navegación por
        el contenido informativo y la comunicación a través de nuestros canales de contacto.
      </p>

      <h2>Descripción Del Servicio</h2>
      <p>
        CalcularRFC proporciona una estimación algorítmica de la estructura del RFC para persona física, basada en
        referencias públicas de formato. El servicio no constituye el sistema oficial del SAT ni sustituye el registro,
        certificación o validación tributaria ante autoridades competentes.
      </p>
      <p>
        Las funcionalidades pueden evolucionar con el tiempo. Nos reservamos el derecho de modificar interfaces,
        algoritmos, textos, controles de seguridad o disponibilidad del servicio para mejorar calidad, cumplimiento o
        estabilidad operativa.
      </p>

      <h2>Uso Aceptable</h2>
      <h3>Conducta Permitida</h3>
      <p>
        Puede utilizar el sitio con fines lícitos, educativos y operativos: estimar formato de RFC, comprender la
        estructura del código fiscal y preparar verificaciones posteriores en portales oficiales. Usted es responsable de
        ingresar información veraz y de validar registros oficiales ante el SAT.
      </p>
      <h3>Conducta Prohibida</h3>
      <p>Queda prohibido, entre otros:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6">
        <li>Realizar scraping o automatización abusiva que degrade el servicio.</li>
        <li>Intentar eludir controles anti-spam, firewalls o medidas de seguridad.</li>
        <li>Distribuir malware, realizar ataques de denegación de servicio o acceder sin autorización a sistemas.</li>
        <li>Usar el sitio para fraude, suplantación de identidad o actividades ilícitas.</li>
        <li>Reproducir o explotar comercialmente el software sin autorización escrita.</li>
      </ul>

      <h2>Propiedad Intelectual</h2>
      <p>
        El contenido, marca, diseño, código y elementos visuales del sitio pertenecen a CalcularRFC o a sus licenciantes,
        salvo activos de terceros sujetos a sus propias licencias. El uso del sitio no transfiere derechos de propiedad
        intelectual al usuario.
      </p>

      <h2>Servicios De Terceros</h2>
      <p>
        La plataforma puede integrar o depender de servicios de terceros (alojamiento, analítica, imágenes, correo).
        Dichos proveedores pueden tener términos y políticas de privacidad independientes aplicables a su interacción con
        ellos.
      </p>

      <h2>Descargos De Responsabilidad</h2>
      <p>
        Los resultados de la calculadora se ofrecen con fines informativos. El SAT puede asignar valores distintos a la
        estimación, especialmente en escenarios sensibles de homoclave, homonimia o conflictos de registro.
      </p>
      <p>
        El sitio se proporciona «tal cual» y «según disponibilidad», sin garantías expresas o implícitas de exactitud
        absoluta, comerciabilidad, idoneidad para un fin particular o funcionamiento ininterrumpido.
      </p>

      <h2>Limitación De Responsabilidad</h2>
      <p>
        En la máxima medida permitida por la ley, CalcularRFC no será responsable por daños indirectos, incidentales,
        especiales, consecuentes o punitivos derivados del uso o imposibilidad de uso del sitio, incluyendo pérdida de
        ingresos, rechazo de facturas, retrasos de cumplimiento o decisiones basadas en estimaciones generadas.
      </p>
      <p>
        La responsabilidad total acumulada por cualquier reclamación relacionada con el servicio se limitará al monto
        pagado por el usuario en los doce meses anteriores, que en el uso gratuito habitual será cero.
      </p>

      <h2>Indemnización</h2>
      <p>
        Usted acepta indemnizar y mantener indemne a CalcularRFC frente a reclamaciones, daños y costos derivados de su
        uso indebido del servicio, violación de estos términos o infracción de derechos de terceros.
      </p>

      <h2>Suspensión Y Terminación</h2>
      <p>
        Podemos suspender o restringir el acceso ante abuso, amenazas de seguridad, incumplimiento legal o violación de
        políticas. En casos graves podemos actuar sin previo aviso para proteger la integridad de la plataforma.
      </p>

      <h2>Ley Aplicable Y Disputas</h2>
      <p>
        Estos términos se interpretan conforme a la legislación aplicable al contexto de operación del servicio. Ante
        controversias, se fomentará primero la resolución amistosa mediante contacto directo. Cuando corresponda, los
        tribunales competentes tendrán jurisdicción sin perjuicio de derechos imperativos del consumidor.
      </p>

      <h2>Modificaciones</h2>
      <p>
        Podemos revisar estos Términos y Condiciones periódicamente. La versión publicada en el sitio será la vigente.
        El uso continuado tras la publicación de cambios implica aceptación de los términos actualizados.
      </p>

      <h2>Contacto</h2>
      <p>
        Para consultas sobre estos términos, utilice el formulario de contacto publicado en el sitio.
      </p>

      <h2>Acuerdo Completo</h2>
      <p>
        Estos Términos y Condiciones, junto con el Descargo de Responsabilidad y la Política de Privacidad del sitio,
        constituyen el acuerdo íntegro entre usted y CalcularRFC respecto al uso del servicio.
      </p>
      <p>
        Si utiliza el servicio en representación de una empresa, declara contar con facultades para obligarla a estos
        términos; las referencias a «usted» incluyen a dicha entidad y sus usuarios autorizados.
      </p>

      <LegalCrossLinks
        links={[
          { href: ROUTES.politicaPrivacidad, label: "Política de Privacidad" },
          { href: ROUTES.descargoResponsabilidad, label: "Descargo de Responsabilidad" },
        ]}
      />
    </LegalPageLayout>
  );
}
