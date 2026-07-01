import Link from "next/link";
import { HomeContentSection } from "../HomeContentSection";
import { SAT_WEBSITE_URL } from "@/lib/externalLinks";
import { ROUTES } from "@/lib/routes";

const IMAGES = {
  queEs: "/images/rfc-con-homoclave/que-es-rfc-homoclave.webp",
  porQueSat: "/images/rfc-con-homoclave/por-que-sat-homoclave.webp",
  estructura: "/images/rfc-con-homoclave/estructura-rfc-homoclave.webp",
  informacion: "/images/rfc-con-homoclave/informacion-homoclave.webp",
  dondeEncontrar: "/images/rfc-con-homoclave/donde-encontrar-homoclave.webp",
  particularesEmpresas: "/images/rfc-con-homoclave/particulares-empresas-homoclave.webp",
} as const;

export function RfcConHomoclaveContent() {
  return (
    <>
      <HomeContentSection
        id="que-es-rfc-homoclave"
        title="¿Qué Es Un RFC Con Homoclave?"
        image={IMAGES.queEs}
        imageAlt="Qué es un RFC con homoclave en México"
        sectionIndex={0}
        imagePosition="right"
        ctaSectionId="generator"
      >
        <p>
          El RFC es el número de identificación fiscal oficial asignado a toda persona que percibe ingresos. Sin embargo,
          existe una diferencia entre el RFC básico y el RFC con un homoclave. Un RFC básico consta únicamente de los
          primeros 10 caracteres.           Puedes{" "}
          <Link href={ROUTES.home} className="font-medium text-emerald-700 underline-offset-2 hover:underline">
            calcular RFC
          </Link>{" "}
          utilizando tu nombre y fecha de nacimiento.
        </p>
        <h3>Comprender El RFC Completo</h3>
        <p>
          RFC es una forma de llevar un registro de todos los contribuyentes en México.**.**La versión completa de este
          código, el <strong>RFC con homoclave</strong>, es el que el gobierno utiliza realmente en todos los registros
          oficiales. Lo necesitas para emitir facturas y presentar declaraciones de impuestos. Sin esto, estos procesos
          no se pueden completar.
        </p>
        <h3>¿Qué Representa La Homoclave?</h3>
        <p>
          Es la <strong>clave alfanumérica</strong> de 3 caracteres que aparece al final del RFC. . Se asigna
          automáticamente después del registro. Estos 3 caracteres hacen que su RFC sea único porque México tiene una
          gran base de datos de contribuyentes, y eso marca la diferencia.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="por-que-sat-homoclave"
        title="¿Por Qué SAT Añade La Homoclave Al RFC?"
        image={IMAGES.porQueSat}
        imageAlt="Por qué el SAT añade la homoclave al RFC"
        sectionIndex={1}
        imagePosition="left"
        ctaText="¡Consigue mi RFC con Homoclave aquí!"
        ctaSectionId="generator"
      >
        <p>
          El <strong>SAT (Servicio de Administración Tributaria)</strong> gestiona los registros de un millón de
          contribuyentes registrados. Muchos contribuyentes comparten los mismos nombres y fechas de nacimiento. Las
          razones de este homoclave son las siguientes:
        </p>
        <h3>Cómo Evitar La Duplicación De Registros Fiscales</h3>
        <p>
          Supongamos que dos personas tienen el mismo nombre y fecha de nacimiento, entonces el RFC generado sería
          idéntico. Esto se llama &apos;<strong>homonimia&apos;.</strong> Es un verdadero desafío, pero la homoclave
          resuelve este problema.
        </p>
        <h3>Mejorar La Precisión En La Administración Tributaria.</h3>
        <p>
          Mejora la precisión porque, al utilizarse en un recibo de nómina o una declaración de impuestos, el SAT
          valida cada carácter con la homóclave. Esto garantiza el correcto funcionamiento de todo el sistema
          tributario.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="estructura-rfc-homoclave"
        title="¿Cómo Está Estructurado Un RFC Con homoclave?"
        image={IMAGES.estructura}
        imageAlt="Cómo está estructurado un RFC con homoclave"
        sectionIndex={2}
        imagePosition="right"
        ctaSectionId="generator"
      >
        <p>
          El RFC sigue el mismo patrón para todos. Una vez que comprenda la lógica, podrá identificar fácilmente si el
          RFC es para una persona o una empresa. El RFC para una persona física comienza con cuatro letras derivadas del
          nombre de la persona. Aquí están esas
        </p>
        <ul>
          <li>
            La primera letra del <strong>apellido paterno</strong>
          </li>
          <li>La primera vocal interna del apellido paterno</li>
          <li>
            La primera letra del <strong>apellido materno</strong>
          </li>
          <li>
            La primera letra de tu <strong>nombre</strong>
          </li>
        </ul>
        <p>
          Después de esto vienen seis números que <strong>representan la fecha de nacimiento del contribuyente</strong>{" "}
          en formato AAMMDD. Los caracteres homoclave son una combinación de letras y números. El ejemplo de homoclave
          RFC se ve así: GARC850315AB7
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="informacion-homoclave"
        title="¿Qué Información Contiene La Homoclave?"
        image={IMAGES.informacion}
        imageAlt="Qué información contiene la homoclave del RFC"
        sectionIndex={3}
        imagePosition="left"
        ctaSectionId="generator"
      >
        <p>
          La homoclave es único. No contiene información personal. El SAT encuentra rápidamente su registro tributario
          exacto sin mezclarlo con el de nadie más. Ayuda a identificar su historial de declaraciones y tu dirección .
          Existen ideas erróneas sobre la homoclave en los siguientes casos:
        </p>
        <ul>
          <li>El SAT lo determina mediante algoritmos, y no es elegido por el contribuyente.</li>
          <li>No es un código secreto. Puedes compartirlo con quien quieras abiertamente.</li>
          <li>El sistema homoclave no revela su información personal.</li>
          <li>
            Un <strong>Generador de RFC</strong> Solo lo estima. El RFC oficial lo emite SAT.
          </li>
        </ul>
      </HomeContentSection>

      <HomeContentSection
        id="donde-encontrar-homoclave"
        title="¿Dónde puedes encontrar tu RFC con homoclave oficial?"
        image={IMAGES.dondeEncontrar}
        imageAlt="Dónde encontrar tu RFC con homoclave oficial"
        sectionIndex={4}
        imagePosition="right"
        ctaSectionId="generator"
      >
        <p>
          Hay varias maneras de encontrar tu RFC oficial. Además, puedes{" "}
          <strong>descargar RFC con Homoclave</strong> Sin necesidad de visitar una oficina del SAT. A continuación se
          presenta la explicación:
        </p>
        <h3>Constancia De Situación Fiscal</h3>
        <p>Es un documento oficial emitido por SAT. Muestra varias cosas como:</p>
        <ul>
          <li>RFC y CURP completos</li>
          <li>Tu dirección</li>
          <li>Tu régimen tributario registrado</li>
          <li>Tu código postal.</li>
        </ul>
        <p>
          Además, puedes generar y descargar tu certificado tributario de forma gratuita a través del{" "}
          <a
            href={SAT_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline-offset-2 hover:underline"
          >
            sitio web de la SAT
          </a>
          . Solo necesitas usar tu RFC y contraseña. El proceso tarda unos minutos y el documento se genera como un
          archivo PDF descargable.
        </p>
        <h3>Servicios En Línea Del SAT</h3>
        <p>
          Si tienes una cuenta SAT activa, puedes iniciar sesión en cualquier momento y consultar tu RFC. El portal te
          permite{" "}
          <Link href={ROUTES.consultarRfc} className="font-semibold text-emerald-700 underline-offset-2 hover:underline">
            validar tu RFC
          </Link>
          . En algunos casos, podrás usar tu CURP para recuperar tu RFC si la olvidas.
        </p>
        <p>
          La herramienta de validación en línea del SAT acepta su CURP de 18 caracteres y devuelve su RFC completo,
          incluida la homoclave. Puedes comprobar lo <strong>RFC con CURP</strong> a través de la aplicación móvil SAT.
        </p>
        <h3>Documento Fiscal Y Factura:</h3>
        <p>En sus numerosos documentos, su RFC ya se menciona. Aparece en:</p>
        <ul>
          <li>CFDIS (factura electrónica)</li>
          <li>recibos de nómina</li>
          <li>Factura fiscal</li>
          <li>Documentos de empleo</li>
          <li>Registros relacionados con IMSS</li>
        </ul>
      </HomeContentSection>

      <HomeContentSection
        id="particulares-empresas"
        title="RFC Con Homoclave Para Particulares Y Empresas"
        image={IMAGES.particularesEmpresas}
        imageAlt="RFC con homoclave para particulares y empresas"
        sectionIndex={5}
        imagePosition="left"
        ctaSectionId="generator"
      >
        <p>
          La estructura de una RFC difiere ligeramente dependiendo de si pertenece a una persona o a una empresa.
          Conozca las diferencias entre estas estructuras si es contador o si emite o recibe facturas. Aquí está la
          diferencia entre las dos categorías.
        </p>
        <h3>Individuos:</h3>
        <p>
          <strong>Persona física</strong> que trabaja como empleado o autónomo. En este caso, el RFC tiene 13
          caracteres. Incluye cuatro letras del nombre, seis dígitos de la fecha de nacimiento y tres caracteres de la
          homoclave.
        </p>
        <h3>Negocio:</h3>
        <p>
          <strong>Una</strong> persona moral es una empresa u organización. Es un RFC de 12 caracteres. La estructura
          utiliza las primeras 3 letras del nombre <strong>razón social</strong> , seguido de 6 dígitos que representan
          la fecha de constitución. Los últimos tres caracteres son la homoclave.
        </p>
      </HomeContentSection>
    </>
  );
}
