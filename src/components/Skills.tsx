import React, { useEffect, useState, useMemo } from "react";
import TechStack from "./TechStack";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
}

const SkillBar: React.FC<{ skill: Skill; isVisible: boolean }> = ({
  skill,
}) => (
  <div className="flex items-center mb-4">
    <span className="w-36 text-xl font-medium">{skill.name}</span>
    <div className="flex-1 flex">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full mx-1 transition-all duration-300 ${
            i < skill.level
              ? "bg-pink-500 scale-100"
              : "bg-pink-800 scale-75 opacity-40"
          }`}
        />
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>(
    Array(9).fill(false)
  );

  const skills: Skill[] = useMemo(() => [
    { name: "Next.JS", level: 9 },
    { name: "TypeScript", level: 8 },
    { name: "CSS", level: 9 },
    { name: "Tailwind", level: 8 },
    { name: "DaisyUI", level: 8 },
    { name: "React", level: 8 },
    { name: "Node.js", level: 4 },
    { name: "Convex", level: 6 },
    { name: "Supabase", level: 4 },
  ], []);

  useEffect(() => {
    if (isInView) {
      setVisibleSkills(skills.map((_, index) => index < skills.length));
    }
  }, [isInView, skills]);

  return (
    <div className="bg-black text-white px-20 py-48 relative" ref={ref}>
      <div className="absolute top-32 left-24 bg-gradient-to-b from-blue-400 to-pink-400 w-64 h-96 blur-3xl opacity-25 rounded-full"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-8xl font-bold mb-12 flex items-center animate-slideIn">
          My skills
          <span className="text-pink-500 ml-4 animate-bounce">←</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={
                visibleSkills[index]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar skill={skill} isVisible={visibleSkills[index]} />
            </motion.div>
          ))}
        </div>
        <TechStack />
      </div>
    </div>
  );
};

export default Skills;
