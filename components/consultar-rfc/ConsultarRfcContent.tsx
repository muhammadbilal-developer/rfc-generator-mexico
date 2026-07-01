import Link from "next/link";
import { HomeContentSection } from "../HomeContentSection";
import { ROUTES } from "@/lib/routes";

const IMAGES = {
  queEs: "/images/consultar-rfc/que-es-rfc-importancia.webp",
  estructura: "/images/consultar-rfc/como-se-estructura-rfc.webp",
  calcular: "/images/consultar-rfc/como-calcular-rfc.webp",
  curp: "/images/consultar-rfc/sacar-rfc-curp.webp",
  obtenerSat: "/images/consultar-rfc/como-obtener-rfc-sat.webp",
  quienNecesita: "/images/consultar-rfc/quien-necesita-rfc.webp",
  tipos: "/images/consultar-rfc/tipos-rfc.webp",
  imprimir: "/images/consultar-rfc/imprimir-descargar-rfc.webp",
  validar: "/images/consultar-rfc/validar-rfc.webp",
  comparacion: "/images/consultar-rfc/rfc-curp-nss.webp",
  errores: "/images/consultar-rfc/errores-comunes-rfc.webp",
} as const;

export function ConsultarRfcContent() {
  return (
    <>
      <HomeContentSection
        id="que-es-rfc-importancia"
        title="¿Qué Es El RFC Y Por Qué Es Importante En México?"
        image={IMAGES.queEs}
        imageAlt="Qué es el RFC y por qué es importante en México"
        sectionIndex={0}
        imagePosition="right"
        ctaSectionId="generator"
      >
        <p>
          RFC son las siglas de Registro Federal de Contribuyentes. El SAT asigna este número a cada persona y empresa que
          genera ingresos en el país. Es una identificación única, y ningún contribuyente comparte el mismo RFC.
        </p>
        <p>
          El SAT utiliza tu <strong>RFC México</strong> código para registrar todos tus ingresos y gastos a efectos
          fiscales. Cada factura debe incluir un código RFC válido; de lo contrario, el documento no se considera
          legalmente válido.
        </p>
        <p>
          ¿Por qué las empresas y los particulares{" "}
          <Link href={ROUTES.home} className="font-medium text-emerald-700 underline-offset-2 hover:underline">
            calcular RFC?
          </Link>{" "}
          Esta es la situación:
        </p>
        <ul>
          <li>
            Sin un RFC activo, los trabajadores autónomos y las empresas no pueden emitir ni recibir legalmente una
            factura CFDI válida. Cualquier factura emitida sin un RFC registrado ante el SAT será rechazada
            automáticamente.
          </li>
          <li>Muchos bancos exigen una tarjeta RFC para cuentas, préstamos y verificación de identidad.</li>
          <li>El seguro médico (IMSS) o la pensión depende de su RFC.</li>
          <li>
            Se necesita un RFC válido para presentar declaraciones de impuestos anuales con <strong>SAT.</strong>
          </li>
        </ul>
      </HomeContentSection>

      <HomeContentSection
        id="como-se-estructura-rfc"
        title="Cómo Se Estructura El RFC"
        image={IMAGES.estructura}
        imageAlt="Cómo se estructura el RFC en México"
        sectionIndex={1}
        imagePosition="left"
        ctaSectionId="generator"
      >
        <p>
          El RFC de una persona física tiene 13 caracteres. Consta de tres partes distintas. La primera es el segmento
          del nombre, la segunda las fecha de nacimiento y la tercera son 3 caracteres alfanuméricos únicos
          proporcionados por el SAT. A continuación, se ofrece una explicación más detallada del cálculo:
        </p>
        <h3>Ejemplo:</h3>
        <p>
          Supongamos que el nombre es López Hernández Juan, nacido el 14/04/1980 ; la estructura RFC debería ser así:
        </p>
        <h3>Segmento De Caracteres 1-4</h3>
        <ol className="ml-5 list-decimal space-y-1">
          <li>Primera letra del apellido paterno: L</li>
          <li>Primera vocal interna del apellido paterno: O</li>
          <li>Primeras letras del apellido materno: H</li>
          <li>Primera letra del nombre: J</li>
        </ol>
        <h3>Caracteres 5-10, Fecha De Nacimiento (AAMMDD)</h3>
        <ul>
          <li>Año: 80</li>
          <li>Mes: 04</li>
          <li>Días: 14</li>
        </ul>
        <h3>Caracteres 11-13</h3>
        <p>
          Supongamos que es XX0. Entonces, el{" "}
          <Link
            href={ROUTES.rfcConHomoclave}
            className="font-semibold text-emerald-700 underline-offset-2 hover:underline"
          >
            RFC con homoclave
          </Link>{" "}
          es LOHJ800414XX0. Para las entidades legales, un RFC tiene 12 caracteres: 3 letras del nombre de la empresa,
          la fecha de fundación en formato AA/MM/DD y un homoclave de 3 caracteres.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="como-calcular-rfc"
        title="Cómo Calcular RFC"
        image={IMAGES.calcular}
        imageAlt="Cómo calcular RFC según reglas SAT"
        sectionIndex={2}
        imagePosition="right"
        ctaSectionId="generator"
      >
        <p>
          Nuestra calculadora sigue la misma regla publicada por el SAT; si lo haces manualmente, existe riesgo de error,
          especialmente en caracteres y nombres. Por lo tanto, nuestra <strong>RFC gratis l</strong>a calculadora, es la
          opción más segura.
        </p>
        <p>En un manual, debes seguir estos pasos:</p>
        <ul>
          <li>
            Toma la primera letra y la primera vocal interna de tu apellido paterno, luego la primera letra de tu apellido
            materno. Después, la primera letra de tu nombre. Es importante recordar que si el nombre empieza con
            &quot;María&quot; o &quot;José&quot; en un nombre compuesto, se usa el segundo nombre.
          </li>
          <li>
            SAT verifica las cuatro letras resultantes de una lista restringida. Si la letra está presente, la segunda
            letra se reemplaza por una X. Nuestra calculadora también aplica este filtro.
          </li>
          <li>
            Utilice el formato AAMMDD. Recuerde que las fechas siempre utilizan dos dígitos para el año, el mes y el día,
            incluyendo los ceros.
          </li>
          <li>
            El homoclave de 3 caracteres es generado por SAT utilizando su sistema interno, por lo que no se puede
            calcular con exactitud.
          </li>
        </ul>
        <h3>Reglas De Cálculo Comunes Que Debes Conocer:</h3>
        <ul>
          <li>Las vocales acentuadas (á, é, í, ó, ú) se tratan como vocales normales.</li>
          <li>En la generación de RFC, N se suele convertir en X.</li>
          <li>En los apellidos compuestos, ignora los artículos como de, del, la, los,</li>
          <li>Si solo se menciona un apellido, los apellidos que falten se sustituirán por una X.</li>
        </ul>
        <p>
          Utilice nuestro <strong>RFC en línea</strong> calculadora que cubre todos estos aspectos automáticamente.
          Simplemente ingrese su nombre legal tal como aparece en su certificado de nacimiento y vea los resultados.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="sacar-rfc-curp"
        title="Sacar RFC Con CURP:"
        image={IMAGES.curp}
        imageAlt="Sacar RFC con CURP en México"
        sectionIndex={3}
        imagePosition="left"
        ctaSectionId="generator"
      >
        <p>
          El <strong>RFC y CURP están</strong> estrechamente vinculados y comparten la información. Ambos codifican tu
          nombre y fecha de nacimiento. Conocer uno te ayuda a validar <strong>RFC con CURP</strong> con mayor
          precisión.
        </p>
        <p>
          Los primeros caracteres del CURP (las letras del nombre y la fecha de nacimiento) coinciden con la misma
          lógica que los primeros 10 caracteres del RFC. Si tienes CURP, es más fácil calcular el RFC sin introducir
          cada campo por separado
        </p>
        <h3>¿Cuándo Se Debe Utilizar El Método Base CURP?</h3>
        <ul>
          <li>Cuando no estás seguro de la ortografía de tu nombre legal</li>
          <li>
            Debes verificar tu código RFC con CURP. Ambos códigos coinciden con tus registros oficiales.
          </li>
          <li>Al ayudar a un tercero a ver su RFC usando una tarjeta CURP.</li>
        </ul>
        <p>
          Para <strong>consultar el RFC con CURP,</strong>haga clic en la pestaña &quot;Por CURP&quot;. Pegue su CURP de
          18 caracteres y la calculadora extraerá su RFC inmediatamente. También puede{" "}
          <strong>buscar en el RFC con CURP</strong>, utilice el portal oficial de SAT si necesita el RFC registrado
          completo.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="como-obtener-rfc-sat"
        title="Cómo Obtener RFC Del SAT"
        image={IMAGES.obtenerSat}
        imageAlt="Cómo obtener RFC del SAT"
        sectionIndex={4}
        imagePosition="right"
        ctaSectionId="generator"
      >
        <p>
          La calculadora te ayuda a estimar y <strong>sacar RFC en línea</strong>. Pero el RFC oficial que obtuviste del
          SAT. Así es como funciona el proceso en el mundo en línea o presencial.
        </p>
        <h3>Inscripción A Través Del Portal En Línea:</h3>
        <p>
          Visite el sitio web: sat.gob.mx y diríjase a la sección de registro. A partir de los datos individuales, el
          portal en línea gestiona la preinscripción mediante CURP.
        </p>
        <h3>Si Es Necesario, Visite Una Oficina De SAT En Persona:</h3>
        <p>
          Si la inscripción requiere asistencia presencial para empresas o ciudadanos extranjeros, solicite una cita en
          la oficina de SAT más cercana.
        </p>
        <h3>Documentos Necesarios Para Procesar La RFC</h3>
        <p>
          Para una <strong>persona física,</strong>Estos documentos son obligatorios.
        </p>
        <ul>
          <li>Certificado original</li>
          <li>Pasaporte válido.</li>
          <li>Impresión de CURP</li>
          <li>Comprobante de domicilio</li>
          <li>Documento de identidad oficial con fotografía.</li>
          <li>Los ciudadanos extranjeros necesitan documentos de inmigración.</li>
        </ul>
        <h3>Reciba Su RFC Y Certificado De Situación Fiscal</h3>
        <p>
          Después <strong>inscripción al RFC</strong>, el SAT emite su certificación tributaria, un PDF de su RFC activo,
          registrado <strong>régimen fiscal,</strong>y domicilio registrado. Puede que lo necesite para trabajos, bancos
          o clientes.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="quien-necesita-rfc"
        title="¿Quién Necesita Un RFC En México?"
        image={IMAGES.quienNecesita}
        imageAlt="Quién necesita un RFC en México"
        sectionIndex={5}
        imagePosition="left"
        ctaSectionId="generator"
      >
        <p>
          La regla general es que si obtienes ingresos, entonces necesitas un RFC. Aquí tienes algunas entidades que
          necesitan un RFC.
        </p>
        <ul>
          <li>
            Los empleados asalariados lo necesitan porque aparece en cada nómina y recibo fiscal.
          </li>
          <li>
            Es necesario para los autónomos y trabajadores por cuenta propia. Sin él, los clientes no pueden reclamar el
            gasto como deducción fiscal.
          </li>
          <li>
            Todo propietario de negocio debe obtener un RFC para persona moral, con su propia homoclave única asignada por
            el SAT.
          </li>
          <li>Si recibes una beca o trabajas a tiempo parcial, es posible que tengas que registrarte.</li>
          <li>
            Los extranjeros con visa de trabajo válida e ingresos obtenidos en México deben registrarse para obtener un
            RFC.
          </li>
          <li>
            Si usted es beneficiario de una pensión, SAT requiere un RFC activo para procesar los pagos correctamente.
          </li>
        </ul>
      </HomeContentSection>

      <HomeContentSection
        id="tipos-rfc"
        title="Explicación De Los Tipos De RFC"
        image={IMAGES.tipos}
        imageAlt="Explicación de los tipos de RFC en México"
        sectionIndex={6}
        imagePosition="right"
        ctaText="¿Cuál es mi RFC? ¡Calcúlelo aquí!"
        ctaSectionId="generator"
      >
        <p>
          En México existen tres tipos principales de RFC. Cada uno tiene un propósito diferente, el cual se explica
          aquí.
        </p>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Persona natural</td>
              <td>
                Tiene 13 caracteres. Abarca a trabajadores autónomos, empleados y profesionales independientes.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Persona moral</strong>
              </td>
              <td>Está destinado a empresas y negocios y tiene 12 caracteres.</td>
            </tr>
            <tr>
              <td>RFC genérico</td>
              <td>
                Estos son los RFC especiales utilizados en la factura: XAXX010101000 <strong>→</strong> cuando el cliente
                es desconocido XEXX010101000 <strong>→</strong> cuando el cliente es una persona extranjera. No son
                identificaciones reales, solo sirven como marcadores de posición en CFDI.
              </td>
            </tr>
          </tbody>
        </table>
      </HomeContentSection>

      <HomeContentSection
        id="imprimir-descargar-rfc"
        title="Cómo Imprimir O Descargar Su RFC"
        image={IMAGES.imprimir}
        imageAlt="Cómo imprimir o descargar su RFC"
        sectionIndex={7}
        imagePosition="left"
        ctaSectionId="generator"
      >
        <p>
          Una vez que hayas terminado con el registro, podrás <strong>imprimir o</strong>{" "}
          <strong>descargar RFC</strong> y credenciales a través de la <strong>portal del SAT</strong> En cualquier
          momento. Aquí tienes los sencillos pasos a seguir para imprimir y descargar:
        </p>
        <ul>
          <li>
            Acceda al sitio web e inicie sesión con su RFC y contraseña. También puede usar su firma electrónica FIEL.
          </li>
          <li>
            Luego, diríjase a la pestaña de procedimiento y haga clic en &quot;Obtener certificado fiscal&quot;. Este es
            su comprobante oficial de RFC para empleadores y para fines de facturación.
          </li>
          <li>El SAT genera un certificado descargable e imprimible de inmediato.</li>
          <li>
            También puedes visitar cualquier oficina del SAT para que te lo impriman con un sello oficial sin costo
            alguno.
          </li>
        </ul>
      </HomeContentSection>

      <HomeContentSection
        id="validar-rfc"
        title="Validar RFC Cómo Comprobar Si Es Correcto O Activo"
        image={IMAGES.validar}
        imageAlt="Validar RFC y comprobar si es correcto o activo"
        sectionIndex={8}
        imagePosition="right"
        ctaSectionId="generator"
      >
        <p>
          &apos;Consultar RFC &apos;&apos; significa que el RFC está escrito de acuerdo con la regla SAT; lo verifica
        </p>
        <ul>
          <li>El número correcto de caracteres con la ubicación correcta</li>
          <li>Una fecha de nacimiento válida o una fecha de registro de la empresa.</li>
        </ul>
        <p>
          <strong>Verificar RFC</strong> El estado de activo o inactivo es un proceso distinto. Aunque una RFC tenga el
          formato correcto, puede que no esté registrada en SAT. Para confirmarlo, debe acudir a la oficina para su
          verificación.
        </p>
      </HomeContentSection>

      <HomeContentSection
        id="rfc-curp-nss"
        title="RFC Vs. CURP Vs. NSS"
        image={IMAGES.comparacion}
        imageAlt="Comparación entre RFC, CURP y NSS"
        sectionIndex={9}
        imagePosition="left"
        ctaSectionId="generator"
      >
        <p>En México se utilizan comúnmente tres códigos. A continuación, se detallan sus diferencias.</p>
        <div className="table-scroll-wrap w-full max-w-full">
          <table>
            <thead>
              <tr>
                <th>Característica</th>
                <th>RFC</th>
                <th>CURP</th>
                <th>NSS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nombre completo</td>
                <td>Registro Federal de Contribuyentes</td>
                <td>
                  <strong>Clave Única de Registro de Población</strong>
                </td>
                <td>Número de seguro social</td>
              </tr>
              <tr>
                <td>Problemas por</td>
                <td>SAT</td>
                <td>SEGOB</td>
                <td>imss</td>
              </tr>
              <tr>
                <td>Longitud</td>
                <td>13 caracteres para individuos 12 para empresas</td>
                <td>18 caracteres</td>
                <td>11 dígitos</td>
              </tr>
              <tr>
                <td>Objetivo</td>
                <td>Facturas, devoluciones, identificación fiscal</td>
                <td>identificación, votación</td>
                <td>atención médica, pensión,</td>
              </tr>
              <tr>
                <td>¿Quién lo necesita?</td>
                <td>Cualquiera que gane</td>
                <td>Todos los residentes permanentes de México</td>
                <td>Empleados asalariados o trabajadores registrados en el IMSS</td>
              </tr>
              <tr>
                <td>Dónde obtener</td>
                <td>Portal u oficina del SAT.</td>
                <td>Registro civil o en línea de RENAPO</td>
                <td>Portal digital IMSS o registro de empleadores</td>
              </tr>
            </tbody>
          </table>
        </div>
      </HomeContentSection>

      <HomeContentSection
        id="errores-comunes-rfc"
        title="Errores Comunes Al Calcular RFC"
        image={IMAGES.errores}
        imageAlt="Errores comunes al calcular RFC"
        sectionIndex={10}
        imagePosition="right"
        ctaSectionId="generator"
      >
        <p>
          Incluso los errores más pequeños pueden provocar el rechazo de la nómina o de la factura. Estos son los
          problemas más frecuentes con los que se encuentran las personas:
        </p>
        <ul>
          <li>Utilizar el orden de nombres incorrecto</li>
          <li>Usar apodos en lugar de tu nombre legal</li>
          <li>Ingresar una fecha de nacimiento incorrecta</li>
          <li>Ignorar las reglas especiales de nombres</li>
        </ul>
        <p>
          Utilice nuestro <strong>consultar RFC</strong> Para eliminar estos riesgos, aplica las normas del SAT y señala
          cualquier problema antes de presentarlo a la autoridad tributaria.
        </p>
      </HomeContentSection>
    </>
  );
}
