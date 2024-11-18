"use client";
import { Button } from "@/components/ui/button";
import { JobDesc } from "@/components/ui/job-desc";
import { Section } from "@/components/ui/section";
import { ArrowRight, Power } from "lucide-react";
import { motion } from "framer-motion";
import { getContactInfo } from "@/data/contact";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const Hero = () => {
  const contact = getContactInfo();

  const socialLinks = [
    {
      icon: <GitHubLogoIcon className="h-5 w-5" />,
      href: `https://github.com/${contact.github}`,
      label: "GitHub",
    },
    {
      icon: <LinkedInLogoIcon className="h-5 w-5" />,
      href: `https://linkedin.com/in/${contact.linkedin}`,
      label: "LinkedIn",
    },
    {
      icon: <TwitterLogoIcon className="h-5 w-5" />,
      href: `https://twitter.com/${contact.twitter}`,
      label: "Twitter",
    },
    {
      icon: <EnvelopeClosedIcon className="h-5 w-5" />,
      href: `mailto:${contact.email}`,
      label: "Email",
    },
  ];

  return (
    <Section id="home" containerClassName="flex items-center h-screen">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I&apos;m Rinaldes Duma
              </motion.h1>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <JobDesc />
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build exceptional digital experiences that combine elegant
              design with robust functionality. Let&apos;s create something
              amazing together.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-2 relative flex justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/0 flex items-center justify-center p-8 w-[85%] translate-x-12">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-primary/0 to-primary/5 backdrop-blur-3xl relative flex items-center justify-center">
                <Power className="w-32 h-32 text-primary/30 absolute" />
              </div>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-transparent blur-2xl translate-x-12" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
