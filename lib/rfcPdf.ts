import type { RfcResult } from "./rfcEngine";
import { SITE_NAME, getSiteUrl } from "./site";

export type RfcPdfInput = {
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombre: string;
  fechaNacimiento: string;
  result: RfcResult;
};

const EMERALD = { r: 5, g: 150, b: 105 };
const EMERALD_DARK = { r: 4, g: 120, b: 87 };
const SLATE = { r: 17, g: 24, b: 39 };
const MUTED = { r: 107, g: 114, b: 128 };

async function loadLogoPng(): Promise<string | null> {
  if (typeof window === "undefined") return null;
  try {
    const response = await fetch("/logo.svg");
    const svgText = await response.text();
    const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    return await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 280;
        canvas.height = 80;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          URL.revokeObjectURL(url);
          resolve(null);
          return;
        }
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 16, 12, 248, 56);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL("image/png"));
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(null);
      };
      img.src = url;
    });
  } catch {
    return null;
  }
}

export async function downloadRfcPdf(input: RfcPdfInput): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = 0;

  doc.setFillColor(EMERALD.r, EMERALD.g, EMERALD.b);
  doc.rect(0, 0, pageW, 88, "F");
  doc.setFillColor(EMERALD_DARK.r, EMERALD_DARK.g, EMERALD_DARK.b);
  doc.rect(0, 72, pageW, 16, "F");

  const logo = await loadLogoPng();
  if (logo) {
    doc.addImage(logo, "PNG", margin, 22, 140, 40);
  } else {
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(SITE_NAME, margin, 48);
  }

  y = 112;
  doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("RFC Estimation Report", margin, y);

  y += 28;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  doc.text(`Generated on ${new Date().toLocaleDateString("en-MX", { dateStyle: "long" })}`, margin, y);

  y += 32;
  doc.setDrawColor(229, 231, 235);
  doc.setFillColor(249, 250, 251);
  doc.roundedRect(margin, y, pageW - margin * 2, 118, 8, 8, "FD");

  const labelX = margin + 20;
  let innerY = y + 28;
  doc.setFontSize(9);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  doc.text("PATERNAL SURNAME", labelX, innerY);
  doc.text("MATERNAL SURNAME", labelX + 220, innerY);
  innerY += 14;
  doc.setFontSize(11);
  doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);
  doc.setFont("helvetica", "bold");
  doc.text(input.apellidoPaterno.toUpperCase() || "—", labelX, innerY);
  doc.text((input.apellidoMaterno || "—").toUpperCase(), labelX + 220, innerY);

  innerY += 26;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  doc.text("GIVEN NAME(S)", labelX, innerY);
  doc.text("BIRTH DATE", labelX + 220, innerY);
  innerY += 14;
  doc.setFontSize(11);
  doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);
  doc.setFont("helvetica", "bold");
  doc.text(input.nombre.toUpperCase(), labelX, innerY);
  doc.text(input.fechaNacimiento, labelX + 220, innerY);

  y += 140;
  doc.setFillColor(EMERALD.r, EMERALD.g, EMERALD.b);
  doc.roundedRect(margin, y, pageW - margin * 2, 96, 10, 10, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("ESTIMATED RFC (PUBLIC SAT ALGORITHM)", margin + 24, y + 32);
  doc.setFontSize(28);
  doc.setFont("courier", "bold");
  doc.text(input.result.rfc, margin + 24, y + 68);

  y += 118;
  const breakdown = [
    ["Base (4 letters)", input.result.base],
    ["Date segment (YYMMDD)", input.result.fecha],
    ["Homoclave", input.result.homoclave],
    ["Verification digit", input.result.dv],
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  breakdown.forEach(([label, value]) => {
    doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
    doc.text(label, margin, y);
    doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);
    doc.setFont("courier", "bold");
    doc.text(value, margin + 200, y);
    doc.setFont("helvetica", "normal");
    y += 20;
  });

  y += 16;
  doc.setFontSize(8);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  const disclaimer =
    "This document is an educational estimate based on publicly documented SAT logic. It is not issued by SAT and does not replace official registration. Validate your RFC through official SAT channels.";
  const lines = doc.splitTextToSize(disclaimer, pageW - margin * 2);
  doc.text(lines, margin, y);

  y += lines.length * 10 + 20;
  doc.setTextColor(EMERALD_DARK.r, EMERALD_DARK.g, EMERALD_DARK.b);
  doc.setFontSize(9);
  doc.text(`${SITE_NAME} · ${getSiteUrl()}`, margin, y);

  doc.save(`RFC-${input.result.rfc}-${Date.now()}.pdf`);
}
