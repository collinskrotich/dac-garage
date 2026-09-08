import { NextRequest, NextResponse } from 'next/server'

/**
 * Contact form handler.
 * PLACEHOLDER: Currently logs submissions to the console.
 * Replace this handler with a real email service (e.g. Resend, SendGrid, Nodemailer)
 * or a CRM integration (e.g. HubSpot, Zoho) before going to production.
 */
const MAX_FIELD_LENGTH = 2000

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isValidOptionalString(value: unknown): boolean {
  return value === undefined || value === '' || (typeof value === 'string' && value.length <= MAX_FIELD_LENGTH)
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      service,
      message,
      vehicleMake,
      vehicleModel,
      vehicleYear,
      preferredBranch,
      preferredDate,
      type,
    } = body

    // Basic server-side validation — every field is untrusted user input.
    if (!isNonEmptyString(name) || name.length > 200) {
      return NextResponse.json(
        { success: false, message: 'Please enter your name.' },
        { status: 400 }
      )
    }
    if (!isNonEmptyString(message) || message.length > MAX_FIELD_LENGTH) {
      return NextResponse.json(
        { success: false, message: 'Please enter a message describing what you need.' },
        { status: 400 }
      )
    }
    if (isNonEmptyString(email) && !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }
    if (type === 'enquiry' && !isNonEmptyString(phone)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a phone or WhatsApp number so we can reach you.' },
        { status: 400 }
      )
    }
    for (const field of [phone, service, vehicleMake, vehicleModel, vehicleYear, preferredBranch, preferredDate]) {
      if (!isValidOptionalString(field)) {
        return NextResponse.json(
          { success: false, message: 'One of the fields submitted is invalid.' },
          { status: 400 }
        )
      }
    }

    // PLACEHOLDER: Replace this console.log with real notification / CRM logic
    // (e.g. Resend, SendGrid, or a CRM webhook) before production. Do not log
    // this payload to a third-party analytics/logging service without review.
    console.log('[DAC Auto — Form Submission]', {
      type: type ?? 'contact',
      name,
      email,
      phone,
      service,
      vehicleMake,
      vehicleModel,
      vehicleYear,
      preferredBranch,
      preferredDate,
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
