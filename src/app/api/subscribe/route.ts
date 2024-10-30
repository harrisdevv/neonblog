import { NextResponse } from "next/server";
import { Resend } from "resend";
import SubscriptionConfirmation from "@/app/components/SubscriptionConfirmation";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY as string);

// Define Zod schema for validation
const subscriptionSchema = z.object({
  email: z.string().email("Invalid email format"),
  firstName: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json();

  // Validate the request body
  const validation = subscriptionSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const { email, firstName } = validation.data;

  const blogLink = "https://hienspace.vercel.app/blog"; // Replace with your actual blog link

  // Extract first name from email if firstName is empty
  const nameToUse = firstName || email.split("@")[0];

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Subscription Confirmation",
      react: SubscriptionConfirmation({ firstName: nameToUse, blogLink }),
    });

    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
