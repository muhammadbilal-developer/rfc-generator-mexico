import { describe, expect, it } from "vitest";
import { parseCurp } from "../curpParser";
import { validateRfc } from "../rfcValidator";

describe("validateRfc", () => {
  it("accepts a valid persona física RFC with correct DV", () => {
    const result = validateRfc("GALJ900115I76");
    expect(result.valid).toBe(true);
    expect(result.personType).toBe("fisica");
    expect(result.base).toBe("GALJ");
    expect(result.fecha).toBe("900115");
    expect(result.checkDigitValid).toBe(true);
  });

  it("rejects RFC with invalid check digit", () => {
    const result = validateRfc("GALJ900115I70");
    expect(result.valid).toBe(false);
    expect(result.checkDigitValid).toBe(false);
  });

  it("rejects empty input", () => {
    const result = validateRfc("");
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toMatch(/ingrese/i);
  });
});

describe("parseCurp", () => {
  it("extracts RFC base and birth date from valid CURP format", () => {
    const result = parseCurp("GARL900115HDFRNN09");
    expect(result.valid).toBe(true);
    expect(result.rfcBase).toBe("GARL900115");
    expect(result.fechaNacimiento).toBe("1990-01-15");
    expect(result.sexo).toBe("H");
  });

  it("rejects invalid CURP length", () => {
    const result = parseCurp("GARL900115");
    expect(result.valid).toBe(false);
  });
});
