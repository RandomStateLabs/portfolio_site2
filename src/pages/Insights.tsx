import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Play, BookOpen, Code, Video, FileText } from 'lucide-react';

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Tutorials', 'MCP Guides', 'AI Agents', 'Videos', 'Case Studies'];
  
  const insights = [
    {
      type: 'Tutorial',
      title: "Building Production-Ready AI Agents with MCP",
      description: "Complete guide to implementing Model Context Protocol for seamless AI agent communication",
      readTime: "15 min read",
      date: "2 days ago",
      category: "MCP Guides",
      featured: true,
      icon: <Code className="h-5 w-5" />
    },
    {
      type: 'Video',
      title: "Complete LangGraph Tutorial: Multi-Agent Systems",
      description: "Deep dive into building complex multi-agent workflows with LangGraph framework",
      duration: "24:30",
      date: "1 week ago",
      category: "Videos",
      featured: true,
      icon: <Play className="h-5 w-5" />
    },
    {
      type: 'Blog',
      title: "Integrating OpenAI with Custom Business Logic",
      description: "Practical approaches to connecting AI models with existing enterprise systems",
      readTime: "8 min read",
      date: "2 weeks ago",
      category: "Tutorials",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      type: 'Case Study',
      title: "AI Research Assistant: From Concept to Production",
      description: "Detailed breakdown of building a multi-agent research system for enterprise clients",
      readTime: "12 min read",
      date: "3 weeks ago",
      category: "Case Studies",
      icon: <FileText className="h-5 w-5" />
    },
    {
      type: 'Tutorial',
      title: "Advanced Prompt Engineering Techniques",
      description: "Professional strategies for optimizing AI model responses and reducing hallucinations",
      readTime: "10 min read",
      date: "1 month ago",
      category: "AI Agents",
      icon: <Code className="h-5 w-5" />
    },
    {
      type: 'Video',
      title: "Setting Up MCP Servers: Complete Walkthrough",
      description: "Step-by-step video guide for implementing custom MCP server configurations",
      duration: "18:45",
      date: "1 month ago",
      category: "MCP Guides",
      icon: <Video className="h-5 w-5" />
    }
  ];

  const filteredInsights = activeFilter === 'All' 
    ? insights 
    : insights.filter(insight => insight.category === activeFilter);

  const featuredContent = insights.find(insight => insight.featured);
  const regularContent = insights.filter(insight => !insight.featured);

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
            AI Development Insights
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exploring the cutting edge of AI implementation through tutorials, guides, and real-world case studies
          </motion.p>
        </div>
      </section>

      {/* Featured Content */}
      {featuredContent && (
        <section className="px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  {featuredContent.icon}
                  <span className="text-sm font-medium">{featuredContent.type}</span>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
                  Featured
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {featuredContent.title}
              </h2>
              <p className="text-gray-300 mb-6 text-lg max-w-3xl">
                {featuredContent.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredContent.readTime || featuredContent.duration}
                </span>
                <span>{featuredContent.date}</span>
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Read Full Article
              </button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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

      {/* Content Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredInsights.map((insight, index) => (
              <motion.article
                key={insight.title}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    {insight.icon}
                    <span className="text-sm font-medium">{insight.type}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {insight.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {insight.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {insight.readTime || insight.duration}
                  </span>
                  <span>{insight.date}</span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.article>
            ))}
          </motion.div>
          
          {filteredInsights.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-400">No insights found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Stay Updated with AI Insights
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get notified when I publish new tutorials, guides, and case studies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Insights;