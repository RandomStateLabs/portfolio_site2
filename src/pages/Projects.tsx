import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Agents', 'MCP', 'Web Apps', 'Automation', 'Research'];
  
  const projects = [
    {
      title: "AI Research Assistant",
      description: "Multi-agent system for automated research and analysis with real-time collaboration features",
      image: "/api/placeholder/400/300",
      tech: ["LangGraph", "OpenAI", "React", "Python"],
      category: "Agents",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Smart Document Processor",
      description: "Intelligent document parsing with custom extraction rules and batch processing",
      image: "/api/placeholder/400/300",
      tech: ["Anthropic", "FastAPI", "PostgreSQL"],
      category: "Automation",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Workflow Automation Hub",
      description: "No-code platform for creating AI-powered business workflows with visual editor",
      image: "/api/placeholder/400/300",
      tech: ["React", "Node.js", "OpenAI", "MongoDB"],
      category: "Web Apps",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "MCP Server Implementation",
      description: "Custom Model Context Protocol server for seamless AI model communication",
      image: "/api/placeholder/400/300",
      tech: ["TypeScript", "MCP", "WebSockets"],
      category: "MCP",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Knowledge Graph Builder",
      description: "Automated knowledge graph construction from unstructured data sources",
      image: "/api/placeholder/400/300",
      tech: ["Python", "Neo4j", "LangChain", "OpenAI"],
      category: "Research",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics with natural language querying and automated insights",
      image: "/api/placeholder/400/300",
      tech: ["React", "FastAPI", "Anthropic", "PostgreSQL"],
      category: "Web Apps",
      liveDemo: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24"
    >
      {/* Hero Section */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Projects & Builds
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing custom AI solutions and technical experiments that push the boundaries of what's possible
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-400">No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;