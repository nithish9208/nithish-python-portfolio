import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Search, Edit2, Trash2, GraduationCap, Calculator, Save, X } from 'lucide-react';

const StudentSim = () => {
  const [students, setStudents] = useState([
    { id: 101, name: 'Arun Kumar', marks: { py: 85, sql: 90 }, total: 175 },
    { id: 102, name: 'Priya Dharshini', marks: { py: 92, sql: 88 }, total: 180 },
  ]);
  const [search, setSearch] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ name: '', py: '', sql: '' });

  const filteredStudents = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  const handleAdd = (e) => {
    e.preventDefault();
    const py = parseInt(formData.py) || 0;
    const sql = parseInt(formData.sql) || 0;
    const newStudent = {
      id: 100 + students.length + 1,
      name: formData.name,
      marks: { py, sql },
      total: py + sql
    };
    setStudents([...students, newStudent]);
    setFormData({ name: '', py: '', sql: '' });
    setIsAdding(false);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="w-full h-[500px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col">
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
            <GraduationCap size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-sm">EduRecord Manager</span>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-orange-500 hover:bg-orange-400 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
        >
          <UserPlus size={14} /> Add New
        </button>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:border-orange-500 outline-none transition-colors"
          />
        </div>

        <div className="flex-1 overflow-auto">
          <AnimatePresence>
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-slate-900 border border-orange-500/20 rounded-2xl p-4 mb-6 overflow-hidden"
              >
                <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] text-slate-500 uppercase font-bold">Student Name</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 uppercase font-bold">Python Marks</label>
                    <input 
                      type="number"
                      required
                      value={formData.py}
                      onChange={(e) => setFormData({...formData, py: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 uppercase font-bold">SQL Marks</label>
                    <input 
                      type="number"
                      required
                      value={formData.sql}
                      onChange={(e) => setFormData({...formData, sql: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-orange-500"
                    />
                  </div>
                  <div className="col-span-2 flex gap-3 pt-2">
                    <button type="submit" className="flex-1 bg-orange-500 text-white font-bold py-2 rounded-lg text-sm flex items-center justify-center gap-2">
                      <Save size={16} /> Save Record
                    </button>
                    <button type="button" onClick={() => setIsAdding(false)} className="px-4 bg-slate-800 text-white font-bold py-2 rounded-lg text-sm">
                      <X size={16} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-3">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => (
                <motion.div
                  layout
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl flex items-center justify-between group hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-orange-500 text-xs">
                      {s.id}
                    </div>
                    <div>
                      <h6 className="text-white font-bold text-sm">{s.name}</h6>
                      <div className="flex gap-3 text-[10px] text-slate-500 font-mono">
                        <span>PY: {s.marks.py}</span>
                        <span>SQL: {s.marks.sql}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right mr-4">
                      <div className="text-orange-500 font-bold text-sm">{s.total}</div>
                      <div className="text-[8px] text-slate-500 uppercase tracking-widest">Total</div>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
                        <Edit2 size={14} />
                      </button>
                      <button 
                        onClick={() => deleteStudent(s.id)}
                        className="p-2 bg-slate-800 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-slate-600 italic text-sm">No student records found</div>
            )}
          </div>
        </div>

        {/* Dynamic Calculation Footer */}
        <div className="bg-slate-900/80 backdrop-blur px-4 py-3 rounded-xl border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400">
            <Calculator size={14} />
            <span className="text-[10px] uppercase font-bold tracking-widest">Average Score</span>
          </div>
          <span className="text-orange-500 font-bold text-sm">
            {students.length > 0 
              ? (students.reduce((acc, curr) => acc + curr.total, 0) / (students.length * 2)).toFixed(1) 
              : 0}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentSim;
