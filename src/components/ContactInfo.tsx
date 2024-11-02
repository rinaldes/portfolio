import { Mail, Phone } from "lucide-react";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: <LinkedInLogoIcon className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: <GitHubLogoIcon className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "WhatsApp",
    value: "+1234567890",
    href: "https://wa.me/1234567890",
  },
];

const ContactInfo = () => (
  <div>
    <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
    <div className="space-y-6">
      {contactInfo.map((info, index) => (
        <a
          key={index}
          href={info.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-700 transition-colors"
        >
          <div className="p-2 bg-neutral-700 rounded-lg">{info.icon}</div>
          <div>
            <p className="font-medium">{info.label}</p>
            <p className="text-sm text-neutral-400">{info.value}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default ContactInfo;
