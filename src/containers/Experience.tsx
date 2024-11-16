"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Company Name",
    period: "2022 - Present",
    description:
      "Led development of modern web applications using Next.js, React, and Node.js. Implemented real-time features and optimized performance.",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
    type: "Full-time",
  },
  {
    title: "Frontend Developer",
    company: "Previous Company",
    period: "2021 - 2022",
    description:
      "Developed responsive web interfaces and improved user experience. Collaborated with designers to implement pixel-perfect designs.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Redux"],
    type: "Full-time",
  },
  // Add more experiences here
];

const Experience = () => {
  return (
    <Section id="experience">
      <h2 className="text-4xl font-bold mb-12">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-px bg-border -translate-x-1/2" />

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative grid grid-cols-1 md:grid-cols-2 gap-6",
                index % 2 === 0
                  ? "md:text-right"
                  : "md:text-left md:translate-x-[50%]"
              )}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 translate-y-1.5">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              </div>

              {/* Content */}
              <div
                className={cn(
                  "md:col-span-1 space-y-3",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:order-1"
                )}
              >
                <div className="flex items-center gap-3 md:justify-end">
                  <Badge variant="outline">{exp.type}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-lg text-primary">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>

                <div
                  className={cn(
                    "flex flex-wrap gap-2",
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  )}
                >
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
