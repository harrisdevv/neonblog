import React from 'react';

interface Skill {
  name: string;
  level: number;
}

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex items-center mb-4 animate-fadeIn">
    <span className="w-36 text-xl font-medium">{skill.name}</span>
    <div className="flex-1 flex">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full mx-1 transition-all duration-300 ${
            i < skill.level ? 'bg-pink-500 scale-100' : 'bg-pink-800 scale-75 opacity-40'
          }`}
        />
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'CSS', level: 9 },
    { name: 'Tailwind', level: 5 },
    { name: 'Javascript', level: 8 },
    { name: 'Angular', level: 7 },
    { name: 'Laravel', level: 5 },
    { name: 'React', level: 8 },
    { name: 'Ruby/Rails', level: 9 },
    { name: 'Node.js', level: 4 },
  ];

  return (
    <div className="bg-black text-white p-20 relative">
      <div className='absolute top-32 left-24 bg-gradient-to-b from-blue-400 to-pink-400 w-64 h-96 blur-3xl opacity-25 rounded-full'></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-8xl font-bold mb-12 flex items-center animate-slideInLeft">
          My skills
          <span className="text-pink-500 ml-4 animate-bounce">←</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {skills.map((skill, index) => (
            <div key={skill.name} className="animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
              <SkillBar skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
