import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveDemo?: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
      className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Image */}
      <div className="relative aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
            <Play className="h-8 w-8 text-indigo-400" />
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg rounded-full px-3 py-1 text-xs text-white">
          Demo Available
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-white/10 rounded-full text-xs text-indigo-400"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          {project.liveDemo && (
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white text-sm font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </button>
          )}
          {project.github && (
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-all duration-300">
              <Github className="h-4 w-4" />
              Code
            </button>
          )}
        </div>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;