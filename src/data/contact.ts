import { LinkedInLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Mail, MapPin, Phone } from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: process.env.CONTACT_EMAIL,
    href: `mailto:${process.env.CONTACT_EMAIL}`,
  },
  {
    icon: LinkedInLogoIcon,
    label: "LinkedIn",
    value: process.env.LINKEDIN,
    href: `https://linkedin.com/in/${process.env.LINKEDIN}`,
  },
  {
    icon: GitHubLogoIcon,
    label: "GitHub",
    value: process.env.GITHUB,
    href: `https://github.com/${process.env.GITHUB}`,
  },
  {
    icon: TwitterLogoIcon,
    label: "Twitter",
    value: process.env.TWITTER,
    href: `https://twitter.com/${process.env.TWITTER}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: process.env.LOCATION,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      process.env.LOCATION || ""
    )}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: process.env.PHONE,
    href: `https://wa.me/${process.env.PHONE}`,
  },
];