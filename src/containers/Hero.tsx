import { Button } from "@/components/ui/button";
import { JobDesc } from "@/components/ui/job-desc";
import { Section } from "@/components/ui/section";
import { ArrowRight, Power } from "lucide-react";
import { contactInfo } from "@/data/contact";
import Type from "@/components/animations/type";
import MotionLink from "@/components/animations/link";
import { FadeIn } from "@/components/animations/fade-in";

const Hero = () => (
  <Section id="home" containerClassName="flex items-center h-screen">
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <Type size="h1">Hi, I&apos;m Rinaldes Duma</Type>
            <Type size="h2">
              <JobDesc />
            </Type>
          </div>

          <Type size="p">
            I build exceptional digital experiences that combine elegant design
            with robust functionality. Let&apos;s create something amazing
            together.
          </Type>

          <FadeIn className="flex gap-4" delay={0.3} duration={0.5}>
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </FadeIn>

          <FadeIn
            className="flex items-center gap-6 pt-4"
            delay={0.4}
            duration={0.5}
          >
            {contactInfo.map((link) => (
              <MotionLink key={link.label} link={link.href}>
                <link.icon className="size-6" />
              </MotionLink>
            ))}
          </FadeIn>
        </div>

        <FadeIn
          className="lg:col-span-2 relative flex justify-end"
          delay={0.2}
          duration={0.5}
        >
          <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/0 flex items-center justify-center p-8 w-[85%] translate-x-12">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-primary/0 to-primary/5 backdrop-blur-3xl relative flex items-center justify-center">
              <Power className="w-32 h-32 text-primary/30 absolute" />
            </div>
          </div>
          <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-transparent blur-2xl translate-x-12" />
        </FadeIn>
      </div>
    </div>
  </Section>
);

export default Hero;
