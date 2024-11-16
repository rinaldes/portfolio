'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation schema
const emailSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = emailSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });

    // Send email
    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL as string,
      to: process.env.CONTACT_EMAIL as string,
      subject: `[Portfolio Contact] ${validatedFields.subject}`,
      text: `Name: ${validatedFields.name}\nEmail: ${validatedFields.email}\n\nMessage:\n${validatedFields.message}`,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { error: 'Failed to send email' };
    }

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: 'Invalid form data' };
    }
    console.error('Error sending email:', error);
    return { error: 'Failed to send email' };
  }
}
