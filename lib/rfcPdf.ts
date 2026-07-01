import type { RfcResult } from "./rfcEngine";
import { SITE_LOGO_PATH, SITE_NAME, getSiteUrl } from "./site";

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
const FOOTER_BG = { r: 249, g: 250, b: 251 };
const BORDER = { r: 229, g: 231, b: 235 };

const LAYOUT = {
  margin: 48,
  header: 72,
  footer: 56,
} as const;

type LogoTint = "primary" | "white";

type LogoAsset = {
  dataUrl: string;
  aspect: number;
};

function tintLogoOnCanvas(
  img: HTMLImageElement,
  tint: LogoTint,
): LogoAsset {
  const aspect = img.naturalWidth / img.naturalHeight;
  const canvasHeight = 96;
  const canvasWidth = Math.round(canvasHeight * aspect);
  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { dataUrl: "", aspect: 1 };
  }

  const fill =
    tint === "white"
      ? "#ffffff"
      : `rgb(${EMERALD.r}, ${EMERALD.g}, ${EMERALD.b})`;
  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

  return { dataUrl: canvas.toDataURL("image/png"), aspect };
}

async function loadLogoAssets(): Promise<{ primary: LogoAsset | null; white: LogoAsset | null }> {
  if (typeof window === "undefined") return { primary: null, white: null };
  try {
    const response = await fetch(SITE_LOGO_PATH);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    return await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(objectUrl);
        resolve({
          primary: tintLogoOnCanvas(img, "primary"),
          white: tintLogoOnCanvas(img, "white"),
        });
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        resolve({ primary: null, white: null });
      };
      img.src = objectUrl;
    });
  } catch {
    return { primary: null, white: null };
  }
}

function drawLogo(
  doc: import("jspdf").jsPDF,
  asset: LogoAsset,
  x: number,
  y: number,
  height: number,
): number {
  const width = height * asset.aspect;
  doc.addImage(asset.dataUrl, "PNG", x, y, width, height);
  return width;
}

function drawPdfFooter(
  doc: import("jspdf").jsPDF,
  pageW: number,
  pageH: number,
  siteUrl: string,
  logo: LogoAsset | null,
): void {
  const footerTop = pageH - LAYOUT.footer;

  doc.setFillColor(FOOTER_BG.r, FOOTER_BG.g, FOOTER_BG.b);
  doc.rect(0, footerTop, pageW, LAYOUT.footer, "F");
  doc.setDrawColor(BORDER.r, BORDER.g, BORDER.b);
  doc.setLineWidth(0.75);
  doc.line(0, footerTop, pageW, footerTop);

  const centerY = footerTop + LAYOUT.footer / 2;
  const logoHeight = 34;
  let textX = LAYOUT.margin;

  if (logo?.dataUrl) {
    const logoWidth = drawLogo(doc, logo, LAYOUT.margin, centerY - logoHeight / 2, logoHeight);
    textX = LAYOUT.margin + logoWidth + 10;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);
  doc.text(SITE_NAME, textX, centerY - 4);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(EMERALD_DARK.r, EMERALD_DARK.g, EMERALD_DARK.b);
  doc.textWithLink(siteUrl, textX, centerY + 10, { url: siteUrl });
}

export async function downloadRfcPdf(input: RfcPdfInput): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const contentW = pageW - LAYOUT.margin * 2;
  const siteUrl = getSiteUrl();
  const { primary: footerLogo, white: headerLogo } = await loadLogoAssets();
  let y = 0;

  doc.setFillColor(EMERALD.r, EMERALD.g, EMERALD.b);
  doc.rect(0, 0, pageW, LAYOUT.header, "F");

  if (headerLogo?.dataUrl) {
    const headerLogoHeight = 34;
    const headerLogoWidth = drawLogo(doc, headerLogo, LAYOUT.margin, 19, headerLogoHeight);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(SITE_NAME, LAYOUT.margin + headerLogoWidth + 10, 42);
  } else {
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(SITE_NAME, LAYOUT.margin, 44);
  }

  y = LAYOUT.header + 32;
  doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("RFC Estimation Report", LAYOUT.margin, y);

  y += 24;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  doc.text(`Generated on ${new Date().toLocaleDateString("en-MX", { dateStyle: "long" })}`, LAYOUT.margin, y);

  y += 28;
  doc.setDrawColor(BORDER.r, BORDER.g, BORDER.b);
  doc.setFillColor(FOOTER_BG.r, FOOTER_BG.g, FOOTER_BG.b);
  doc.roundedRect(LAYOUT.margin, y, contentW, 112, 8, 8, "FD");

  const labelX = LAYOUT.margin + 20;
  let innerY = y + 26;
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

  y += 132;
  doc.setFillColor(EMERALD.r, EMERALD.g, EMERALD.b);
  doc.roundedRect(LAYOUT.margin, y, contentW, 88, 10, 10, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("ESTIMATED RFC (PUBLIC SAT ALGORITHM)", LAYOUT.margin + 24, y + 30);
  doc.setFontSize(28);
  doc.setFont("courier", "bold");
  doc.text(input.result.rfc, LAYOUT.margin + 24, y + 64);

  y += 108;
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
    doc.text(label, LAYOUT.margin, y);
    doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);
    doc.setFont("courier", "bold");
    doc.text(value, LAYOUT.margin + 200, y);
    doc.setFont("helvetica", "normal");
    y += 20;
  });

  y += 20;
  doc.setFontSize(8);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  const disclaimer =
    "This document is an educational estimate based on publicly documented SAT logic. It is not issued by SAT and does not replace official registration. Validate your RFC through official SAT channels.";
  const lines = doc.splitTextToSize(disclaimer, contentW);
  doc.text(lines, LAYOUT.margin, y);

  drawPdfFooter(doc, pageW, pageH, siteUrl, footerLogo);

  doc.save(`RFC-${input.result.rfc}-${Date.now()}.pdf`);
}
