import Link from "next/link";
import { SECTION_IDS } from "@/lib/hashNav";
import { SAT_WEBSITE_URL } from "@/lib/externalLinks";
import { ROUTES } from "@/lib/routes";
import { HomeContentSection } from "./HomeContentSection";
import { ManualVsCalculatorCards } from "./ManualVsCalculatorCards";
import { RfcInputFieldsGrid } from "./RfcInputFieldsGrid";

const IMAGES = {
  queEs: "/images/home/que-es-calculadora-rfc.webp",
  caracteristicas: "/images/home/caracteristicas-rfc.webp",
  comoFunciona: "/images/home/como-funciona-rfc.webp",
  caracteres: "/images/home/caracteres-rfc.webp",
  quienPuedeUsar: "/images/home/quien-puede-usar-rfc.webp",
  vsManual: "/images/home/calculadora-vs-manual.webp",
  precision: "/images/home/precision-rfc.webp",
} as const;

export function HomeContent() {
  return (
    <>
      <HomeContentSection
        id="que-es-calculadora-rfc"
        title="¿Qué Es La Calculadora RFC?"
        image={IMAGES.queEs}
        imageAlt="Calculadora RFC y registro federal de contribuyentes en México"
        sectionIndex={0}
        imagePosition="right"
      >
        <p>
          El RFC es un <strong>registro federal de contribuyentes.</strong> El{" "}
          <a
            href={SAT_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline-offset-2 hover:underline"
          >
            Servicio de Administración Tributaria
          </a>{" "}
          de México asigna este formulario a cada contribuyente. Es necesario registrarse como persona física o jurídica.
          Cumplir con este requisito es fundamental para quienes deben abonar sus obligaciones tributarias.
        </p>
        <p>
          <strong>Calcula tu RFC</strong> de forma rápida y sencilla. Utiliza el formato SAT estándar para la
          generación, incluyendo el{" "}
          <Link
            href={ROUTES.rfcConHomoclave}
            className="font-semibold text-emerald-700 underline-offset-2 hover:underline"
          >
            RFC con homoclave
          </Link>
          , en tan solo unos segundos. El resultado obtenido le ayuda con varias tareas, como:
        </p>
        <ul>
          <li>
            <Link
              href={ROUTES.consultarRfc}
              className="font-semibold text-emerald-700 underline-offset-2 hover:underline"
            >
              Verificar RFC
            </Link>
          </li>
          <li>Complete los formularios de impuestos</li>
          <li>
            En el registro de su <strong>firma electrónica (FIEL)</strong>
          </li>
          <li>
            Preparación de su <strong>declaración de impuestos</strong>
          </li>
        </ul>
      </HomeContentSection>

      <HomeContentSection
        id="caracteristicas-principales"
        title="Características Principales De Nuestra Calculadora RFC:"
        image={IMAGES.caracteristicas}
        imageAlt="Características principales de la calculadora RFC en línea"
        sectionIndex={1}
        imagePosition="left"
      >
        <p>
          Al usar nuestra herramienta, desbloqueaste muchas funciones. Generar un RFC requiere precisión, y nuestra
          calculadora la proporciona. Estas son las características que distinguen a nuestra calculadora:
        </p>
        <ul>
          <li>
            Nuestra calculadora genera un documento completo y con el formato adecuado.{" "}
            <strong>RFC con homoclave: Es</strong> necesario para cualquier proceso oficial, como la validación de la
            CFDI.
          </li>
          <li>
            <strong>Genera un RFC con CURP</strong> Simplemente ingrese su CURP y los resultados aparecerán
            automáticamente. No es necesario ingresar su nombre y fecha de nacimiento por separado si tiene CURP.
          </li>
          <li>
            La calculadora realiza los cálculos para ambos tipos de personas, ya sean físicas o jurídicas.
          </li>
          <li>
            <strong>Sacar RFC al</strong> instante, sin necesidad de cuenta. Introduce tus datos, haz clic en
            &apos;Generar&apos; y listo. El <strong>número de RFC</strong> aparece en segundos
          </li>
          <li>
            Disfruta de la privacidad y seguridad adecuadas, ya que no se almacena ningún dato en nuestros servidores.
          </li>
          <li>
            Es compatible con dispositivos. Puedes obtener fácilmente un <strong>RFC en línea</strong> tanto en tu teléfono
            como en tu ordenador.
          </li>
        </ul>
      </HomeContentSection>

      <HomeContentSection
        id="como-funciona"
        title="Cómo Funciona Nuestra Herramienta RFC:"
        image={IMAGES.comoFunciona}
        imageAlt="Cómo funciona la herramienta de generación de RFC según reglas SAT"
        sectionIndex={2}
        imagePosition="right"
      >
        <p>
          Se construye utilizando las reglas de formato del RFC establecidas por el SAT. El mismo algoritmo del SAT se
          aplica cuando se asigna un RFC a un nuevo <strong>contribuyente.</strong> Cuando usted proporciona información
          personal, esta se procesa mediante una lógica estandarizada. Esta identifica los caracteres correctos de lo
          siguiente:
        </p>
        <RfcInputFieldsGrid />
        <p>
          La fecha de nacimiento se agrega según el <strong>código tributario federal</strong> especificación. Todo el
          proceso de <strong>generación de RFC</strong> es automatizado. No se requiere ninguna acción manual por su
          parte, más allá de ingresar sus datos. El resultado que obtendrá es una clave alfanumérica definida por el
          SAT.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="caracteres-rfc"
        title="¿Cuántos Caracteres Tiene Un RFC?"
        image={IMAGES.caracteres}
        imageAlt="Estructura de caracteres de un RFC persona física y moral"
        sectionIndex={3}
        imagePosition="left"
      >
        <p>
          Para una <strong>persona física</strong>, el RFC tiene 13 caracteres. Normalmente incluía 4 letras de sus
          nombres, 6 dígitos de sus <strong>fecha de nacimiento</strong> y 3 caracteres de la homoclave (asignada por
          el SAT). Una entidad jurídica tiene 12 caracteres.
        </p>
        <h3>RFC Ejemplo:</h3>
        <p>
          Cuando introduces tu nombre o fecha de nacimiento, se genera un RFC que tiene este aspecto: BAOJ960814AB3.
        </p>
        <ul>
          <li>BAOJ = Letras del nombre o apellido de la persona.</li>
          <li>960814 = Fecha de nacimiento en formato AAMMDD</li>
          <li>AB3 = homoclave (diferente para cada persona)</li>
        </ul>
      </HomeContentSection>

      <HomeContentSection
        id="quien-puede-usar"
        title="¿Quién Puede Utilizar Esta Herramienta RFC?"
        image={IMAGES.quienPuedeUsar}
        imageAlt="Autónomos, empresarios, equipos de nómina y personas que registran su RFC por primera vez usando la calculadora RFC en México"
        imageTitle="¿Quién puede utilizar esta herramienta RFC? — CalcularRFC"
        sectionIndex={4}
        imagePosition="right"
        imageAspectRatio="3/4"
        ctaText="¡Encuentra tu RFC aquí!"
        ctaSectionId={SECTION_IDS.generator}
      >
        <p>
          El RFC es necesario en una amplia gama de situaciones en México. Ya sea que esté buscando su propio número de
          identificación fiscal, ya sea para la primera vez o para verificar la información de otra persona, nuestra
          calculadora cubre los escenarios más comunes.
        </p>
        <h3>Para El Registro Por Primera Vez:</h3>
        <p>
          Supongamos que quieres <strong>sacar mi RFC por primera vez sin ir al sat.</strong> Este generador de RFC te
          ayuda a obtener una estimación. Así, sabrás exactamente qué esperar antes de tu registro oficial.
        </p>
        <h3>Para Autónomos Y Profesionales Independientes:</h3>
        <p>
          Actividad profesional de <strong>honorarios</strong> Bajo un régimen fiscal, se necesita el RFC correcto. Un
          error implica el rechazo del CFDI.
        </p>
        <h3>Propietario De Una Pequeña Empresa:</h3>
        <p>
          Si quieres <strong>crear un RFC para</strong> una nueva entidad, nuestra calculadora puede ayudar. Además,
          puede realizar una RFC <strong>rfc persona fisica o rfc persona moral.</strong>
        </p>
        <h3>Equipos De Recursos Humanos Y Nóminas:</h3>
        <p>
          El proceso de nómina también requiere un registro RFC preciso para cada empleado. La verificación o
          validación por lotes antes del envío evita errores en la nómina.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="calculadora-vs-manual"
        title="¿Por Qué Usar Una Calculadora RFC En Lugar De Hacerlo Manualmente?"
        image={IMAGES.vsManual}
        imageAlt="Comparación entre cálculo manual de RFC y calculadora RFC"
        sectionIndex={5}
        imagePosition="left"
      >
        <p>
          Algunas personas intentan calcular un RFC manualmente utilizando guías SAT. Si bien es posible, el cálculo
          manual es lento y presenta mayores probabilidades de error. Aquí puede ver una comparación entre ambos métodos.
        </p>
        <ManualVsCalculatorCards />
        <p>
          El método manual tenía sentido antes de cualquier herramienta digital. Hoy en día, si necesitas saber{" "}
          <strong>cómo calcular un RFC</strong> de forma precisa y rápida, utilice un sistema automatizado.{" "}
          <strong>Calculadora de RFC</strong> es una elección inteligente.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="precision-rfc"
        title="Por Qué La Precisión Es Importante En La Generación De RFC"
        image={IMAGES.precision}
        imageAlt="Importancia de la precisión en la generación de RFC"
        sectionIndex={6}
        imagePosition="right"
        ctaText="¡Evite errores y genere el RFC de la manera correcta!"
        ctaSectionId={SECTION_IDS.generator}
      >
        <p>
          Un RFC incorrecto causa inconvenientes que requieren tiempo y esfuerzo para resolverse. Por eso es importante
          hacerlo bien a la primera.
        </p>
        <ul>
          <li>
            Un RFC incorrecto en la <strong>Constancia de situación fiscal</strong> se rechaza inmediatamente. Esto
            puede retrasar el procesamiento, la presentación o la comunicación de la factura en relación con el impuesto.
          </li>
          <li>
            Es posible que pierda el acceso a ciertos servicios si el RFC no coincide con el registro SAT. Esto le
            impide <strong>verificar el RFC con el CURP. Además</strong>, tendrás que afrontar retrasos en el registro
            con el IMSS.
          </li>
          <li>
            Bajo el <strong>régimen de incorporación fiscal</strong> Según las normas, las empresas que emitan una RFC
            con información incorrecta deberán pagar multas. Por lo tanto, debe ser precisa.
          </li>
          <li>
            A <strong>RFC genérico</strong> un <strong>SAT RFC genérico</strong> Se considera temporal. No es un
            registro permanente. Usar uno temporal durante mucho tiempo puede crear problemas con los registros
            oficiales. Además, se vuelve más difícil <strong>validar el RFC</strong> estado más tarde.
          </li>
        </ul>
      </HomeContentSection>
    </>
  );
}
