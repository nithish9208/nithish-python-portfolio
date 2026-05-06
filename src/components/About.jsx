import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu, Search, GitBranch } from 'lucide-react';

const About = () => {
  const expertise = [
    {
      title: "Python Development",
      description: "Building robust backends, scripts, and applications with Python 3.x.",
      icon: <Terminal className="text-cyan-400" size={24} />,
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      title: "SQL & Data",
      description: "Writing complex queries, optimizing schemas, and managing PostgreSQL/MySQL databases.",
      icon: <Database className="text-blue-400" size={24} />,
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      title: "Process Automation",
      description: "Automating repetitive workflows using Beautiful Soup and custom scripts.",
      icon: <Cpu className="text-emerald-400" size={24} />,
      color: "from-emerald-500/20 to-emerald-500/5"
    },
    {
      title: "Data Processing",
      description: "Cleaning and transforming large datasets using Pandas and NumPy.",
      icon: <Search className="text-amber-400" size={24} />,
      color: "from-amber-500/20 to-amber-500/5"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-indigo-400 font-mono text-sm tracking-[0.2em] uppercase mb-3">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Turning Logic Into <span className="text-gradient">Efficiency</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            As a Python Developer and Automation Engineer, I specialize in bridging the gap between complex data and streamlined operations. My goal is to build tools that save time, reduce errors, and provide actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl glass-morphism relative group overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
