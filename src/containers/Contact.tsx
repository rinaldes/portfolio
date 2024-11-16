import ContactInfo from "@/components/functional/Contact";
import { ContactForm } from "@/components/ui/contact-form";
import { Section } from "@/components/ui/section";

const Contact = () => (
  <Section id="contact" containerClassName="grid grid-cols-[2fr_1fr_3fr] ">
    <div className="space-y-4">
      <h2 className="text-4xl font-bold">Get in Touch</h2>
      <p className="text-muted-foreground text-lg">
        Have a question or want to work together? Drop me a message below.
      </p>
      <ContactInfo />
    </div>
    <div />
    <ContactForm />
  </Section>
);

export default Contact;
