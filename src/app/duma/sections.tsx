import {
  Hero,
  About,
  Project,
  Skill,
  Contact,
  Experience,
  Footer,
} from "@/containers";
import { FadeIn, SlideIn } from "@/components/animations";

export const Section = () => (
  <div className="px-8 lg:px-0">
    <FadeIn delay={0.5}>
      <Hero />
    </FadeIn>

    <SlideIn direction="right" delay={0.5}>
      <About />
    </SlideIn>

    <FadeIn delay={0.5}>
      <Project />
    </FadeIn>

    <SlideIn direction="up" delay={0.5} className="hidden lg:block">
      <Skill />
    </SlideIn>

    <SlideIn direction="left" delay={0.5} className="hidden md:block">
      <Experience />
    </SlideIn>

    <SlideIn direction="right" delay={0.5}>
      <Contact />
    </SlideIn>

    <SlideIn direction="up" delay={0.5} className="hidden md:block">
      <Footer />
    </SlideIn>
  </div>
);
