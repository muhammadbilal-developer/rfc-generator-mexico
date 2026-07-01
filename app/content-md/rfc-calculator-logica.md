# Lógica de la calculadora RFC — CalcularRFC

Documento interno que describe el análisis de herramientas RFC en México, los campos de entrada adoptados, la lógica implementada, el motivo de cada decisión y las fuentes oficiales.

---

## 1. Alcance

Esta calculadora genera el **RFC de persona física con homoclave y dígito verificador** (13 caracteres) a partir de:

| Campo interno (`RfcInput`) | Etiqueta en formulario | Obligatorio |
| --- | --- | --- |
| `apellidoPaterno` | Apellido paterno | Sí |
| `apellidoMaterno` | Apellido materno | No |
| `nombre` | Nombre(s) | Sí |
| `fechaNacimiento` | Fecha de nacimiento (`YYYY-MM-DD`) | Sí |

**Páginas que usan la misma lógica** (componente compartido `RfcGeneratorCard` + motor `lib/rfcEngine.ts`):

1. **Inicio** (`/`) — hero derecho, modo compacto  
2. **Consultar RFC** (`/consultar-rfc`) — sección calculadora  
3. **RFC con homoclave** (`/rfc-con-homoclave`) — hero derecho, modo compacto  

No hay tres motores distintos: un solo motor y un solo formulario garantizan resultados idénticos en las tres rutas.

---

## 2. Análisis de herramientas RFC en México (.mx y sitios de referencia)

Se revisaron calculadoras públicas usadas por contribuyentes y contadores en México para comparar **campos de entrada**, **estructura del RFC** y **disclaimers**.

| Herramienta | URL | Campos de entrada | Observaciones |
| --- | --- | --- | --- |
| CalculaMX | calculamx.com/generador-rfc | Nombre(s), Apellido paterno, Apellido materno (opcional), Fecha de nacimiento | Algoritmo SAT público; ejemplo GALJ900115 para Juan García López |
| Mi RFC | mi-rfc.com.mx/consulta-rfc-homoclave | Nombre(s), Apellido paterno, Segundo apellido (opcional), Fecha de nacimiento | Ignora José/María como primer nombre; homoclave base 34 + módulo 11 |
| Siempre Contable | siemprecontable.net/herramientas/calculadora-rfc | Modo CURP + nombre completo, o apellidos + nombre + fecha | Confirma que la homoclave depende del nombre completo, no solo de la CURP |
| RDC Contadores | rdcontadores.com/herramientas/rfc | Apellido paterno, Apellido materno, Nombre(s), Fecha de nacimiento | 100 % en navegador; aviso de homonimia |
| TaxDown | taxdown.com.mx/rfc/como-sacar-rfc-homoclave | Nombre(s), Apellido paterno, Apellido materno, Fecha (DD/MM/AAAA) | Misma estructura de 13 caracteres |
| CifrasNet | cifrasnet.com/tools/calculadora-rfc | Mismos cuatro campos básicos | Cita Anexo 10 RMF, lista negra, módulo 11 |

### Conclusión del análisis de campos

El **estándar de facto** para persona física sin CURP es exactamente **cuatro campos**:

1. **Apellido paterno** (obligatorio)  
2. **Apellido materno** (opcional — muchos mexicanos solo tienen un apellido en el acta o no lo usan en trámites)  
3. **Nombre(s)** (obligatorio — puede incluir nombres compuestos)  
4. **Fecha de nacimiento** (obligatorio — formato AAMMDD en el RFC)

**No se añadieron** campos extra (CURP, sexo, entidad federativa, lugar de nacimiento) porque:

- Las tres páginas del sitio son calculadoras **por nombre y fecha**, no consultas CURP/SAT.  
- Herramientas como Villanett o Siempre Contable ofrecen modo CURP como **pestaña alternativa**, no como reemplazo del formulario básico.  
- Añadir campos cambiaría la UI (explícitamente excluido por requisito del proyecto).

### Etiquetas adoptadas

Se alinearon las etiquetas del formulario con el español usado en calculamx.com, mi-rfc.com.mx y rdcontadores.com:

- `Apellido paterno` — Obligatorio  
- `Apellido materno` — Opcional si solo tiene un apellido  
- `Nombre(s)` — Ej: Juan, María de los Ángeles  
- `Fecha de nacimiento` — Obligatorio  

Los **nombres internos** (`apellidoPaterno`, `apellidoMaterno`, `nombre`, `fechaNacimiento`) se mantienen en español camelCase por coherencia con el código y el esquema Zod.

---

## 3. Estructura del RFC (persona física)

