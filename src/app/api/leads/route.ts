import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  contact: string;
  projectType: string;
  budget: string;
  priority: string;
  message: string;
};

function isValidLead(data: Partial<LeadPayload>) {
  return Boolean(
    data.name &&
      data.contact &&
      data.projectType &&
      data.budget &&
      data.priority &&
      data.message
  );
}

export async function POST(request: Request) {
  try {
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return NextResponse.json(
        { success: false, error: "Google Script URL is not configured." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as Partial<LeadPayload>;

    if (!isValidLead(body)) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to save lead." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead save error:", error);

    return NextResponse.json(
      { success: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}