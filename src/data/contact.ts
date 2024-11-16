export type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  location: string;
  phone: string;
}

// This should only be called server-side
export const getContactInfo = (): ContactInfo => ({
  email: process.env.CONTACT_EMAIL || '',
  github: process.env.GITHUB || '',
  linkedin: process.env.LINKEDIN || '',
  twitter: process.env.TWITTER || '',
  location: process.env.LOCATION || '',
  phone: process.env.PHONE || '',
});