| Posiciones | Contenido | Ejemplo (Juan García López, 15/01/1990) |
| --- | --- | --- |
| 1–4 | Iniciales del nombre (reglas SAT) | `GALJ` |
| 5–10 | Fecha de nacimiento AAMMDD | `900115` |
| 11–12 | Homoclave (base 34) | calculada |
| 13 | Dígito verificador (módulo 11) | calculado |

**RFC completo de ejemplo (base + fecha):** `GALJ900115` + homoclave + DV.

---

## 4. Lógica implementada (`lib/rfcEngine.ts`)

### 4.1 Normalización de texto (`cleanString`, `removeParticles`)

**Qué hace:**

- Convierte a mayúsculas.  
- Preserva **Ñ** (no la descompone en N + tilde).  
- Elimina acentos (Á → A, É → E, etc.).  
- Colapsa espacios múltiples.

**Por qué:** El SAT trabaja con caracteres sin acento en la clave alfabética; la Ñ tiene valor propio en las tablas del Anexo I y III.

**Partículas ignoradas** (`lib/constants.ts` → `PARTICLES`): DE, LA, LAS, LOS, Y, DEL, MC, MAC, VON, VAN, MI, SAN, SANTA.

**Fuente:** REGLA 8ª personas físicas — artículos, preposiciones y conjunciones no integran la clave.

---

### 4.2 Conformación de las 4 letras (`buildBase`)

| Regla SAT | Condición | Lógica en código |
| --- | --- | --- |
| **REGLA 1ª** | Apellido paterno > 2 letras y hay apellido materno | 1ª letra paterno + 1ª vocal interna del paterno + 1ª letra materno + 1ª letra del nombre efectivo |
| **REGLA 4ª** | Apellido paterno de 1–2 letras (con materno) | 1ª paterno + 1ª materno + 1ª nombre + 2ª letra del nombre |
| **REGLA 5ª** | Apellido compuesto (ej. San Martín) | Se usa la **primera palabra** del apellido tal como fue capturado (`firstSurnameWord` sobre texto normalizado, sin quitar SAN/SANTA del apellido compuesto) |
| **REGLA 6ª** | Nombre compuesto; primer token JOSE/MARIA | Se usa la 1ª letra del **segundo** nombre (`effectiveGivenName`) |
| **REGLA 7ª** | Sin apellido materno (un solo apellido) | 2 letras del apellido + 2 letras del nombre |
| **REGLA 9ª** | Palabra inconveniente en las 4 letras | Última letra sustituida por `X` (`INCONVENIENT_WORDS`) |

**Nombres frecuentes ignorados como primer token:** JOSE, MARIA, MA, MA., J, J. (`COMMON_FIRST_NAMES`).

**Ejemplos verificados en tests:**

- Juan Barrios Fernández → `BAFJ`  
- Juan García López → `GALJ`  
- José Antonio … → 4ª letra `A` (no `J`)  
- Juan Martínez (sin materno) → `MAJU`  
- Ernesto Ek Rivera → `ERER`  
- Dolores San Martín Dávalos → `SADD`  

---

### 4.3 Fecha de nacimiento (`formatDate`)

**Formato:** `AAMMDD` — dos dígitos de año, mes y día con cero a la izquierda si aplica.

**Validaciones:**

- Fecha inválida → error.  
- Fecha futura → error.

**Fuente:** REGLA 2ª personas físicas del documento SAT.

---

### 4.4 Homoclave (`computeHomoclave`)

**Procedimiento (Anexo I del algoritmo SAT, folio IFAI 0610100135506):**

1. Nombre completo para homoclave: `apellidoPaterno + apellidoMaterno + nombre` (orden usado en el ejemplo oficial: *Gómez Díaz Emma*).  
2. Cada carácter se mapea a dos dígitos (`ANEXO_I_MAP`).  
3. Se antepone `0` al inicio de la cadena numérica.  
4. Suma de productos: para cada par consecutivo `(d[i], d[i+1])` → `parseInt(d[i]+d[i+1]) * d[i+1]`.  
5. `residuo = suma % 1000`.  
6. Dos caracteres: `HOMO_ALPHABET[floor(residuo/34)]` + `HOMO_ALPHABET[residuo % 34]`.  
7. Alfabeto base 34: `123456789ABCDEFGHIJKLMNPQRSTUVWXYZ` (sin 0, I, O según especificación).

**Por qué el nombre completo importa:** La homoclave distingue homonimias (misma base de 10 caracteres). La CURP **no** almacena el nombre completo necesario para este paso.

---

### 4.5 Dígito verificador (`computeDv`)

