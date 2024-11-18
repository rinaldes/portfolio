import Button from "@/components/functional/Button";
import { contactInfo } from "@/data/contact";

const Footer = () => (
  <footer className="container pl-40 pr-32 pt-16 pb-8 grid gap-8 sm:grid-cols-3 lg:grid-cols-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="space-y-4 col-span-2">
      <h3 className="text-lg font-semibold">Rinaldes Duma</h3>
      <p className="text-sm text-muted-foreground">
        Full Stack Developer passionate about creating innovative web solutions
        and delivering exceptional user experiences.
      </p>
    </div>

    <div className="col-span-1" />

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Connect</h3>
      {contactInfo.map((social) => (
        <Button
          key={social.label}
          variant="ghost"
          href={social.href}
          label={social.label}
          target="_blank"
        >
          <social.icon className="size-6" />
          &nbsp; {social.href}
        </Button>
      ))}
    </div>

    <p className="mt-12 text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} Rinaldes Duma. All rights reserved.
    </p>
  </footer>
);

export default Footer;
