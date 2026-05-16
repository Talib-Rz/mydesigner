import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, projectType, message } = await request.json();

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
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (adminEmail.error) {
      console.error('Admin email error:', adminEmail.error);
      throw new Error(`Failed to send admin email: ${adminEmail.error.message}`);
    }

    // Send confirmation email to user (only if they're the admin email address)
    // This is a limitation of Resend's free tier - requires domain verification for external emails
    if (email === (process.env.CONTACT_EMAIL || 'mydesigner2024@gmail.com')) {
      const userEmail = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'We received your message - myDesigner',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and we're excited to discuss your project with you!</p>
          <p>Our team will review your inquiry and get back to you within 24 hours.</p>
          <br>
          <p>Best regards,<br>The myDesigner Team</p>
        `,
      });

      if (userEmail.error) {
        console.error('User confirmation email error:', userEmail.error);
      }
    } else {
      // In production with verified domain, this will work
      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: email,
          subject: 'We received your message - myDesigner',
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${name},</p>
            <p>We've received your message and we're excited to discuss your project with you!</p>
            <p>Our team will review your inquiry and get back to you within 24 hours.</p>
            <br>
            <p>Best regards,<br>The myDesigner Team</p>
          `,
        });
      } catch (userEmailError) {
        console.log('Note: User confirmation email skipped (requires verified domain in Resend)');
      }
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
