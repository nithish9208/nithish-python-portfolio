import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FALLBACK_SKILLS = [
  { "name": "Python", "level": 90, "color": "bg-cyan-500", "icon": "python" },
  { "name": "SQL (PostgreSQL/MySQL)", "level": 85, "color": "bg-blue-500", "icon": "postgresql" },
  { "name": "Pandas & NumPy", "level": 80, "color": "bg-emerald-500", "icon": "pandas" },
  { "name": "Git", "level": 75, "color": "bg-orange-500", "icon": "git" },
  { "name": "Excel Automation", "level": 90, "color": "bg-green-600", "icon": "excel" },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/skills')
      .then(res => {
        if (!res.ok) throw new Error('Backend unavailable');
        return res.json();
      })
      .then(data => {
        setSkills(data);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Failed to fetch skills data, using fallback static data:", err);
        setSkills(FALLBACK_SKILLS);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-24 text-center text-cyan-400">Loading Skills...</div>;
  }

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase mb-3">Technical Stack</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Mastering the <span className="text-gradient">Backend</span> Ecosystem</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              My technical foundation is built on Python and its vast ecosystem. From data manipulation with Pandas to creating efficient custom scripts, I leverage the right tools to solve complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Flask", "FastAPI", "BeautifulSoup", "Matplotlib", "Docker", "REST APIs"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 glass-morphism rounded-2xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${skill.color} shadow-[0_0_10px_rgba(0,0,0,0.5)] shadow-current`} />
                    <span className="text-white font-bold">{skill.name}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className={`h-full ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
