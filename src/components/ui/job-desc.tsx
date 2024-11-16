"use client";
import { TypeAnimation } from "react-type-animation";

export const JobDesc = () => (
  <TypeAnimation
    sequence={[
      "Full Stack Developer",
      1000,
      "UI/UX Enthusiast",
      1000,
      "Problem Solver",
      1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
);
