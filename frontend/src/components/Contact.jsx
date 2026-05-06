import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-slate-500 uppercase font-bold tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-slate-500 uppercase font-bold tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-500 uppercase font-bold tracking-widest ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition-all placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-500 uppercase font-bold tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition-all placeholder:text-slate-700 resize-none"
                />
              </div>
              <button disabled={status === 'sending'} type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-pink-500/20 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70">
                <Send size={20} /> {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              {status === 'error' && <p className="text-rose-500 text-sm text-center">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
