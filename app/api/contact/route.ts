import { NextRequest, NextResponse } from 'next/server'

/**
 * Contact form handler.
 * PLACEHOLDER: Currently logs submissions to the console.
 * Replace this handler with a real email service (e.g. Resend, SendGrid, Nodemailer)
 * or a CRM integration (e.g. HubSpot, Zoho) before going to production.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Basic server-side validation
    if (!name || !message) {
      return NextResponse.json(
        { success: false, message: 'Name and message are required.' },
        { status: 400 }
      )
    }

    // PLACEHOLDER: Replace this console.log with real notification / CRM logic
    console.log('[DAC Auto — Contact Form Submission]', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Thank you! We've received your message and will be in touch soon.",
    })
  } catch (err) {
    console.error('[DAC Auto — Contact Form Error]', err)
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please reach us directly on WhatsApp.',
      },
      { status: 500 }
    )
  }
}
