import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-background/50 backdrop-blur-md">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-white font-bold tracking-tight">Nithishkumar K</span>
          </div>

          <div className="flex items-center gap-8 text-slate-500 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="text-slate-500 text-sm flex items-center gap-2">
            Built with <Heart size={14} className="text-rose-500 fill-rose-500" /> using React & Tailwind
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-bold">
            © 2026 Nithishkumar K. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
