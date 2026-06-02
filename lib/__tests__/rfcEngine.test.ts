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

  it("uses second given name when first is JOSE/MARIA style", () => {
    const result = generateRfc({
      apellidoPaterno: "Hernandez",
      apellidoMaterno: "Lopez",
      nombre: "Jose Antonio",
      fechaNacimiento: "1988-01-02",
    });
    expect(result.base[3]).toBe("A");
  });

  it("handles missing maternal surname and short paternal surname", () => {
    const result = generateRfc({
      apellidoPaterno: "Ek",
      apellidoMaterno: "",
      nombre: "Maria Fernanda",
      fechaNacimiento: "1995-12-10",
    });
    expect(result.base[0]).toBe("E");
    expect(result.base[1]).toBe("X");
    expect(result.base[2]).toBe("F");
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
