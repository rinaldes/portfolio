import { Button } from "@/components/ui/button";
import { JobDesc } from "@/components/ui/job-desc";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <Section id="home" containerClassName="flex items-center h-screen">
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
          Hi, I&apos;m Rinaldes Duma
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
          <JobDesc />
        </h2>
      </div>

      <p className="text-lg text-muted-foreground max-w-2xl">
        I build exceptional digital experiences that combine elegant design with
        robust functionality. Let&apos;s create something amazing together.
      </p>

      <div className="flex gap-4">
        <Button asChild size="lg">
          <a href="#projects">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </div>
  </Section>
);

export default Hero;
