import type { ReactNode } from "react";

const personaFisicaFields: ReactNode[] = [
  <strong key="paterno">Apellido paterno</strong>,
  <strong key="materno">Apellido materno</strong>,
  <>
    Dado <strong>nombre</strong>
  </>,
];

const personaMoralFields: ReactNode[] = [
  <strong key="razon">razón social</strong>,
  <strong key="fecha">fecha de constitución</strong>,
  <strong key="moral">persona moral.</strong>,
];

const columnListClass =
  "list-none space-y-2.5 text-sm leading-relaxed text-text-secondary sm:text-base [&_li]:ml-0 [&_li]:list-none [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.55em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-emerald-500 [&_li]:before:content-[''] [&_strong]:font-semibold [&_strong]:text-text-primary";

function FieldColumn({ items }: { items: ReactNode[] }) {
  return (
    <ul className={columnListClass}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function RfcInputFieldsGrid() {
  return (
    <div className="grid w-fit max-w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-2">
      <FieldColumn items={personaFisicaFields} />
      <FieldColumn items={personaMoralFields} />
    </div>
  );
}
