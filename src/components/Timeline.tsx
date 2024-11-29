"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Building2, GraduationCap } from "lucide-react";

const TimelineItem = ({ date, title, content, isLeft = true, icon: Icon }) => {
  const slideDirection = isLeft ? -50 : 50;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: slideDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-center"
    >
      <div className={`w-full flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-1/2 ${isLeft ? 'pr-8 text-left' : 'pl-8 text-left'}`}>
          <time className="text-sm font-mono text-accent">{date}</time>
          <div className="bg-base-200/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/20 hover:border-accent/40 mt-2">
            <div className="flex items-center gap-2 mb-3">
              <Icon className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold text-accent">{title}</h3>
            </div>
            {content}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 z-10">
            <div className="w-3 h-3 bg-accent rounded-full animate-ping"></div>
          </div>
        </div>
        
        <div className="w-1/2"></div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
          My Journey
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-accent to-secondary transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            <TimelineItem 
              date="2014 - 2018"
              title="Bachelor of Computer Science"
              icon={GraduationCap}
              content={
                <div className="text-base-content/80">
                  <p className="font-semibold">Ho Chi Minh City University of Technology (HCMUT)</p>
                  <ul className="space-y-2 mt-2">
                    <li>• Major in Software Engineering</li>
                  </ul>
                </div>
              }
            />

            <TimelineItem 
              date="2018 - 2021"
              title="Software Engineer at Zalo"
              icon={Building2}
              isLeft={false}
              content={
                <ul className="space-y-2 text-base-content/80">
                  <li>• Develop core feature in java of multi service architecture, Thrift RPC, connection pooling </li>
                  <li>• Develop service admin to monitor services health, metrics, and logs using javascript, template manager, html, css, chart</li>
                  <li>• Worked with microservices architecture and real-time communication</li>
                  <li>• Collaborated with cross-functional teams to improve app performance</li>
                </ul>
              }
            />

            <TimelineItem 
              date="2021 - Present"
              title="Freelance Software Engineer"
              icon={Rocket}
              content={
                <div className="text-base-content/80">
                  <p className="mb-4 italic text-accent/80">
                    &ldquo;Embracing the challenge of independent development, stepping out of the corporate environment to push my boundaries and take full ownership of projects.&rdquo;
                  </p>
                  <ul className="space-y-2">
                    <li>• Developed and maintained full-stack web applications using Next.js, React, and Node.js, Supabase, PostgreSQL, and Convex Database</li>
                    <li>• Implemented responsive designs and modern UI/UX practices</li>
                    <li>• Integrated AI capabilities into applications using OpenAI and other ML services</li>
                    <li>• Managed client relationships and delivered projects on schedule</li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
