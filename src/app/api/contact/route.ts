import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email } = body;

    // Validate inputs
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required.' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // e.g. parvinfosoftadmin@gmail.com
        pass: process.env.EMAIL_PASS, // App password from Google
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'parvinfosoftadmin@gmail.com',
      subject: `New Consultation Request: ${name}`,
      text: `
        New Lead Details:
        -----------------
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #f4f4f5; border-radius: 8px;">
          <h2 style="color: #0E2F5A; border-bottom: 2px solid #2E79B7; padding-bottom: 10px;">New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
