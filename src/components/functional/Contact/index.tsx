import { Mail, MapPin, Phone } from "lucide-react";
import { getContactInfo, type ContactInfo } from "@/data/contact";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Motion from "./Motion";
import Link from "next/link";

async function getContact() {
  return getContactInfo();
}

const ContactInfo = async () => {
  const contact = await getContact();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: LinkedInLogoIcon,
      label: "LinkedIn",
      value: contact.linkedin,
      href: `https://linkedin.com/in/${contact.linkedin}`,
    },
    {
      icon: GitHubLogoIcon,
      label: "GitHub",
      value: contact.github,
      href: `https://github.com/${contact.github}`,
    },
    {
      icon: TwitterLogoIcon,
      label: "Twitter",
      value: contact.twitter,
      href: `https://twitter.com/${contact.twitter}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: contact.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        contact.location
      )}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `https://wa.me/${contact.phone}`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8">
      {contactInfo.map((info, index) => (
        <Link
          key={index}
          href={info.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4"
        >
          <Motion>
            <info.icon className="h-6 w-6 text-primary" />
          </Motion>

          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{info.label}</p>
            <p className="text-sm text-muted-foreground">{info.value}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContactInfo;
