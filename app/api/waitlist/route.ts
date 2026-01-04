import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!AUDIENCE_ID) {
      console.error("RESEND_AUDIENCE_ID is not configured");
      return NextResponse.json(
        { error: "Waitlist service is not configured" },
        { status: 500 }
      );
    }

    // Add contact to Resend Audience
    const { data, error } = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    if (error) {
      // Handle duplicate email gracefully
      if (error.message?.includes("already exists")) {
        return NextResponse.json(
          { success: true, message: "You're already on the list!" },
          { status: 200 }
        );
      }

      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
      id: data?.id,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
