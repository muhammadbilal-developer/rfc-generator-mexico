import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LegalCrossLinks } from "@/components/LegalCrossLinks";
import { noindexMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  ...noindexMetadata,
  title: "Política de Privacidad",
  description:
    "Política de privacidad de CalcularRFC: tratamiento de datos, cookies, analítica, derechos del usuario y seguridad.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPageLayout>
      <h1>Política de Privacidad</h1>
      <p className="mt-3 text-sm text-text-secondary">Última actualización: 1 de julio de 2026</p>

      <h2>Introducción</h2>
      <p>
        La presente Política de Privacidad describe cómo CalcularRFC recopila,
        utiliza, almacena y protege la información personal de los usuarios que acceden a nuestra calculadora de RFC y
        demás servicios en línea. Nuestro objetivo es ofrecer una experiencia transparente, segura y respetuosa de la
        privacidad.
      </p>
      <p>
        Al utilizar este sitio web, usted reconoce haber leído esta política. Si no está de acuerdo con sus términos, le
        recomendamos dejar de usar el servicio.
      </p>

      <h2>Responsable Del Tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos personales recabados a través de CalcularRFC es el operador del sitio
        web identificado como RFC Generator Mexico / CalcularRFC. Para ejercer derechos o realizar consultas de
        privacidad, puede contactarnos mediante el formulario de contacto publicado en el sitio web.
      </p>

      <h2>Datos Que Procesamos</h2>
      <h3>Datos De La Calculadora RFC</h3>
      <p>
        Para generar una estimación de RFC, el usuario puede introducir apellido paterno, apellido materno, nombre(s) y
        fecha de nacimiento. Estos datos se procesan principalmente en el navegador del usuario para producir el
        resultado algorítmico. No vendemos esta información ni la utilizamos para crear perfiles publicitarios
        personalizados.
      </p>
      <h3>Datos Del Formulario De Contacto</h3>
      <p>
        Si nos contacta, podemos procesar su nombre, correo electrónico, categoría de consulta, asunto y mensaje con el
        fin de responder su solicitud. Implementamos validaciones del lado del servidor y mecanismos anti-spam (incluido
        campo honeypot) para proteger la integridad del servicio.
      </p>
      <h3>Datos Técnicos Y De Uso</h3>
      <p>
        Como la mayoría de los sitios web, recopilamos información técnica limitada: tipo de dispositivo, navegador,
        páginas visitadas, eventos de interacción y métricas agregadas de rendimiento. Esta información nos ayuda a
        mejorar la estabilidad, accesibilidad y calidad del producto.
      </p>

      <h2>Finalidades Del Tratamiento</h2>
      <p>Utilizamos los datos personales para las siguientes finalidades legítimas:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6">
        <li>Operar y mantener el sitio web y la calculadora RFC.</li>
        <li>Responder consultas de soporte, privacidad o contenido editorial.</li>
        <li>Detectar, prevenir y mitigar abuso, fraude o ataques automatizados.</li>
        <li>Analizar el uso agregado del sitio para mejorar funcionalidades y experiencia de usuario.</li>
        <li>Cumplir obligaciones legales aplicables cuando corresponda.</li>
      </ul>
      <p className="mt-3">
        No vendemos datos personales. No compartimos información con terceros para publicidad comportamental no
        relacionada con la operación del servicio.
      </p>

      <h2>Cookies Y Tecnologías Similares</h2>
      <p>
        Podemos utilizar cookies, píxeles o identificadores similares para analítica web, medición de rendimiento y
        diagnóstico. Dependiendo de la configuración del entorno, pueden activarse servicios como Google Analytics y
        Microsoft Clarity.
      </p>
      <p>
        Las cookies pueden facilitar la continuidad de sesión, informes agregados y detección de errores. Usted puede
        gestionar las cookies desde la configuración de su navegador. La desactivación de ciertas cookies puede afectar
        funciones de medición, pero el acceso básico al sitio generalmente permanece disponible.
      </p>

      <h2>Base Legal Y Derechos Del Usuario</h2>
      <p>
        Según su jurisdicción, el tratamiento puede basarse en interés legítimo, ejecución de servicios solicitados,
        cumplimiento legal y consentimiento cuando sea requerido. Respetamos principios de minimización de datos,
        limitación de finalidad y responsabilidad proactiva.
      </p>
      <p>Usted puede solicitar, cuando corresponda:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6">
        <li>Acceso a sus datos personales.</li>
        <li>Rectificación de información inexacta.</li>
        <li>Supresión («derecho al olvido») cuando proceda.</li>
        <li>Portabilidad de datos en formatos estructurados.</li>
        <li>Limitación u oposición al tratamiento.</li>
        <li>Retiro del consentimiento cuando el tratamiento se base en él.</li>
      </ul>
      <p className="mt-3">
        Atenderemos las solicitudes dentro de plazos razonables conforme a la normativa aplicable y podremos solicitar
        verificación de identidad para proteger la seguridad de los titulares.
      </p>

      <h2>Compartición Con Proveedores</h2>
      <p>
        Podemos compartir información limitada con proveedores de infraestructura que actúan como encargados del
        tratamiento: alojamiento web, analítica, observabilidad, entrega de correo y servicios de seguridad. Estos
        proveedores deben mantener confidencialidad y medidas de seguridad adecuadas.
      </p>
      <p>
        También podemos divulgar información cuando la ley lo exija, para proteger derechos y seguridad, o en el marco
        de investigaciones legítimas. No autorizamos a terceros a utilizar sus datos con fines independientes no
        relacionados sin base legal válida.
      </p>

      <h2>Conservación Y Seguridad</h2>
      <p>
        Conservamos los mensajes de contacto únicamente el tiempo necesario para brindar soporte, operar el servicio y
        cumplir obligaciones legales. Los datos introducidos en la calculadora están diseñados para un procesamiento
        transitorio y no están destinados a persistencia prolongada en nuestros sistemas por defecto.
      </p>
      <p>
        Aplicamos medidas de seguridad razonables: cifrado en tránsito (HTTPS), controles de acceso, validación de
        entradas y monitoreo básico. Ningún método de transmisión o almacenamiento es 100 % seguro; evite compartir datos
        sensibles innecesarios y verifique siempre su RFC oficial en canales del SAT.
      </p>

      <h2>Transferencias Internacionales</h2>
      <p>
        Nuestros proveedores pueden procesar datos en distintas regiones geográficas. Cuando aplique normativa de
        transferencia transfronteriza, procuramos contar con salvaguardas contractuales y marcos de cumplimiento
        reconocidos.
      </p>

      <h2>Privacidad De Menores</h2>
      <p>
        Este sitio no está dirigido a menores de edad. Si cree que un menor ha enviado datos personales sin autorización,
        contáctenos para revisar y eliminar la información cuando proceda.
      </p>

      <h2>Cambios A Esta Política</h2>
      <p>
        Podemos actualizar esta Política de Privacidad cuando cambien funcionalidades, proveedores, requisitos legales o
        prácticas operativas. La fecha de «última actualización» reflejará la versión vigente. El uso continuado del
        sitio después de publicar cambios implica la aceptación de la política revisada.
      </p>

      <h2>Contacto De Privacidad</h2>
      <p>
        Para solicitudes relacionadas con privacidad, utilice el formulario de contacto del sitio e incluya detalle
        suficiente sobre su solicitud y, si aplica, datos para verificar su identidad.
      </p>

      <LegalCrossLinks
        links={[
          { href: ROUTES.terminosCondiciones, label: "Términos y Condiciones" },
          { href: ROUTES.descargoResponsabilidad, label: "Descargo de Responsabilidad" },
        ]}
      />
    </LegalPageLayout>
  );
}
