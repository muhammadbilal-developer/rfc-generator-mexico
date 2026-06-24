export const rfcConHomoclaveFaqItems = [
  {
    q: "¿Pueden dos personas tener el mismo RFC?¿sin homoclave?",
    a: "Sí, absolutamente. Esto se debe a que los nombres o las fechas de nacimiento pueden ser similares. Un RFC sin un homoclave está incompleto y puede duplicarse. Con un homoclave, se vuelve único.",
  },
  {
    q: "¿Qué es la homoclave RFC?",
    a: "El código RFC consta de 13 caracteres alfanuméricos para personas físicas. El SAT añade al final un código de 3 caracteres, lo que hace que su RFC sea único. Es necesario para todas las gestiones tributarias oficiales en México.",
  },
  {
    q: "¿Cómo se calcula la homoclave?",
    a: "SAT utilizó el algoritmo interno para calcular el código homoclave. Normalmente toma el RFC base (10 caracteres) y produce una salida de tres caracteres.",
  },
  {
    q: "¿Dónde puedo encontrar mi RFC con Homoclave?",
    a: "La forma más sencilla de encontrarlo es descargando el certificado de situación fiscal desde el sitio web de la SAT. Inicia sesión con tu RFC o contraseña y descargue el PDF. Su RFC completo aparece de forma destacada en el documento.",
  },
  {
    q: "¿Puedo comprobar mi RFC con mi CURP?",
    a: "Sí. El portal SAT te permite comprobarlo. RFC con CURP. Inserta directamente tu CURP de 18 caracteres y el sistema te mostrará tu RFC completo. Solo funciona para particulares, ya que las empresas no tienen CURP.",
  },
  {
    q: "¿Para qué se utiliza el RFC con la homoclave?",
    a: "Se utiliza para diversos fines, como la emisión de recibos de nómina para los empleados. Además, los bancos lo requieren para abrir cuentas. El gobierno lo utiliza para procesar las declaraciones de impuestos.",
  },
] as const;
