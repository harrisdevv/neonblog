import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  const projects = [
    { name: "Facehot", date: "Dec 2021", image: "/project1.jpg" },
    { name: "Game Minobird", date: "Jan 2022", image: "/project2.jpg" },
    { name: "Ecommere", date: "Nov 2023", image: "/project3.jpg" },
    { name: "Luxury Car", date: "May 2024", image: "/project4.jpg" },
  ];

  return (
    <div className="bg-black text-white p-10 md:p-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-8xl font-bold mb-20 flex items-center animate-slideInLeft justify-end">
          <span className="text-pink-500 ml-4 animate-bounce">←</span>
          My projects
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-32 animate-fadeIn flex relative"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {index % 2 === 0 && (
              <>
                <div className="flex items-center justify-center opacity-80 absolute left-20 top-1/3">
                  <div className="grid grid-cols-3 gap-5">
                    {Array.from({ length: 21 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-2 h-2 bg-violet-900 rounded-full blur-none"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-1/3 left-0 bg-gradient-to-b from-purple-400 to-pink-400 w-96 h-96 blur-3xl opacity-20"></div>
                <div className="flex flex-col text-end mr-8">
                  <h2 className="text-4xl md:text-6xl font-bold  animate-slideInLeft">
                    {project.name}
                  </h2>
                  <p className="text-3xl md:text-4xl text-gray-400 mt-4 md:mt-0">
                    {project.date}
                  </p>
                </div>
                <div className="relative group">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={300}
                    className="w-full h-auto rounded-3xl transition-all duration-300 group-hover:shadow-2xl"
                  />
                </div>
              </>
            )}
            {index % 2 === 1 && (
              <>
                <div className="flex items-center justify-center opacity-80 absolute right-1/3 top-1/3">
                  <div className="grid grid-cols-7 gap-5">
                    {Array.from({ length: 21 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-2 h-2 bg-violet-900 rounded-full blur-none"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-1/3 right-1/3 bg-gradient-to-b from-purple-400 to-pink-400 w-96 h-96 blur-3xl opacity-20"></div>
                <div className="relative group">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={300}
                    className="w-full h-auto rounded-3xl transition-all duration-300 group-hover:shadow-2xl"
                  />
                </div>
                <div className="flex flex-col ml-8">
                  <h2 className="text-4xl md:text-6xl font-bold animate-slideInLeft">
                    {project.name}
                  </h2>
                  <p className="text-3xl md:text-4xl text-gray-400 mt-4 md:mt-0">
                    {project.date}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
        <p className="text-center text-xl md:text-2xl text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer">
          See more projects &gt;&gt;
        </p>
      </div>
    </div>
  );
};

export default Projects;
