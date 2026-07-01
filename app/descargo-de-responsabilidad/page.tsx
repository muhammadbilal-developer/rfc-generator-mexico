import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LegalCrossLinks } from "@/components/LegalCrossLinks";
import { noindexMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  ...noindexMetadata,
  title: "Descargo de Responsabilidad",
  description:
    "Descargo de responsabilidad de CalcularRFC: límites de la calculadora RFC, estimaciones informativas, no afiliación al SAT y uso bajo su propio riesgo.",
};

export default function DescargoResponsabilidadPage() {
  return (
    <LegalPageLayout>
      <h1>Descargo de Responsabilidad</h1>
      <p className="mt-3 text-sm text-text-secondary">Última actualización: 1 de julio de 2026</p>

      <h2>Estimación Educativa Únicamente</h2>
      <p>
        CalcularRFC proporciona una estimación informativa del Registro Federal de Contribuyentes (RFC) para persona
        física, basada en referencias públicas de formato SAT. El resultado no constituye certificado legal, no confirma
        un trámite tributario y no sustituye registros oficiales ni constancias fiscales.
      </p>
      <p>
        El RFC generado tiene fines educativos, de preparación y de conveniencia para comprender la estructura del código:
        letras base, segmento de fecha de nacimiento, homoclave y dígito verificador conforme a reglas documentadas
        públicamente.
      </p>

      <h2>Sin Afiliación Al SAT</h2>
      <p>
        Este sitio web es independiente. No está propiedad, respaldado ni operado por el Servicio de Administración
        Tributaria (SAT) ni por ninguna autoridad gubernamental mexicana. Las referencias al SAT describen únicamente
        contexto fiscal y métodos de formato conocidos públicamente.
      </p>
      <p>
        Los resultados oficiales dependen de los sistemas del SAT. Si necesita un RFC válido para facturación, empleo,
        banca o cumplimiento normativo, verifíquelo directamente en los canales oficiales.
      </p>

      <h2>Límites Algorítmicos Y Variación De Homoclave</h2>
      <p>
        La homoclave es el segmento más sensible del RFC porque su asignación oficial puede involucrar desambiguación de
        homonimia y estado interno del padrón que las calculadoras públicas no replican por completo. Dos personas con
        datos similares pueden recibir homoclaves oficiales distintas.
      </p>
      <p>
        Aunque el resultado calculado parezca coherente con fórmulas públicas, el SAT puede asignar un valor diferente.
        No debe tratarse como garantía para obligaciones legales, laborales o contractuales.
      </p>

      <h2>Servicio «Tal Cual» Y «Según Disponibilidad»</h2>
      <p>
        El sitio se ofrece sin garantías de exactitud absoluta, comerciabilidad, idoneidad para un fin particular,
        disponibilidad ininterrumpida o ausencia de errores. No garantizamos que cada resultado sea aceptado por
        empleadores, bancos, plataformas de facturación u otros validadores.
      </p>
      <p>
        Usted asume la responsabilidad de validar cualquier valor antes de usarlo. Consulte portales oficiales y
        profesionales calificados cuando las decisiones tengan impacto regulatorio, financiero o jurídico.
      </p>

      <h2>No Constituye Asesoría Profesional</h2>
      <p>
        Nada en este sitio constituye asesoría legal, fiscal, contable ni de consultoría profesional. El contenido es
        información general y no considera circunstancias personales, historial registral ni criterios internos del SAT.
      </p>
      <p>
        El uso del sitio no crea relación profesional-cliente. Para orientación específica, consulte especialistas
        autorizados en su jurisdicción.
      </p>

      <h2>Limitación De Responsabilidad</h2>
      <p>
        En la máxima medida permitida por la ley, CalcularRFC y sus operadores no serán responsables por daños directos,
        indirectos, incidentales, consecuentes, punitivos o especiales derivados del uso o imposibilidad de uso del
        sitio, incluyendo confianza en valores estimados, facturas rechazadas, multas, disputas contractuales,
        interrupción de negocio u oportunidades perdidas.
      </p>
      <p>Su recurso principal ante insatisfacción con el servicio es dejar de utilizarlo.</p>

      <h2>Responsabilidad Del Usuario</h2>
      <p>
        Al usar el servicio, usted confirma que comprende la naturaleza estimativa del resultado y que verificará su RFC
        ante el SAT antes de cualquier uso legal. Se compromete a proporcionar información veraz y a no enviar datos
        sensibles innecesarios.
      </p>

      <h2>Enlaces Externos Y Disponibilidad</h2>
      <p>
        Los enlaces a sitios de terceros se ofrecen por conveniencia. No controlamos ni garantizamos la exactitud,
        seguridad o políticas de sitios externos. Su visita es bajo su propio riesgo.
      </p>
      <p>
        La disponibilidad puede verse afectada por mantenimiento, actualizaciones o incidentes técnicos. Podemos
        modificar, suspender o discontinuar funciones sin previo aviso.
      </p>

      <h2>Guía Práctica De Verificación</h2>
      <p>Antes de usar cualquier código estimado en facturas, nómina, banca o formularios:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6">
        <li>Utilice esta calculadora como herramienta de preparación.</li>
        <li>Contraste el resultado con constancias y sistemas oficiales del SAT.</li>
        <li>Guarde únicamente el valor oficial en contratos y sistemas internos.</li>
        <li>Confirme criterios de validación con la institución receptora si existe duda.</li>
      </ul>

      <h2>Contexto Regulatorio</h2>
      <p>
        Los procedimientos fiscales pueden cambiar por reformas y actualizaciones administrativas. Los resúmenes
        algorítmicos públicos pueden no reflejar de inmediato cada detalle de implementación interna del SAT.
      </p>

      <h2>Actualizaciones De Este Descargo</h2>
      <p>
        Este descargo de responsabilidad puede revisarse periódicamente. La fecha de actualización indicará la versión
        vigente. El uso continuado del sitio tras cambios implica aceptación del descargo revisado.
      </p>

      <h2>Contacto</h2>
      <p>
        Para consultas relacionadas con este descargo de responsabilidad, utilice el formulario de contacto publicado en
        el sitio.
      </p>

      <LegalCrossLinks
        links={[
          { href: ROUTES.politicaPrivacidad, label: "Política de Privacidad" },
          { href: ROUTES.terminosCondiciones, label: "Términos y Condiciones" },
        ]}
      />
    </LegalPageLayout>
  );
}
