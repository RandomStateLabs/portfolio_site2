import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Network, Zap, Code, Database, Cog } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';

const Home = () => {
  const buildItems = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Agents",
      description: "Custom intelligent agents with advanced reasoning and tool-use capabilities",
      demo: true
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "MCP Integration",
      description: "Model Context Protocol implementations for seamless AI system communication",
      demo: false
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Applications",
      description: "Full-stack applications powered by AI with modern interfaces",
      demo: true
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Workflow Automation",
      description: "Intelligent automation systems that learn and adapt to your processes",
      demo: false
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "API Connections",
      description: "Seamless integration between AI models and existing business systems",
      demo: false
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Rapid Prototypes",
      description: "Quick proof-of-concepts to validate AI solutions before full development",
      demo: true
    }
  ];

  const featuredProjects = [
    {
      title: "AI Research Assistant",
      description: "Multi-agent system for automated research and analysis",
      image: "/api/placeholder/400/300",
      tech: ["LangGraph", "OpenAI", "React", "Python"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Smart Document Processor",
      description: "Intelligent document parsing with custom extraction rules",
      image: "/api/placeholder/400/300",
      tech: ["Anthropic", "FastAPI", "PostgreSQL"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Workflow Automation Hub",
      description: "No-code platform for creating AI-powered business workflows",
      image: "/api/placeholder/400/300",
      tech: ["React", "Node.js", "OpenAI", "MongoDB"],
      liveDemo: "#",
      github: "#"
    }
  ];

  const insights = [
    {
      type: "blog",
      title: "Building Production-Ready AI Agents with MCP",
      readTime: "8 min read",
      date: "2 days ago"
    },
    {
      type: "video",
      title: "Complete LangGraph Tutorial: Multi-Agent Systems",
      duration: "24:30",
      date: "1 week ago"
    },
    {
      type: "tutorial",
      title: "Integrating OpenAI with Custom Business Logic",
      difficulty: "Intermediate",
      date: "2 weeks ago"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Building AI That Actually Works
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Custom AI agents, cutting-edge protocols, and enterprise solutions
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/projects"
              className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
            >
              See My Projects
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/insights"
              className="group px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Read My Insights
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What I Build Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              What I Can Build For You
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-indigo-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                {item.demo && (
                  <div className="text-sm text-cyan-400 font-medium">
                    <div className="text-sm text-indigo-400 font-medium">
                    Interactive Demo Available
                  </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Recent AI Projects I've Built
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <TechStack />

      {/* Latest Insights */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Latest AI Insights & Tutorials
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-sm text-cyan-400 font-medium mb-2 capitalize">
                  {insight.type}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {insight.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{insight.readTime || insight.duration || insight.difficulty}</span>
                  <span>{insight.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/insights"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              View All Insights
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-800/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Why Choose RS42
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh Perspective",
                description: "No legacy constraints - building with the latest AI technologies and methodologies",
                icon: <Zap className="h-8 w-8" />
              },
              {
                title: "Cutting-Edge Tech",
                description: "Latest protocols, frameworks, and AI models integrated into practical solutions",
                icon: <Cpu className="h-8 w-8" />
              },
              {
                title: "Rapid Development",
                description: "Ship fast, iterate quickly - turning ideas into working prototypes in days, not months",
                icon: <ArrowRight className="h-8 w-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full mb-6 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Available for custom AI projects starting January 2025
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                Schedule a Call
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/projects"
                className="group px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                See All Projects
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;