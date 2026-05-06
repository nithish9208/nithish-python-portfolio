import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserCheck, Clock, FileBarChart, Users, ArrowLeft } from 'lucide-react';

const AttendanceSim = () => {
  const [step, setStep] = useState('login'); // login, dashboard
  const [loading, setLoading] = useState(false);
  const [attendance, setAttendance] = useState([
    { id: 1, name: 'Alice Johnson', date: '2026-05-06', time: '09:00 AM', status: 'Present' },
    { id: 2, name: 'Bob Smith', date: '2026-05-06', time: '09:15 AM', status: 'Present' },
    { id: 3, name: 'Charlie Davis', date: '2026-05-06', time: '-', status: 'Absent' },
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('dashboard');
    }, 1500);
  };

  const markAttendance = () => {
    const newEntry = {
      id: attendance.length + 1,
      name: 'Nithishkumar K (You)',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Present'
    };
    setAttendance([newEntry, ...attendance]);
  };

  return (
    <div className="w-full h-[500px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
            <Users size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-sm">AttendanceSync v1.0</span>
        </div>
        {step === 'dashboard' && (
          <button 
            onClick={() => setStep('login')}
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-xs"
          >
            <ArrowLeft size={14} /> Logout
          </button>
        )}
      </div>

      <div className="flex-1 overflow-auto p-6">
        <AnimatePresence mode="wait">
          {step === 'login' ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-sm mx-auto pt-12"
            >
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">Admin Portal</h4>
                <p className="text-slate-500 text-sm">Enter your credentials to manage records</p>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 uppercase font-mono">Username</label>
                  <input 
                    type="text" 
                    defaultValue="admin_nithish"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 uppercase font-mono">Password</label>
                  <input 
                    type="password" 
                    defaultValue="••••••••"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-colors"
                  />
                </div>
                <button 
                  disabled={loading}
                  className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <LogIn size={18} /> Sign In
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Total Staff', val: '124', icon: <Users size={16} />, color: 'text-blue-400' },
                  { label: 'Present Today', val: attendance.filter(a => a.status === 'Present').length + 82, icon: <UserCheck size={16} />, color: 'text-emerald-400' },
                  { label: 'Avg Time', val: '09:05 AM', icon: <Clock size={16} />, color: 'text-amber-400' },
                ].map((s) => (
                  <div key={s.label} className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
                    <div className={`${s.color} mb-2`}>{s.icon}</div>
                    <div className="text-xl font-bold text-white">{s.val}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button 
                  onClick={markAttendance}
                  className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2"
                >
                  <UserCheck size={18} /> Mark My Attendance
                </button>
                <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                  <FileBarChart size={18} /> Generate Report
                </button>
              </div>

              {/* Table */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-800/50 text-slate-400 text-[10px] uppercase font-mono">
                    <tr>
                      <th className="px-4 py-3">Employee</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Check-in Time</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {attendance.map((row) => (
                      <motion.tr 
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={row.id} 
                        className="text-slate-300 hover:bg-slate-800/30 transition-colors"
                      >
                        <td className="px-4 py-3 font-medium">{row.name}</td>
                        <td className="px-4 py-3 font-mono text-xs">{row.date}</td>
                        <td className="px-4 py-3 font-mono text-xs">{row.time}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            row.status === 'Present' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AttendanceSim;