**Procedimiento (Anexo III):**

1. Se toman los 12 caracteres: `base (4) + fecha (6) + homoclave (2)`.  
2. Cada carácter tiene un valor (`ANEXO_III_MAP`).  
3. Suma ponderada: `valor * (13 - posición)`, posición 0-indexed de izquierda a derecha.  
4. `residuo = suma % 11`.  
5. Si residuo = 0 → DV = `0`.  
6. Si no → DV = `11 - residuo`; si resulta 10 → `A`.

**Fuente:** Sección VI del documento SAT *Algoritmo para generar el RFC con homoclave*.

---

## 5. Validación del formulario (`lib/schema.ts` → `rfcFormSchema`)

| Campo | Regla Zod | Mensaje (español) |
| --- | --- | --- |
| `apellidoPaterno` | `min(1)` | El apellido paterno es obligatorio. |
| `apellidoMaterno` | opcional | — |
| `nombre` | `min(1)` | El nombre es obligatorio. |
| `fechaNacimiento` | fecha válida, no futura | La fecha de nacimiento debe ser válida y no puede ser futura. |

---

## 6. Limitaciones y disclaimers (alineados con el mercado)

Todas las herramientas analizadas advierten lo mismo:

1. El resultado es una **estimación** basada en el algoritmo público del SAT.  
2. El RFC **oficial** solo lo asigna el SAT al inscribirse; la homoclave definitiva puede variar por **homonimia** (~1 % de casos según mi-rfc.com.mx).  
3. Para trámites fiscales válidos se requiere la **Constancia de Situación Fiscal** en sat.gob.mx.  
4. El cálculo se ejecuta **en el navegador**; no se envían datos al servidor.

CalcularRFC mantiene estos mismos límites en textos legales y en la UI del resultado.

---

## 7. Fuentes oficiales y técnicas

| Fuente | Referencia | Uso en el proyecto |
| --- | --- | --- |
| **SAT / SHCP** | *Algoritmo para generar el RFC con homoclave para personas físicas y morales* — folio **0610100135506** (18/10/2006) | Reglas 1ª–10ª, homoclave, dígito verificador, tablas Anexo I y III |
| **Resolución Miscelánea Fiscal** | Anexo 10 (citado por calculamx.com, cifrasnet.com) | Referencia normativa del algoritmo público |
| **Código Fiscal de la Federación** | Art. 27 | Obligatoriedad del RFC |
| **Reglamento del CFF** | Art. 22 | Formación del RFC |
| Implementaciones de referencia | [vestfi/calculate-rfc](https://github.com/vestfi/calculate-rfc), [GerardoLucero/calcula-rfc](https://github.com/GerardoLucero/calcula-rfc) | Contraste de reglas y casos de prueba |
| Herramientas web MX | calculamx.com, mi-rfc.com.mx, rdcontadores.com, siemprecontable.net | Campos de entrada, UX de etiquetas, disclaimers |

---

## 8. Archivos del código relacionados

| Archivo | Responsabilidad |
| --- | --- |
| `lib/rfcEngine.ts` | Motor de generación RFC |
| `lib/constants.ts` | Partículas, nombres comunes, palabras inconvenientes, tablas Anexo I/III |
| `lib/schema.ts` | Validación Zod del formulario |
| `components/RfcGeneratorCard.tsx` | Formulario + resultado (campos y etiquetas) |
| `components/RfcGenerator.tsx` | Sección calculadora en página Consultar RFC |
| `components/Hero.tsx` | Calculadora compacta en inicio |
| `components/rfc-con-homoclave/RfcConHomoclaveHero.tsx` | Calculadora compacta en RFC con homoclave |
| `lib/__tests__/rfcEngine.test.ts` | Pruebas unitarias con ejemplos SAT |

---

## 9. Cambios realizados en esta revisión

1. **Etiquetas de campos** alineadas al español estándar de calculadoras mexicanas.  
2. **Mensajes de validación** traducidos al español.  
3. **Corrección REGLA 7ª:** un solo apellido → 2+2 letras (antes se aplicaba incorrectamente la regla estándar con `X` en materno vacío).  
4. **Corrección REGLA 5ª:** apellidos compuestos usan la primera palabra (`San Martín` → `SAN`, no `S` de toda la cadena tras partículas).  
5. **Correo de contacto** en `/contacto`: `icalcularrfc.mx@gmail.com`.  
6. **Tests ampliados** con ejemplos del documento SAT y de calculadoras de referencia.

---

*Última actualización: julio 2026 — CalcularRFC (icalcularrfc.mx)*
