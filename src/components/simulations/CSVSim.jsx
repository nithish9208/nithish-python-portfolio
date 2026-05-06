import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileSpreadsheet, RefreshCw, CheckCircle, Download, Trash2 } from 'lucide-react';

const CSVSim = () => {
  const [status, setStatus] = useState('idle'); // idle, processing, done
  const [data, setData] = useState([]);

  const rawData = [
    { id: 1, email: 'john@example.com', name: 'John Doe', city: 'Chennai', date: '2026-05-01' },
    { id: 2, email: 'john@example.com', name: 'John Doe', city: 'Chennai', date: '2026-05-01' }, // duplicate
    { id: 3, email: 'sara@test.com', name: 'Sara Connor', city: 'Bangalore', date: '2026-05-02' },
    { id: 4, email: 'mike@dev.io', name: 'Mike Ross', city: 'Mumbai', date: '2026-05-03' },
    { id: 5, email: 'sara@test.com', name: 'Sara Connor', city: 'Bangalore', date: '2026-05-02' }, // duplicate
  ];

  const handleProcess = () => {
    setStatus('processing');
    setTimeout(() => {
      // Simulation of removing duplicates
      const unique = rawData.filter((v, i, a) => a.findIndex(t => t.email === v.email) === i);
      setData(unique);
      setStatus('done');
    }, 2500);
  };

  const reset = () => {
    setStatus('idle');
    setData([]);
  };

  return (
    <div className="w-full h-[500px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col">
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
            <FileSpreadsheet size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-sm">DataCleaner Pro</span>
        </div>
        {status === 'done' && (
          <button onClick={reset} className="text-slate-500 hover:text-white transition-colors">
            <Trash2 size={16} />
          </button>
        )}
      </div>

      <div className="flex-1 p-6 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-slate-900 rounded-3xl border-2 border-slate-700 flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet size={32} className="text-emerald-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Process Sales Dataset</h4>
              <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">Click below to start cleaning and deduplicating the dataset.</p>
              <button 
                onClick={handleProcess}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20"
              >
                Start Processing
              </button>
            </motion.div>
          )}

          {status === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-4 border-emerald-500/20 border-t-emerald-500 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <RefreshCw size={32} className="text-emerald-500 animate-pulse" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Processing Data...</h4>
              <div className="w-64 h-1.5 bg-slate-900 rounded-full mx-auto overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5 }}
                  className="h-full bg-emerald-500"
                />
              </div>
              <p className="text-slate-500 text-xs mt-4 font-mono">Removing duplicates • Formatting dates • Normalizing strings</p>
            </motion.div>
          )}

          {status === 'done' && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h5 className="text-emerald-400 font-bold text-sm">Processing Complete!</h5>
                  <p className="text-emerald-400/60 text-xs">Removed 2 duplicate entries. Cleaned 5 total rows.</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <div className="px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Preview: Cleaned_Output.csv</span>
                  <span className="text-[10px] text-emerald-500 font-mono">3 Entries</span>
                </div>
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-800 text-slate-400">
                    <tr>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">City</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {data.map((row) => (
                      <tr key={row.id} className="text-slate-300">
                        <td className="px-4 py-3">{row.email}</td>
                        <td className="px-4 py-3">{row.name}</td>
                        <td className="px-4 py-3">{row.city}</td>
                        <td className="px-4 py-3 font-mono">{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button className="w-full bg-slate-100 hover:bg-white text-slate-950 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                <Download size={20} /> Download Cleaned CSV
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CSVSim;
