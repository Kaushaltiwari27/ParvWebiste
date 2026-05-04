import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, formType } = body;

    // Validate inputs
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required.' },
        { status: 400 }
      );
    }

    // 1. Send data to Google Sheets Webhook
    const googleWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    let sheetSuccess = false;
    
    if (googleWebhookUrl) {
      try {
        const sheetResponse = await fetch(googleWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        if (sheetResponse.ok) {
          sheetSuccess = true;
        } else {
          console.error("Google Sheets Webhook failed with status:", sheetResponse.status);
        }
      } catch (e) {
        console.error("Google Sheets Webhook error:", e);
      }
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL is not set in environment variables.");
    }

    if (!sheetSuccess) {
       return NextResponse.json(
        { error: 'Failed to save data to Google Sheets. Check webhook status.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Request processed successfully!',
      sheetSuccess 
    });
  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
}
