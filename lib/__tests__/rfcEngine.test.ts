import { describe, expect, it } from "vitest";
import { generateRfc } from "../rfcEngine";

describe("generateRfc", () => {
  it("generates a 13-char RFC and breakdown", () => {
    const result = generateRfc({
      apellidoPaterno: "Gomez",
      apellidoMaterno: "Lopez",
      nombre: "Juan Carlos",
      fechaNacimiento: "1990-05-24",
    });

    expect(result.rfc).toHaveLength(13);
    expect(result.base).toHaveLength(4);
    expect(result.fecha).toBe("900524");
    expect(result.homoclave).toHaveLength(2);
    expect(result.dv).toHaveLength(1);
  });

  it("matches SAT example: Juan Garcia Lopez, 15 ene 1990 → GALJ900115", () => {
    const result = generateRfc({
      apellidoPaterno: "Garcia",
      apellidoMaterno: "Lopez",
      nombre: "Juan",
      fechaNacimiento: "1990-01-15",
    });
    expect(result.base).toBe("GALJ");
    expect(result.fecha).toBe("900115");
  });

  it("matches SAT example: Juan Barrios Fernandez, 13 dic 1970 → BAFJ701213", () => {
    const result = generateRfc({
      apellidoPaterno: "Barrios",
      apellidoMaterno: "Fernandez",
      nombre: "Juan",
      fechaNacimiento: "1970-12-13",
    });
    expect(result.base).toBe("BAFJ");
    expect(result.fecha).toBe("701213");
  });

  it("uses second given name when first is JOSE/MARIA (REGLA 6ª)", () => {
    const result = generateRfc({
      apellidoPaterno: "Hernandez",
      apellidoMaterno: "Lopez",
      nombre: "Jose Antonio",
      fechaNacimiento: "1988-01-02",
    });
    expect(result.base[3]).toBe("A");
  });

  it("handles single surname (REGLA 7ª): Martinez + Juan → MAJU", () => {
    const result = generateRfc({
      apellidoPaterno: "Martinez",
      apellidoMaterno: "",
      nombre: "Juan",
      fechaNacimiento: "1942-01-16",
    });
    expect(result.base).toBe("MAJU");
    expect(result.fecha).toBe("420116");
  });

  it("handles short paternal surname with maternal (REGLA 4ª): Ek + Rivera + Ernesto → ERER", () => {
    const result = generateRfc({
      apellidoPaterno: "Ek",
      apellidoMaterno: "Rivera",
      nombre: "Ernesto",
      fechaNacimiento: "1907-11-20",
    });
    expect(result.base).toBe("ERER");
  });

  it("handles compound paternal surname (REGLA 5ª): San Martin → SADD", () => {
    const result = generateRfc({
      apellidoPaterno: "San Martin",
      apellidoMaterno: "Davalos",
      nombre: "Dolores",
      fechaNacimiento: "1812-08-18",
    });
    expect(result.base).toBe("SADD");
  });

  it("handles single surname with MARIA compound name (REGLA 7ª)", () => {
    const result = generateRfc({
      apellidoPaterno: "Lopez",
      apellidoMaterno: "",
      nombre: "Maria Fernanda",
      fechaNacimiento: "1995-12-10",
    });
    expect(result.base).toBe("LOFE");
  });

  it("throws for future birth date", () => {
    expect(() =>
      generateRfc({
        apellidoPaterno: "Diaz",
        apellidoMaterno: "Mora",
        nombre: "Luis",
        fechaNacimiento: "2999-01-01",
      }),
    ).toThrow();
  });
});
