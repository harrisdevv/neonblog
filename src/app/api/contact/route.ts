import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactConfirmation from "@/app/components/ContactConfirmation";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY as string);

// Define Zod schema for validation
const contactSchema = z.object({
  email: z.string().email("Invalid email format"),
  firstName: z.string(),
  message: z.string(),
});

export async function POST(req: Request) {
  const body = await req.json();

  // Validate the request body
  const validation = contactSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const { email, firstName } = validation.data;

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Contact Confirmation",
      react: ContactConfirmation({ firstName }),
    });

    return NextResponse.json(
      { message: "Contact confirmation successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      { error: "Failed to confirm contact" },
      { status: 500 }
    );
  }
}
