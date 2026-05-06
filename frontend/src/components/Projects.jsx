import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, Server, FileText, BarChart3, Database } from 'lucide-react';
import AttendanceSim from './simulations/AttendanceSim';
import CSVSim from './simulations/CSVSim';
import AnalyticsSim from './simulations/AnalyticsSim';
import StudentSim from './simulations/StudentSim';

const ICON_MAP = {
  Server,
  FileText,
  BarChart3,
  Database
};

const SIMULATION_MAP = {
  AttendanceSim,
  CSVSim,
  AnalyticsSim,
  StudentSim
};

const FALLBACK_PROJECTS = [
  {
    "id": "attendance",
    "title": "Employee Attendance Management",
    "category": "Automation / Backend",
    "description": "A robust system for tracking employee check-ins, generating attendance reports, and managing admin controls. Built with security and scalability in mind.",
    "icon": "Server",
    "iconColor": "text-indigo-400",
    "tags": ["Python", "SQLite", "Report Generation"],
    "simulationId": "AttendanceSim",
    "repo": "#",
    "demo": "#"
  },
  {
    "id": "csv",
    "title": "CSV Data Automation Tool",
    "category": "Data Engineering",
    "description": "Automated pipeline for cleaning, normalizing, and deduplicating large CSV datasets. Features drag-and-drop processing and intelligent duplicate detection.",
    "icon": "FileText",
    "iconColor": "text-emerald-400",
    "tags": ["Pandas", "NumPy", "Data Cleaning"],
    "simulationId": "CSVSim",
    "repo": "#",
    "demo": "#"
  },
  {
    "id": "analytics",
    "title": "Sales Data Analytics Dashboard",
    "category": "Data Visualization",
    "description": "Interactive visualization tool for sales performance metrics, region-wise analytics, and revenue forecasting using modern data stacks.",
    "icon": "BarChart3",
    "iconColor": "text-blue-400",
    "tags": ["Python", "Matplotlib", "Seaborn"],
    "simulationId": "AnalyticsSim",
    "repo": "#",
    "demo": "#"
  },
  {
    "id": "student",
    "title": "Student Record Management",
    "category": "Database / CRUD",
    "description": "A complete CRUD application for maintaining student databases, calculating grade metrics, and searching records efficiently.",
    "icon": "Database",
    "iconColor": "text-orange-400",
    "tags": ["Python", "MySQL", "GUI Development"],
    "simulationId": "StudentSim",
    "repo": "#",
    "demo": "#"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects')
      .then(res => {
        if (!res.ok) throw new Error('Backend unavailable');
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Failed to fetch projects data, using fallback static data:", err);
        setProjects(FALLBACK_PROJECTS);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-24 text-center text-blue-400">Loading Projects...</div>;
  }

  const activeProject = projects[activeTab];
  const ActiveSimulation = activeProject ? SIMULATION_MAP[activeProject.simulationId] : null;

  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-400 font-mono text-sm tracking-[0.2em] uppercase mb-3">Portfolio Showreel</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Interactive <span className="text-gradient">Projects</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience my work through real-time simulations. Each module demonstrates technical proficiency in Python development and system architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Project Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {projects.map((project, index) => {
              const IconComponent = ICON_MAP[project.icon] || Server;
              return (
                <motion.button
                  key={project.title}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-3xl transition-all border ${
                    activeTab === index 
                    ? 'bg-blue-500/10 border-blue-500/50 shadow-lg shadow-blue-500/10' 
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      activeTab === index ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <IconComponent className={project.iconColor} size={20} />
                    </div>
                    <div>
                      <h4 className={`font-bold transition-colors ${activeTab === index ? 'text-white' : 'text-slate-400'}`}>
                        {project.title}
                      </h4>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{project.category}</span>
                    </div>
                  </div>
                  <p className={`text-xs leading-relaxed transition-colors ${activeTab === index ? 'text-slate-300' : 'text-slate-500'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-800/50 text-slate-500 text-[9px] font-bold border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Simulation Display */}
          <div className="lg:col-span-8 sticky top-24">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              {/* Simulation Box */}
              <div className="relative z-10 glass-morphism rounded-[2.5rem] p-4 border-slate-800/50 shadow-2xl">
                {ActiveSimulation ? <ActiveSimulation /> : null}
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Actions */}
              <div className="flex items-center justify-between mt-8 px-4">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    <ExternalLink size={18} /> Documentation
                  </button>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-slate-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE SIMULATION ACTIVE
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
