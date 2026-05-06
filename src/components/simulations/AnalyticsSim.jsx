import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, DollarSign, Package, PieChart, Filter } from 'lucide-react';

const AnalyticsSim = () => {
  const [region, setRegion] = useState('All');

  const data = [
    { month: 'May 01', revenue: 4500, orders: 120, region: 'North' },
    { month: 'May 02', revenue: 5200, orders: 150, region: 'South' },
    { month: 'May 03', revenue: 4800, orders: 140, region: 'North' },
    { month: 'May 04', revenue: 6100, orders: 190, region: 'East' },
    { month: 'May 05', revenue: 5900, orders: 180, region: 'West' },
    { month: 'May 06', revenue: 7200, orders: 210, region: 'South' },
  ];

  const stats = [
    { label: 'Total Revenue', value: '₹33,700', trend: '+12.5%', icon: <DollarSign size={16} />, color: 'text-emerald-400' },
    { label: 'Total Orders', value: '990', trend: '+8.2%', icon: <Package size={16} />, color: 'text-blue-400' },
    { label: 'Conversion', value: '3.2%', trend: '+2.1%', icon: <PieChart size={16} />, color: 'text-amber-400' },
  ];

  return (
    <div className="w-full h-[500px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col">
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
            <TrendingUp size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-sm">SalesInsights Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <Filter size={14} className="text-slate-500" />
          <select 
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1 text-xs text-white outline-none focus:border-blue-500 transition-colors"
          >
            <option>All Regions</option>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-auto">
        {/* KPI Row */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-start mb-2">
                <div className={`${s.color}`}>{s.icon}</div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded">{s.trend}</span>
              </div>
              <div className="text-xl font-bold text-white">{s.value}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
            <h5 className="text-xs font-bold text-slate-400 mb-4 flex items-center gap-2">
              <TrendingUp size={14} /> Revenue Growth
            </h5>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="month" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff', fontSize: '12px' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
            <h5 className="text-xs font-bold text-slate-400 mb-4 flex items-center gap-2">
              <Package size={14} /> Order Volume
            </h5>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="month" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                  />
                  <Bar dataKey="orders" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Regional Performance</h5>
            <button className="text-[10px] text-blue-400 font-bold hover:underline">Download PDF</button>
          </div>
          <div className="space-y-3">
            {[
              { region: 'North', sales: '₹12.4k', bar: '75%', color: 'bg-blue-500' },
              { region: 'South', sales: '₹15.2k', bar: '90%', color: 'bg-emerald-500' },
              { region: 'East', sales: '₹6.1k', bar: '40%', color: 'bg-amber-500' },
            ].map((r) => (
              <div key={r.region} className="space-y-1">
                <div className="flex justify-between text-[10px] text-slate-300">
                  <span>{r.region}</span>
                  <span className="font-mono">{r.sales}</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: r.bar }}
                    className={`h-full ${r.color} rounded-full`} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSim;
