import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-pink-400 font-mono text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Build Something <span className="text-gradient">Extraordinary</span></h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-pink-400" />, label: "Email", value: "nithi11716@gmail.com" },
                { icon: <Phone className="text-cyan-400" />, label: "Phone", value: "+91 9787169246" },
                { icon: <MapPin className="text-emerald-400" />, label: "Location", value: "Chennai, Tamil Nadu, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 md:p-10 rounded-[2.5rem] border-slate-800/50"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-slate-500 uppercase font-bold tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-slate-500 uppercase font-bold tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-500 uppercase font-bold tracking-widest ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Collaboration"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition-all placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-500 uppercase font-bold tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition-all placeholder:text-slate-700 resize-none"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-pink-500/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
