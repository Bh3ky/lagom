'use client';

import React from 'react';
import { 
  Users, 
  MousePointer2, 
  DollarSign, 
  Activity,
  Plus,
  Globe,
  TrendingUp,
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import MetricCard from './MetricCard';

// Simplified World Map SVG for the dashboard visualization
const WorldMapSVG = () => (
  <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 fill-zinc-700 stroke-zinc-800 stroke-[0.5]">
    <path d="M165,114c-1,1-4,1-6,2c-1,1-3,2-4,4l-3,3l-5,1c-3,0-6,1-8,2c-1,1-2,3-2,4c0,3-1,4-1,6c0,1,0,3,1,5c0,1,0,3,1,4l3,3c15,10,24,14,35,16c3,1,6,1,10,1c4,0,8-1,12-2c3-1,6-3,8-5c2-2,3-4,3-6c0-3,1-5,3-7c1-2,4-3,6-4c3-1,6-1,8-1c3,0,6,1,8,2c2,1,3,3,4,4c1,3,3,4,5,5c2,1,5,1,7,1c3,0,5-1,7-2c1-1,3-3,3-4c0-3,1-5,3-7c1-2,4-3,6-4c3-1,6-1,8-1c3,0,5,1,7,2c2,1,3,3,4,4c1,3,3,4,5,5c2,1,5,1,7,1c3,0,5-1,7-2c1-1,2-3,2-4c0-3,1-5,3-7c1-2,4-3,6-4c3-1,6-1,8-1c3,0,5,1,7,2c2,1,3,3,4,4l3,3" />
  </svg>
);

const Dashboard: React.FC = () => {
  const chartData = [
    { name: 'Mon', value: 4200 },
    { name: 'Tue', value: 3800 },
    { name: 'Wed', value: 5100 },
    { name: 'Thu', value: 4600 },
    { name: 'Fri', value: 6200 },
    { name: 'Sat', value: 5800 },
    { name: 'Sun', value: 7400 },
  ];

  // Fix: The component was truncated and lacked a default export.
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Executive Dashboard</h2>
          <p className="text-zinc-400 mt-1">Marketing performance and campaign insights at a glance.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
          <Plus size={20} /> New Campaign
        </button>
      </header>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard label="Total Impressions" value="4.8M" trend={12.5} icon={<Users />} />
        <MetricCard label="Avg. ROAS" value="5.2x" trend={8.1} icon={<TrendingUp />} />
        <MetricCard label="Total Conversions" value="12.4k" trend={-2.4} icon={<MousePointer2 />} />
        <MetricCard label="Ad Spend" value="$84.2k" trend={15.0} icon={<DollarSign />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Trend Chart */}
        <div className="lg:col-span-2 glass p-8 rounded-[40px] border-white/5">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold">Performance Pulse</h3>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Conversions vs Previous Period</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full">
              <TrendingUp size={14} /> +18.4%
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="dashboardGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff0a" />
                <XAxis dataKey="name" stroke="#525252" axisLine={false} tickLine={false} fontSize={12} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '16px', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
                  itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#dashboardGrad)"
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="glass p-8 rounded-[40px] border-white/5 flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Globe size={20} className="text-blue-400" />
              Global Traffic
            </h3>
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Live audience monitoring</p>
          </div>

          <div className="flex-1 min-h-[220px] flex items-center justify-center relative">
            <WorldMapSVG />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-16 h-16 bg-blue-500/20 rounded-full animate-ping"></div>
               <div className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/5">
            <div className="flex justify-between items-center">
              <span className="text-sm text-zinc-400">North America</span>
              <span className="text-sm font-bold">45%</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[45%]"></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-zinc-400">Europe</span>
              <span className="text-sm font-bold">32%</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-[32%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
