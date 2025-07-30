import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Globe, Link as LinkIcon, Zap, BarChart, Target, ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Custom AI Agents",
      description: "Intelligent agents that understand context, reason through problems, and take autonomous actions",
      features: ["Multi-agent workflows", "Tool integration", "Memory systems", "Custom training"],
      priceRange: "$5,000 - $25,000"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web Applications",
      description: "Full-stack applications with AI-powered features and modern user interfaces",
      features: ["React/TypeScript", "Real-time features", "API integration", "Responsive design"],
      priceRange: "$3,000 - $15,000"
    },
    {
      icon: <LinkIcon className="h-12 w-12" />,
      title: "System Integrations",
      description: "Seamlessly connect AI models with your existing business systems and workflows",
      features: ["API development", "Database integration", "Authentication", "Monitoring"],
      priceRange: "$2,000 - $12,000"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Rapid Prototypes",
      description: "Quick proof-of-concepts to validate AI solutions before full development",
      features: ["MVP development", "User testing", "Technical feasibility", "Iteration cycles"],
      priceRange: "$1,000 - $5,000"
    },
    {
      icon: <BarChart className="h-12 w-12" />,
      title: "Data Analysis Tools",
      description: "Custom analytics platforms with AI-powered insights and automated reporting",
      features: ["Data visualization", "Predictive analytics", "Custom dashboards", "Export tools"],
      priceRange: "$4,000 - $20,000"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "AI Strategy",
      description: "Consulting on AI implementation strategy and technical architecture planning",
      features: ["Technical audits", "Implementation roadmaps", "Tool selection", "Team training"],
      priceRange: "$150 - $300/hour"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "Free 30-minute consultation to understand your needs and explore possibilities"
    },
    {
      step: "02", 
      title: "Technical Planning",
      description: "Detailed project scoping, architecture design, and timeline estimation"
    },
    {
      step: "03",
      title: "Development",
      description: "Iterative development with regular check-ins and progress updates"
    },
    {
      step: "04",
      title: "Deployment",
      description: "Production deployment, testing, and handover with documentation"
    }
  ];

  const pricingOptions = [
    {
      type: "Project-Based",
      description: "Fixed scope projects with clear deliverables",
      features: ["Defined timeline", "Fixed price", "Regular updates", "Full ownership"],
      cta: "Get Quote"
    },
    {
      type: "Hourly Consulting",
      description: "Flexible engagement for ongoing support and development",
      features: ["$150-300/hour", "Flexible scheduling", "No minimum hours", "Expert advice"],
      cta: "Book Session"
    },
    {
      type: "Monthly Retainer",
      description: "Dedicated time allocation for continuous improvement",
      features: ["Priority support", "Ongoing development", "Monthly reports", "Flexible scope"],
      cta: "Discuss Needs"
    }
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
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What I Can Build
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Custom AI solutions designed to solve your specific business challenges with cutting-edge technology
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-cyan-400 mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{service.priceRange}</span>
                  <button className="text-sm text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="px-4 mb-24 bg-gradient-to-r from-gray-800/20 via-transparent to-gray-800/20 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pricing Options
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={index}
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center ${
                  index === 1 ? 'transform scale-105 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {index === 1 && (
                  <div className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-semibold rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-4 text-white">{option.type}</h3>
                <p className="text-gray-300 mb-6">{option.description}</p>
                
                <div className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 1
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-600 hover:to-emerald-600 shadow-lg hover:shadow-cyan-500/25'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}>
                  {option.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="px-4 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Work Together
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full text-white font-bold text-xl mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {/* Connecting arrow */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 transform -translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Integration */}
      <section className="px-4 mb-24 bg-gradient-to-r from-gray-800/20 via-transparent to-gray-800/20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See Similar Work
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore examples of similar projects I've built for other clients
          </motion.p>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 text-white"
          >
            View Project Case Studies
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and see how AI can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 text-white"
              >
                <Clock className="h-5 w-5" />
                Book Free Consultation
              </Link>
              
              <Link
                to="/projects"
                className="group px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-white"
              >
                <DollarSign className="h-5 w-5" />
                Get Project Quote
              </Link>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              Currently accepting new projects • January 2025 availability
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;