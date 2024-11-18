import { contactInfo } from "@/data/contact";
import Motion from "./Motion";
import Link from "next/link";

const ContactInfo = () => (
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

export default ContactInfo;
