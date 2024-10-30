import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DotPattern from "./DotPattern";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="mx-auto flex flex-col md:flex-row items-center justify-center bg-black text-white p-10 md:p-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="flex-1" variants={childVariants}>
        <h2 className="text-6xl md:text-8xl font-bold mb-8">
          About
          <br />
          me
        </h2>
        <motion.p
          className="text-lg mb-8"
          variants={childVariants}
        >
          I&apos;m a passionate web developer with a knack for creating dynamic
          and responsive web applications. I specialize in using modern
          technologies like Next.js, React, and TypeScript to build
          user-friendly interfaces. My goal is to deliver high-quality code and
          seamless user experiences. I enjoy tackling challenges and
          continuously learning to improve my skills.
        </motion.p>
        <motion.a
          href="#contact"
          className="btn btn-primary text-white font-bold rounded-full text-xl hover: transition-all duration-300"
          variants={childVariants}
        >
          Contact me
        </motion.a>
      </motion.div>
      <motion.div className="flex-1 relative mt-10 md:mt-0" variants={childVariants}>
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden relative z-20">
          <Image
            src="/coding2.jpg"
            alt="Coding setup"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-50 blur-2xl animate-pulse z-10"></div>
      </motion.div>
      <div className="absolute right-80 text-8xl text-purple-600 animate-bounce hidden md:block">
        →
      </div>
      <div className="absolute right-72 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-50 blur-3xl animate-pulse "></div>
      <DotPattern />
    </motion.div>
  );
};

export default About;
