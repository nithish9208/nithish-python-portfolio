import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';

const Hero = () => {
  const typingTexts = [
    "Python Developer",
    "Automation Engineer",
    "SQL & Data Processing"
  ];

  const [currentText, setCurrentText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [speed, setSpeed] = React.useState(150);

  React.useEffect(() => {
    const handleTyping = () => {
      const fullText = typingTexts[currentIndex % typingTexts.length];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex(currentIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, speed]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slow" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Opportunities
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Nithishkumar K</span>
            </h1>

            <div className="h-12 mb-8">
              <span className="text-2xl md:text-3xl text-slate-400 font-medium">
                {currentText}
                <span className="animate-pulse inline-block w-1 h-8 ml-1 bg-cyan-500 align-middle"></span>
              </span>
            </div>

            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Crafting efficient automation scripts, robust data pipelines, and scalable backend solutions with a focus on performance and reliability.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-cyan-500/20"
              >
                View Projects
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-slate-700"
              >
                Download Resume
                <Download size={20} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Abstract Python Logo or Terminal Mockup */}
            <div className="relative z-10 glass-morphism p-4 rounded-3xl border-slate-800/50 shadow-2xl overflow-hidden group">
              <div className="flex items-center gap-2 mb-4 bg-slate-900/50 px-4 py-2 rounded-xl">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <span className="text-slate-500 text-xs font-mono">portfolio.py — nithish-dev</span>
              </div>
              <div className="font-mono text-sm space-y-2 p-4 overflow-hidden">
                <p className="text-cyan-400">class <span className="text-emerald-400">Developer</span>:</p>
                <p className="pl-4 text-slate-400">def __init__(self):</p>
                <p className="pl-8 text-slate-400">self.name = <span className="text-amber-400">"Nithishkumar K"</span></p>
                <p className="pl-8 text-slate-400">self.role = <span className="text-amber-400">"Python Engineer"</span></p>
                <p className="pl-8 text-slate-400">self.skills = [<span className="text-amber-400">"Python"</span>, <span className="text-amber-400">"SQL"</span>, <span className="text-amber-400">"Automation"</span>]</p>
                <p className="pl-4 text-slate-400">def build_impact(self):</p>
                <p className="pl-8 text-slate-400">return self.automate_tasks()</p>
                <p className="text-slate-500 mt-4"># Initializing...</p>
                <p className="text-emerald-400">{'>>>'} Nithish.start_coding()</p>
                <p className="text-slate-300">Status: <span className="text-cyan-400 font-bold">READY</span></p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-24 h-24 glass-morphism rounded-2xl flex items-center justify-center p-4"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-full h-full opacity-50" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-20 h-20 glass-morphism rounded-2xl flex items-center justify-center p-4"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-full h-full opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
