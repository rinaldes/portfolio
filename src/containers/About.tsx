import { Section } from "@/components/ui/section";

const AboutMe = () => (
  <Section id="about" containerClassName="my-auto">
    <h2 className="text-4xl font-bold mb-8">About Me</h2>

    <div className="space-y-6 leading-relaxed">
      <p className="text-lg">
        I&apos;m a versatile software engineer specializing in full-stack
        development. With a passion for creating elegant solutions, I bridge the
        gap between design and functionality.
      </p>

      <p>
        My journey in software development began with a curiosity about how
        things work on the web. This curiosity has evolved into a professional
        pursuit of creating seamless, user-centric applications.
      </p>

      <p>
        I specialize in modern web technologies and have a keen interest in
        building scalable applications. My approach combines technical expertise
        with a strong focus on user experience.
      </p>
    </div>
  </Section>
);

export default AboutMe;
