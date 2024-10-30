"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProjectName, setSelectedProjectName] = useState<string | null>(
    null
  );
  const [pageTitle, setPageTitle] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      name: "🚀 GrowTrack",
      date: "August 2024",
      description:
        "🌟 Get your goals on track! With GrowTrack, you can set your personal goals and let our AI generate tasks to help you achieve them within a specific date range. \n✅ Track your progress by ticking off tasks as you complete them, and ask our AI for tips to make your tasks easier! \n📊 On another page, you can see metrics for each of your goals and tasks, making it fun and engaging to reach your dreams!",
      images: [
        { src: "/growtrack_dashboard.png", title: "Goal Dashboard" },
        {
          src: "/growtrack_message_motivation.png",
          title: "AI Motivation Message",
        },
        { src: "/gt_ai.png", title: "AI Features" },
        { src: "/gt_streak.png", title: "Streak Tracker" },
        { src: "/gt_darktheme.png", title: "Dark Theme" },
      ],
      videos: [],
      style: "big",
    },
    {
      name: "AI-powered Scheduling 📆",
      date: "June 2024",
      description:
        "🤖 Meet your new intelligent scheduling assistant! This app optimizes your time, ensuring you never miss an important meeting or task. \n🗓️ Let AI handle the heavy lifting while you focus on what really matters. \n🎯 Achieve your challenging goals with helpful tips and a beautiful calendar, along with a newsletter template.",
      images: [
        { src: "/AI_newsletter.png", title: "Colorful Newsletter" },
        { src: "/AI_newsletter2.png", title: "Neon Newsletter" },
      ],
      videos: [{ src: "/AI-powered Scheduling.mp4", title: "AI Scheduling" }],
      style: "small",
    },
  ];

  const openModal = (image: string, projectName: string, pageTitle: string) => {
    setSelectedImage(image);
    setSelectedProjectName(projectName);
    setPageTitle(pageTitle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    setSelectedProjectName(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-20 py-36" ref={ref}>
      <h2 className="text-6xl font-bold mb-20 flex items-center animate-slideInLeft justify-end sm:text-8xl">
        <span className="text-pink-500 ml-4 animate-bounce">←</span>
        My projects
      </h2>
      {isInView &&
        projects.map((project, index) => (
          <motion.div
            key={index}
            className={`mb-32 flex relative ${index === 0 ? "h-[1500px]" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {index % 2 === 0 && (
              <>
                <div className="flex flex-col text-end mr-8 w-1/2">
                  <h2 className="text-4xl md:text-6xl font-bold animate-slideInLeft">
                    {project.name}
                  </h2>
                  <p className="text-3xl md:text-4xl text-gray-400 mt-4 md:mt-0">
                    {project.date}
                  </p>
                  {project.description.split("\n").map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-lg md:text-xl text-gray-300 mt-2 mb-4"
                    >
                      {desc}
                    </p>
                  ))}

                  <div className="grid grid-cols-12 mt-12 gap-5">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-2 h-2 bg-violet-900 rounded-full blur-none"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="relative group flex flex-col w-2/3 h-auto">
                  {project.videos &&
                    project.videos.length > 0 &&
                    project.videos.map((video, vidIndex) => (
                      <div key={vidIndex} className="relative">
                        <video
                          controls
                          className="w-full h-auto rounded-3xl transition-all duration-300 group-hover:shadow-2xl mb-2"
                        >
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
                          ✨ {video.title}
                        </div>
                      </div>
                    ))}
                  {project.images &&
                    project.images.length > 0 &&
                    project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        onClick={() =>
                          openModal(image.src, project.name, image.title)
                        }
                        className="relative group"
                      >
                        <Image
                          src={image.src}
                          alt={`${project.name} image ${imgIndex + 1}`}
                          width={600}
                          height={300}
                          className={`w-full h-auto hover:scale-105 rounded-3xl transition-all duration-300 group-hover:shadow-2xl mb-2 cursor-pointer`}
                          style={{
                            top: `${imgIndex * 300}px`,
                            position: "absolute",
                          }}
                        />
                        <div
                          className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 text-lg group-hover:z-50 "
                          style={{
                            top: `${imgIndex * 300}px`,
                          }}
                        >
                          ✨ {image.title}
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}
            {index % 2 === 1 && (
              <>
                <div className="relative group flex flex-col w-2/3">
                  {project.videos &&
                    project.videos.length > 0 &&
                    project.videos.map((video, vidIndex) => (
                      <div key={vidIndex} className="relative">
                        <video
                          controls
                          autoPlay={true}
                          className="w-full h-auto rounded-3xl transition-all duration-300 group-hover:shadow-2xl mb-2"
                        >
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
                          ✨ {video.title}
                        </div>
                      </div>
                    ))}
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {project.images &&
                      project.images.length > 0 &&
                      project.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          onClick={() =>
                            openModal(image.src, project.name, image.title)
                          }
                          className=""
                        >
                          <div className="top-50 left-0 bg-black bg-opacity-50 text-white p-2 text-lg">
                            ✨ {image.title}
                          </div>
                          <Image
                            src={image.src}
                            alt={`${project.name} image ${imgIndex + 1}`}
                            width={600}
                            height={300}
                            className="w-full h-auto rounded-3xl transition-all hover:scale-105 duration-300 group-hover:shadow-2xl mb-2 cursor-pointer"
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex flex-col ml-8 w-1/2">
                  <h2 className="text-4xl md:text-6xl font-bold animate-slideInLeft">
                    {project.name}
                  </h2>
                  <p className="text-3xl md:text-4xl text-gray-400 mt-4 md:mt-0">
                    {project.date}
                  </p>
                  {project.description.split("\n").map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-lg md:text-xl text-gray-300 mt-2 mb-4"
                    >
                      {desc}
                    </p>
                  ))}
                  <div className="grid grid-cols-12 mt-12 gap-5">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-2 h-2 bg-violet-900 rounded-full blur-none"
                      ></div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      <a
        href="https://github.com/harrisdevv"
        className="relative z-2 flex justify-center text-center text-xl md:text-2xl text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer"
      >
        See more projects &gt;&gt;
      </a>

      {/* Custom Modal for Image */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={handleOverlayClick}
        >
          <motion.div
            className="bg-white rounded-lg p-4 relative transition-transform duration-300 transform scale-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <h2 className="font-bold text-2xl text-black">
              Project: {selectedProjectName}
            </h2>
            <h4 className="text-md text-black font-bold">Page: {pageTitle} </h4>
            {selectedImage && (
              <div className="mt-2 border-2 overflow-auto max-h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Selected project image"
                  width={1000}
                  height={500}
                  className="w-auto h-auto"
                />
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="btn btn-outline text-black"
              >
                Close
              </button>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black"
            >
              ✖
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
