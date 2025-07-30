import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Coffee, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'AI/ML Development', level: 95 },
    { name: 'Python/FastAPI', level: 90 },
    { name: 'React/TypeScript', level: 88 },
    { name: 'LangGraph/LangChain', level: 92 },
    { name: 'Model Context Protocol', level: 85 },
    { name: 'System Architecture', level: 87 },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'AI Solutions Architect',
      description: 'Founded RS42 AI Solutions, focusing on custom AI agent development and MCP implementations',
      highlight: true
    },
    {
      year: '2023',
      title: 'Senior AI Engineer',
      description: 'Led development of enterprise AI systems, specializing in multi-agent architectures'
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      description: 'Built scalable web applications with integrated AI capabilities for Fortune 500 companies'
    },
    {
      year: '2021',
      title: 'Started AI Journey',
      description: 'Began exploring machine learning and neural networks, transitioning from traditional software development'
    }
  ];

  const interests = [
    { icon: <Code className="h-6 w-6" />, title: 'Open Source', description: 'Contributing to AI/ML communities' },
    { icon: <Lightbulb className="h-6 w-6" />, title: 'Innovation', description: 'Exploring bleeding-edge AI research' },
    { icon: <Coffee className="h-6 w-6" />, title: 'Coffee Brewing', description: 'Perfecting the art of pour-over' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24"
    >
      {/* Hero Section */}
      <section className="px-4 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Alex
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                AI Developer & Solutions Architect
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I build AI systems that solve real business problems. With a background in both traditional 
                software development and cutting-edge AI research, I bridge the gap between theoretical 
                possibilities and practical implementations.
              </p>
              <div className="flex items-center gap-2 text-gray-400 mb-8">
                <MapPin className="h-5 w-5" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex gap-4">
                {[
                  { icon: <Github className="h-6 w-6" />, href: '#' },
                  { icon: <Linkedin className="h-6 w-6" />, href: '#' },
                  { icon: <Twitter className="h-6 w-6" />, href: '#' },
                  { icon: <Mail className="h-6 w-6" />, href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full hover:bg-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300 text-gray-400 hover:text-cyan-400"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl text-cyan-400/30">👨‍💻</div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              {/* Floating elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `${-10 + i * 5}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="px-4 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Journey
          </motion.h2>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative ${item.highlight ? 'scale-105' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`bg-white/5 backdrop-blur-lg border ${
                  item.highlight ? 'border-cyan-500/30 bg-cyan-500/10' : 'border-white/10'
                } rounded-2xl p-6 md:p-8`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <span className={`text-2xl font-bold ${
                      item.highlight ? 'text-cyan-400' : 'text-emerald-400'
                    }`}>
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
                
                {/* Connecting line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 mb-24 bg-gradient-to-r from-gray-800/20 via-transparent to-gray-800/20 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Beyond the Code
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full mb-6 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{interest.title}</h3>
                <p className="text-gray-300">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              "AI isn't just about the algorithms—it's about understanding the problem deeply enough to know which algorithm to use."
            </h2>
            <p className="text-gray-300 text-lg">
              My approach combines technical expertise with business acumen, ensuring that every AI solution I build creates real, measurable value.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;