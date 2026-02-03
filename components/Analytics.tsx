'use client';

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  Globe, 
  Smartphone, 
  MousePointer2, 
  Eye, 
  Download,
  Calendar,
  Zap
} from 'lucide-react';

const trendData = [
  { date: 'Oct 01', current: 4000, previous: 3200 },
  { date: 'Oct 05', current: 3000, previous: 3500 },
  { date: 'Oct 10', current: 6000, previous: 4800 },
  { date: 'Oct 15', current: 4780, previous: 5100 },
  { date: 'Oct 20', current: 5890, previous: 4200 },
  { date: 'Oct 25', current: 7390, previous: 6100 },
  { date: 'Oct 30', current: 8490, previous: 7800 },
];

const platformData = [
  { name: 'Instagram', value: 4500, color: '#ec4899' },
  { name: 'TikTok', value: 5200, color: '#8b5cf6' },
  { name: 'YouTube', value: 2100, color: '#ef4444' },
  { name: 'Snapchat', value: 1200, color: '#eab308' },
];

const conversionPath = [
  { step: 'Impressions', count: 1200000, percent: 100 },
  { step: 'Clicks', count: 48000, percent: 4 },
  { step: 'Cart Add', count: 12000, percent: 25 },
  { step: 'Checkout', count: 4200, percent: 35 },
  { step: 'Success', count: 3800, percent: 90 },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 pb-12 animate-in fade-in zoom-in-95 duration-700">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Performance Deep-Dive</h2>
          <p className="text-zinc-400 mt-1">Real-time attribution and cross-platform conversion metrics.</p>
        </div>
        <div className="flex gap-4">
          <button className="glass px-6 py-3 rounded-2xl flex items-center gap-2 text-zinc-400 hover:text-white border-white/10 transition-colors">
            <Calendar size={18} /> Last 30 Days
          </button>
          <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-bold transition-all border border-white/10">
            <Download size={18} /> Export Data
          </button>
        </div>
      </header>

      {/* KPI Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-8 rounded-[40px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
            <Eye size={64} />
          </div>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Total Impressions</p>
          <h3 className="text-4xl font-black mt-2">1,248,391</h3>
          <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-bold">
            <TrendingUp size={16} /> +14.2% vs prev. month
          </div>
        </div>
        <div className="glass p-8 rounded-[40px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
            <MousePointer2 size={64} />
          </div>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Direct Clicks</p>
          <h3 className="text-4xl font-black mt-2">48,291</h3>
          <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-bold">
            <TrendingUp size={16} /> +8.5% vs prev. month
          </div>
        </div>
        <div className="glass p-8 rounded-[40px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
            <Globe size={64} />
          </div>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Avg. ROAS</p>
          <h3 className="text-4xl font-black mt-2">4.82x</h3>
          <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-bold">
            <TrendingUp size={16} /> +2.1% vs prev. month
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Growth Chart */}
        <div className="lg:col-span-2 glass p-8 rounded-[48px]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Conversion Growth Trend</h3>
            <div className="flex gap-2">
               <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div> Current
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-zinc-600">
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div> Previous
               </div>
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorCur" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff0a" />
                <XAxis dataKey="date" stroke="#525252" axisLine={false} tickLine={false} />
                <YAxis stroke="#525252" axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171717', border: '1px solid #333', borderRadius: '16px' }}
                />
                <Area type="monotone" dataKey="previous" stroke="#333" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                <Area type="monotone" dataKey="current" stroke="#3b82f6" fill="url(#colorCur)" strokeWidth={4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Platform Share */}
        <div className="glass p-8 rounded-[48px] flex flex-col">
          <h3 className="text-xl font-bold mb-8">Channel Share</h3>
          <div className="flex-1 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 space-y-3">
            {platformData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-zinc-400 font-bold">{item.name}</span>
                </div>
                <span className="font-black">${item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <div className="glass p-10 rounded-[48px]">
          <h3 className="text-xl font-bold mb-10">Sales Lifecycle Funnel</h3>
          <div className="space-y-6">
            {conversionPath.map((step, i) => (
              <div key={step.step} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-zinc-300">{step.step}</span>
                  <span className="text-xs font-black bg-white/5 px-2 py-1 rounded-lg text-blue-400">{step.percent}% drop</span>
                </div>
                <div className="h-4 w-full bg-zinc-900 rounded-2xl overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                    style={{ width: `${100 - (i * 15)}%`, opacity: 1 - (i * 0.15) }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase">Volume: {step.count.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="glass p-10 rounded-[48px] bg-gradient-to-br from-purple-600/10 to-transparent border-purple-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold">Neural Insights</h3>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Our neural network detected an unusual correlation between <span className="text-purple-400 font-bold">TikTok engagement</span> and <span className="text-white font-bold">Direct Google Search</span> traffic between 8 PM and 11 PM EST.
            </p>
            <div className="mt-8 p-6 bg-white/5 rounded-3xl border border-white/5">
              <p className="text-sm text-zinc-400 font-medium italic">
                "Suggestion: Shift 10% of display budget to TikTok nocturnal placements to capitalize on the late-night discovery phase."
              </p>
            </div>
          </div>
          <button className="mt-10 w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-purple-500/20">
            Automate This Strategy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
