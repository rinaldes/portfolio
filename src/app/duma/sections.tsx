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
  <>
    <FadeIn delay={0.5}>
      <Hero />
    </FadeIn>

    <SlideIn direction="right" delay={0.5}>
      <About />
    </SlideIn>

    <FadeIn delay={0.5}>
      <Project />
    </FadeIn>

    <SlideIn direction="up" delay={0.5}>
      <Skill />
    </SlideIn>

    <SlideIn direction="left" delay={0.5}>
      <Experience />
    </SlideIn>

    <SlideIn direction="right" delay={0.5}>
      <Contact />
    </SlideIn>

    <SlideIn direction="up" delay={0.5}>
      <Footer />
    </SlideIn>
  </>
);
