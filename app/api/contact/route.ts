import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schema";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // TODO: Integrate provider (Resend/Formspree) for email delivery.
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
