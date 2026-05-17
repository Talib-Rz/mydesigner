import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, feedbackType, message, rating } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const adminEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'mydesigner2024@gmail.com',
      replyTo: email,
      subject: `New Feedback from ${name}: ${subject || feedbackType}`,
      html: `
        <h2>New Feedback Received</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || feedbackType}</p>
        <p><strong>Feedback Type:</strong> ${feedbackType}</p>
        <p><strong>Rating:</strong> ${rating}/5 ⭐</p>
        <hr>
        <h3>Feedback Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          To reply to this feedback, use the email: <strong>${email}</strong>
        </p>
      `,
    });

    if (adminEmail.error) {
      console.error('Admin email error:', adminEmail.error);
      throw new Error(`Failed to send feedback: ${adminEmail.error.message}`);
    }

    return NextResponse.json(
      { success: true, message: 'Feedback sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Feedback send error:', error);
    return NextResponse.json(
      { error: 'Failed to send feedback. Please try again later.' },
      { status: 500 }
    );
  }
}
