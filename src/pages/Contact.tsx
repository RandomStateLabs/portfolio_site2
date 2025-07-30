import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageCircle, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "alex@rs42ai.com",
      subtext: "Response within 24 hours"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Preferred Communication",
      details: "Email or scheduled calls",
      subtext: "I don't use instant messaging for work"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Availability",
      details: "Currently accepting new projects",
      subtext: "Starting January 2025"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Time Zone",
      details: "Pacific Time (PST/PDT)",
      subtext: "UTC-8/-7"
    }
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Most AI projects take 2-8 weeks depending on complexity. I provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you work with startups or only enterprises?",
      answer: "I work with both! From early-stage startups to Fortune 500 companies. What matters is having a clear problem to solve."
    },
    {
      question: "What's included in your pricing?",
      answer: "All projects include development, testing, deployment, documentation, and 2 weeks of post-launch support."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. I specialize in connecting AI capabilities with existing business systems and databases."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, I offer maintenance retainers and can provide training for your team to manage the systems independently."
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
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Build Something Together
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to bring your AI vision to life? Let's discuss how we can solve your challenges with cutting-edge solutions.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-6 text-white">Tell Me About Your Project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                      placeholder="Alex Johnson"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                      placeholder="alex@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    >
                      <option value="">Select type</option>
                      <option value="ai-agent">AI Agent Development</option>
                      <option value="web-app">Web Application</option>
                      <option value="integration">System Integration</option>
                      <option value="prototype">Rapid Prototype</option>
                      <option value="consulting">AI Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush job)</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="1month">1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-25k">$15,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project goals, current challenges, and what success looks like to you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Project Details
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.details}</p>
                      <p className="text-sm text-gray-400">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Integration */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center">
              <Calendar className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Schedule a Free Call</h3>
              <p className="text-gray-300 mb-6">
                Prefer to talk? Book a 30-minute consultation to discuss your project in detail.
              </p>
              <button className="w-full px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl text-white font-semibold hover:bg-white/30 transition-all duration-300">
                Book Consultation Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-3">
                  <Zap className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;