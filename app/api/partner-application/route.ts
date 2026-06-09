import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const {
      businessName,
      contactPerson,
      email,
      website,
      city,
      state,
      businessType,
      yearsOfExperience,
      introduction,
      services,
      portfolio,
      partnershipReason,
    } = await request.json();

    // Validate required fields
    if (
      !businessName ||
      !contactPerson ||
      !email ||
      !city ||
      !state ||
      !businessType ||
      !introduction ||
      !services
    ) {
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
      subject: `New Partner Application from ${businessName}`,
      html: `
        <h2>New Partner Application</h2>
        <hr>
        <h3>Business Information</h3>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Years of Experience:</strong> ${yearsOfExperience || 'Not provided'}</p>
        
        <hr>
        <h3>Company Details</h3>
        <h4>Introduction</h4>
        <p>${introduction.replace(/\n/g, '<br>')}</p>
        
        <h4>Services Provided</h4>
        <p>${services.replace(/\n/g, '<br>')}</p>
        
        ${
          portfolio
            ? `<h4>Portfolio / Website Links</h4>
        <p>${portfolio.replace(/\n/g, '<br>')}</p>`
            : ''
        }
        
        ${
          partnershipReason
            ? `<h4>Why Partner with myDesigner</h4>
        <p>${partnershipReason.replace(/\n/g, '<br>')}</p>`
            : ''
        }
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          To contact this applicant, reply to: <strong>${email}</strong>
        </p>
      `,
    });

    if (adminEmail.error) {
      console.error('Admin email error:', adminEmail.error);
      throw new Error(
        `Failed to send application: ${adminEmail.error.message}`
      );
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Partner application send error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}
