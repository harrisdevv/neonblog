import React from 'react';
import Image from 'next/image';

const Projects: React.FC = () => {
  const projects = [
    { name: 'Project name', date: 'Dec 2021', image: '/project-image.jpg' },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gradient-to-br from-black to-purple-900 text-white p-10 md:p-20">
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="mb-32 animate-fadeIn" style={{animationDelay: `${index * 0.3}s`}}>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
              <h2 className="text-6xl md:text-8xl font-bold animate-slideInLeft">{project.name}</h2>
              <p className="text-2xl md:text-3xl text-gray-400 mt-4 md:mt-0">{project.date}</p>
            </div>
            <div className="relative group">
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={600}
                className="w-full h-auto rounded-3xl transition-all duration-300 group-hover:shadow-2xl"
              />
              <div className="absolute bottom-8 left-8 flex space-x-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <p className="text-xl md:text-2xl text-purple-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer">See more projects &gt;&gt;</p>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
