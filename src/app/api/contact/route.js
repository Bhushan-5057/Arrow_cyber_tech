import { NextResponse } from "next/server";
import { validateContactForm } from "@/utils/validation";
import { generateBusinessEmail } from "@/emails/businessTemplate";
import { generateCustomerEmail } from "@/emails/customerTemplate";
import { sendContactEmails, validateMailEnv } from "@/lib/mail";

export const runtime = "nodejs";

/**
 * POST /api/contact
 * Validates the payload and sends business + customer emails.
 */
export async function POST(request) {
  try {
    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON payload.",
        },
        { status: 400 }
      );
    }

    const validation = validateContactForm(body);

    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: validation.message,
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const envCheck = validateMailEnv();
    if (!envCheck.ok) {
      console.error("[contact] Missing env vars:", envCheck.missing);
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured. Please try again later.",
          code: "MAIL_ENV_MISSING",
        },
        { status: 500 }
      );
    }

    const { name, email, companyName, service, message } = validation.data;

    const businessHtml = generateBusinessEmail({
      name,
      email,
      companyName,
      service,
      message,
    });

    const customerHtml = generateCustomerEmail({
      name,
      email,
      companyName,
      service,
      message,
    });

    await sendContactEmails({
      customerEmail: email,
      businessHtml,
      customerHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact] Failed to send emails:", {
      message: error?.message,
      code: error?.code,
      response: error?.response,
      responseCode: error?.responseCode,
      command: error?.command,
    });

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send email. Please try again shortly.",
        code: error?.code || "MAIL_SEND_FAILED",
      },
      { status: 500 }
    );
  }
}

/**
 * Reject unsupported methods with a clear response.
 */
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed. Use POST.",
    },
    { status: 405 }
  );
}
