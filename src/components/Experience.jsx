import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Python & Data Operations Intern",
      company: "RR IT Solutions",
      period: "2023 - Present",
      description: "Spearheading automation initiatives and data pipeline optimization for client datasets.",
      highlights: [
        "Developed automation scripts reducing manual data entry by 70%",
        "Optimized SQL queries for reporting workflows, improving performance by 40%",
        "Implemented Python-based data cleaning pipelines for messy CSV datasets",
        "Automated reporting workflows using Pandas and Matplotlib"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-emerald-400 font-mono text-sm tracking-[0.2em] uppercase mb-3">Career Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional <span className="text-gradient">Experience</span></h3>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800" />
              
              <div className={`md:flex items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-[45%]">
                  <div className="glass-morphism p-8 rounded-3xl border-slate-800/50 hover:border-emerald-500/30 transition-colors group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <p className="text-emerald-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-3">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-300">
                          <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-ml-4 w-8 h-8 rounded-full bg-slate-900 border-4 border-slate-800 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                
                <div className="md:w-[45%]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
