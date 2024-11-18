"use client";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Full-Stack Development",
    description:
      "Experienced in building end-to-end solutions with modern technologies like React, Node.js, and TypeScript.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Collaboration",
    description:
      "Strong communicator who thrives in collaborative environments, working effectively with designers and stakeholders.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Problem Solving",
    description:
      "Passionate about finding elegant solutions to complex problems through creative thinking and analytical approaches.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Performance Optimization",
    description:
      "Dedicated to creating fast, efficient applications with a focus on scalability and user experience.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const AboutMe = () => (
  <Section id="about" containerClassName="my-auto">
    <div className="space-y-12">
      <div className="space-y-6">
        <motion.h2
          className="text-4xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          custom={0}
        >
          About Me
        </motion.h2>

        <div className="max-w-2xl space-y-6 text-lg text-muted-foreground">
          {[
            "I'm a versatile software engineer specializing in full-stack development. With a passion for creating elegant solutions, I bridge the gap between design and functionality.",
            "My journey in software development began with a curiosity about how things work on the web. This curiosity has evolved into a professional pursuit of creating seamless, user-centric applications.",
            "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              custom={index + 1}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: index * 0.1 + 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 50 },
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group"
          >
            <Card className="p-6 h-full backdrop-blur-sm bg-background/50 border border-primary/10 transition-colors duration-200 hover:bg-primary/5">
              <motion.div
                className="flex items-center gap-4 mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold transition-colors duration-200 group-hover:text-primary">
                  {feature.title}
                </h3>
              </motion.div>
              <p className="text-muted-foreground transition-colors duration-200 group-hover:text-primary/80">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default AboutMe;
