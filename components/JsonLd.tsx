import Script from "next/script";

type JsonLdProps = {
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <Script id={id} type="application/ld+json">
      {JSON.stringify(data)}
    </Script>
  );
}
