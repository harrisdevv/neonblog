"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { GithubIcon, Server, Database, Braces, Layers } from "lucide-react";
import { Icon } from '@iconify/react';

interface Project {
  name: string;
  date: string;
  description: string;
  images: Array<{ src: string; title: string }>;
  videos?: Array<{ src: string }>;
  github?: string;
  style: string;
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    other?: string[];
  };
}

// Tech stack icon mappings
const techStackIcons: { [key: string]: string } = {
  nextjs: 'logos:nextjs-icon',
  typescript: 'logos:typescript-icon',
  tailwindcss: 'logos:tailwindcss-icon',
  'shadcn-ui': 'logos:radix-ui',
  openai: 'ri:openai-fill',
  postgresql: 'logos:postgresql',
  prisma: 'logos:prisma',
  docker: 'logos:docker-icon',
  vercel: 'logos:vercel-icon',
  aws: 'skill-icons:aws-light',
  react: 'logos:react',
  convex: '',
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const handleImageClick = (image: { src: string; title: string }) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const projects: Project[] = [
    {
      name: "🚀 AI Goal Master - Saas Project",
      date: "November 2024",
      description:
        "🎯 Master your goals with AI-powered guidance! GrowTrack helps you transform dreams into actionable goals and tasks using advanced AI technology. \n🤖 Chat with your personal AI Goal Coach for motivation, strategies, and daily tips to accomplish your tasks effectively. \n📊 Track your progress with beautiful analytics, maintain your streak, and get daily AI-generated motivation to keep you moving forward. \n✨ Features multiple themes and a smart journal to document your journey!",
      images: [
        { src: "/chat_with_goal.png", title: "AI Goal Coach Chat" },
        { src: "/goal_overview.png", title: "Goal Overview" },
        { src: "/goal_timeline.png", title: "Goal Timeline View" },
        { src: "/journal.png", title: "Smart Goal Journal" },
        { src: "/daily_motivation.png", title: "Daily AI Motivation" },
        { src: "/light_theme.png", title: "Light Theme" },
        { src: "/retro_theme.png", title: "Retro Theme" },
        { src: "/dark_theme.png", title: "Dark Theme" },
      ],
      videos: [{ src: "/AI-Goal-Master.mp4" }],
      github: "https://github.com/harrisdevv/template_postgres",
      style: "big",
      techStack: {
        frontend: ['nextjs', 'tailwindcss', 'typescript', 'shadcn-ui'],
        backend: ['nextjs', 'openai'],
        database: ['postgresql', 'prisma'],
        other: ['docker', 'vercel', 'aws']
      }
    },
    {
      name: "🚀 GrowTrack - Saas Project",
      date: "August 2024",
      description:
        "🌟 Get your goals on track! With GrowTrack, you can set your personal goals and let our AI generate tasks to help you achieve them within a specific date range. \n✅ Track your progress by ticking off tasks as you complete them, and ask our AI for tips to make your tasks easier! \n📊 On another page, you can see metrics for each of your goals and tasks, making it fun and engaging to reach your dreams!",
      images: [
        { src: "/growtrack_dashboard.png", title: "Goal Dashboard" },
        { src: "/growtrack_message_motivation.png", title: "AI Motivation Message" },
        { src: "/gt_ai.png", title: "AI Features" },
        { src: "/gt_streak.png", title: "Streak Tracker" },
        { src: "/gt_darktheme.png", title: "Dark Theme" },
      ],
      videos: [],
      github: "https://github.com/harrisdevv/PeakFlow",
      style: "big",
      techStack: {
        frontend: ['react', 'tailwindcss', 'typescript'],
        backend: ['nextjs', 'openai'],
        database: ['convex'],
        other: ['docker']
      }
    },
    {
      name: "AI-powered Scheduling 📆 - Saas Project",
      date: "June 2024",
      description:
        "🤖 Meet your new intelligent scheduling assistant! This app optimizes your time, ensuring you never miss an important meeting or task. \n🗓️ Let AI handle the heavy lifting while you focus on what really matters. \n🎯 Achieve your challenging goals with helpful tips and a beautiful calendar, along with a newsletter template.",
      images: [
        { src: "/AI_newsletter.png", title: "Colorful Newsletter" },
        { src: "/AI_newsletter2.png", title: "Neon Newsletter" },
      ],
      videos: [{ src: "/AI-powered Scheduling.mp4" }],
      github: "https://github.com/harrisdevv/PeakFlow",
      style: "big",
      techStack: {
        frontend: ['react', 'tailwindcss'],
        backend: ['nextjs', 'openai'],
        database: ['convex'],
        other: ['aws']
      }
    },
  ];

  const ProjectGrid = ({ images, onImageClick }: { images: { src: string; title: string }[]; onImageClick: (image: { src: string; title: string }) => void }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-102"
            onClick={() => onImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.title}
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover transition-all duration-300 group-hover:shadow-xl"
            />
            <div 
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
            >
              <p className="text-white text-lg font-medium">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const ProjectWithRightContent = ({ project }: { project: Project }) => {
    const contentRef = useRef(null);
    const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
    const hasAnimatedRef = useRef(false);
    
    useEffect(() => {
      if (isContentInView) {
        hasAnimatedRef.current = true;
      }
    }, [isContentInView]);

    const animations = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
      hiddenRight: { opacity: 0, x: 50 },
    };
    
    return (
      <div className="flex flex-col md:flex-row items-start justify-between mb-32 gap-8">
        <motion.div 
          className="flex flex-col w-full md:w-1/2"
          initial={hasAnimatedRef.current ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={animations}
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            {project.name}
          </h2>
          <p className="text-xl mt-4 text-gray-400">{project.date}</p>
          <p className="text-lg mt-4 whitespace-pre-line text-left">{project.description}</p>
          {project.github && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-2 hover:text-accent/80 transition-colors"
                >
                <GithubIcon className="w-5 h-5 inline mr-2" />
                  View on GitHub
                </a>
              </div>
              <div className="space-y-3 bg-neutral/20 backdrop-blur-sm p-4 rounded-lg">
                {project.techStack.frontend && (
                  <div className="flex items-center gap-3">
                    <Braces className="w-5 h-5 text-accent" />
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.map((tech) => (
                        <div key={tech} className="flex items-center gap-2 bg-neutral/30 px-3 py-2 rounded-md">
                          {techStackIcons[tech] ? (
                            <>
                              <Icon 
                                icon={techStackIcons[tech]} 
                                className="w-7 h-7 min-w-[28px] text-white" 
                              />
                              <span className="text-sm text-neutral-content/70">{tech}</span>
                            </>
                          ) : (
                            <span className="text-sm text-neutral-content/70">{tech}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.techStack.backend && (
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-accent" />
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.backend.map((tech) => (
                        <div key={tech} className="flex items-center gap-2 bg-neutral/30 px-3 py-2 rounded-md">
                          {techStackIcons[tech] ? (
                            <>
                              <Icon 
                                icon={techStackIcons[tech]} 
                                className="w-7 h-7 min-w-[28px] text-white" 
                              />
                              <span className="text-sm text-neutral-content/70">{tech}</span>
                            </>
                          ) : (
                            <span className="text-sm text-neutral-content/70">{tech}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.techStack.database && (
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-accent" />
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.database.map((tech) => (
                        <div key={tech} className="flex items-center gap-2 bg-neutral/30 px-3 py-2 rounded-md">
                          {techStackIcons[tech] ? (
                            <>
                              <Icon 
                                icon={techStackIcons[tech]} 
                                className="w-7 h-7 min-w-[28px] text-white" 
                              />
                              <span className="text-sm text-neutral-content/70">{tech}</span>
                            </>
                          ) : (
                            <span className="text-sm text-neutral-content/70">{tech}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.techStack.other && (
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-accent" />
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.other.map((tech) => (
                        <div key={tech} className="flex items-center gap-2 bg-neutral/30 px-3 py-2 rounded-md">
                          {techStackIcons[tech] ? (
                            <>
                              <Icon 
                                icon={techStackIcons[tech]} 
                                className="w-7 h-7 min-w-[28px] text-white" 
                              />
                              <span className="text-sm text-neutral-content/70">{tech}</span>
                            </>
                          ) : (
                            <span className="text-sm text-neutral-content/70">{tech}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>

        <motion.div 
          ref={contentRef}
          className="w-full md:w-1/2"
          initial={hasAnimatedRef.current ? "visible" : "hiddenRight"}
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={animations}
        >
          {project.videos && project.videos.length > 0 && (
            <div className="mb-8">
              <video
                className="rounded-lg shadow-lg w-full"
                src={project.videos[0].src}
                controls
                preload="metadata"
              />
            </div>
          )}
          <ProjectGrid
            images={project.images}
            onImageClick={handleImageClick}
          />
        </motion.div>
      </div>
    );
  };

  const ImageModal = ({ isOpen, onClose, imageSrc, imageTitle }: { isOpen: boolean; onClose: () => void; imageSrc: string; imageTitle: string }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    return createPortal(
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(5px)',
            }}
          >
            <motion.div 
              className="relative max-w-5xl w-full mx-auto p-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={imageSrc}
                  alt={imageTitle}
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                {imageTitle && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                    <h3 className="text-xl font-semibold">{imageTitle}</h3>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projects
        </h1>
      </motion.div>

      {projects.map((project, index) => (
        <ProjectWithRightContent key={index} project={project} />
      ))}

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            isOpen={!!selectedImage}
            onClose={handleCloseModal}
            imageSrc={selectedImage.src}
            imageTitle={selectedImage.title}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
