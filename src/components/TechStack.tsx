import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'MCP', category: 'Protocol', color: 'text-indigo-400' },
    { name: 'LangGraph', category: 'Framework', color: 'text-purple-400' },
    { name: 'OpenAI', category: 'AI Model', color: 'text-blue-400' },
    { name: 'Anthropic', category: 'AI Model', color: 'text-pink-400' },
    { name: 'React', category: 'Frontend', color: 'text-blue-300' },
    { name: 'Python', category: 'Backend', color: 'text-violet-400' },
    { name: 'FastAPI', category: 'API', color: 'text-indigo-300' },
    { name: 'PostgreSQL', category: 'Database', color: 'text-indigo-400' },
    { name: 'Docker', category: 'DevOps', color: 'text-purple-300' },
    { name: 'AWS', category: 'Cloud', color: 'text-pink-300' },
    { name: 'Supabase', category: 'Backend', color: 'text-violet-300' },
    { name: 'TypeScript', category: 'Language', color: 'text-blue-400' },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-gray-800/20 via-transparent to-gray-800/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Technologies I Work With
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Orbital animation container */}
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer">
                  <div className={`text-lg font-semibold ${tech.color} mb-1`}>
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {tech.category}
                  </div>
                  
                  {/* Hover tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    Click to see projects using {tech.name}
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  tech.color.includes('indigo') ? 'from-indigo-500/20 to-indigo-500/5' :
                  tech.color.includes('purple') ? 'from-purple-500/20 to-purple-500/5' :
                  tech.color.includes('blue') ? 'from-blue-500/20 to-blue-500/5' :
                  tech.color.includes('pink') ? 'from-pink-500/20 to-pink-500/5' :
                  tech.color.includes('violet') ? 'from-violet-500/20 to-violet-500/5' :
                  'from-gray-500/20 to-gray-500/5'
                } rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-lg`} />
              </motion.div>
            ))}
          </div>
          
          {/* Background geometric patterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 border border-indigo-400/10 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 30 + i * 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;