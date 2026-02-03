'use client';

import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  SlidersHorizontal, 
  MoreVertical, 
  Play, 
  Pause, 
  BarChart2, 
  Calendar, 
  Tag,
  Target
} from 'lucide-react';

const campaigns = [
  {
    id: '1',
    name: 'Summer Solstice Collection',
    platform: 'Instagram/Meta',
    status: 'active',
    budget: 15000,
    spent: 4200,
    roas: 4.2,
    conversion: 3.1,
    health: 'optimal',
    startDate: '2024-06-01'
  },
  {
    id: '2',
    name: 'Cyber Monday Early Bird',
    platform: 'TikTok Ads',
    status: 'active',
    budget: 25000,
    spent: 12800,
    roas: 5.8,
    conversion: 4.5,
    health: 'excellent',
    startDate: '2024-11-15'
  },
  {
    id: '3',
    name: 'Brand Awareness - EMEA',
    platform: 'Google Search',
    status: 'paused',
    budget: 8000,
    spent: 7900,
    roas: 2.1,
    conversion: 1.2,
    health: 'warning',
    startDate: '2024-05-10'
  },
  {
    id: '4',
    name: 'Retargeting: Cart Abandon',
    platform: 'Multi-channel',
    status: 'active',
    budget: 5000,
    spent: 850,
    roas: 8.4,
    conversion: 12.5,
    health: 'optimal',
    startDate: '2024-12-01'
  }
];

const Campaigns: React.FC = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Campaign Manager</h2>
          <p className="text-zinc-400 mt-1">Manage, scale, and optimize your active marketing funnels.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input 
              type="text" 
              placeholder="Filter campaigns..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95 whitespace-nowrap">
            <Plus size={20} />
            Create Campaign
          </button>
        </div>
      </header>

      <div className="flex gap-4 border-b border-white/5 pb-1 overflow-x-auto no-scrollbar">
        {['all', 'active', 'paused', 'draft'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all relative
              ${filter === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}
            `}
          >
            {tab}
            {filter === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-full shadow-[0_-4px_12px_rgba(59,130,246,0.5)]"></div>}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {campaigns.map((camp) => (
          <div 
            key={camp.id} 
            className="glass rounded-[32px] p-6 hover:bg-white/5 transition-all group border border-white/5 hover:border-white/10"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Health & Status */}
              <div className="flex items-center gap-4 w-full lg:w-auto">
                <div className={`w-3 h-3 rounded-full animate-pulse
                  ${camp.health === 'excellent' ? 'bg-emerald-400 shadow-[0_0_12px_#34d399]' : 
                    camp.health === 'optimal' ? 'bg-blue-400 shadow-[0_0_12px_#60a5fa]' : 'bg-amber-400 shadow-[0_0_12px_#fbbf24]'}
                `}></div>
                <div className="flex-1 lg:w-64">
                  <h3 className="font-bold text-lg leading-tight truncate">{camp.name}</h3>
                  <p className="text-zinc-500 text-xs mt-1 flex items-center gap-2">
                    <Tag size={12} /> {camp.platform}
                  </p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 w-full lg:w-auto px-4 lg:border-l lg:border-white/10">
                <div>
                  <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-1">Spent / Budget</p>
                  <p className="font-bold">${camp.spent.toLocaleString()} <span className="text-zinc-500 font-normal">/ ${camp.budget.toLocaleString()}</span></p>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${(camp.spent / camp.budget) * 100}%` }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-1">ROAS</p>
                  <p className="font-bold text-lg text-emerald-400">{camp.roas}x</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-1">Conv. Rate</p>
                  <p className="font-bold text-lg">{camp.conversion}%</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-1">Start Date</p>
                  <p className="font-bold text-zinc-400 flex items-center gap-2"><Calendar size={14} /> {camp.startDate}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
                <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                  <BarChart2 size={18} />
                </button>
                <button className={`p-3 border border-white/10 rounded-2xl transition-colors
                  ${camp.status === 'active' ? 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20' : 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20'}
                `}>
                  {camp.status === 'active' ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 text-zinc-400 transition-colors">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Campaign Health Insights */}
      <div className="glass rounded-[48px] p-10 bg-gradient-to-br from-indigo-600/10 via-transparent to-transparent border-white/5">
        <div className="flex items-start gap-6">
          <div className="p-4 bg-blue-500/20 rounded-3xl text-blue-400">
            <Target size={32} />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Smart Optimization Insights</h3>
            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              Our AI analysis suggests that increasing budget by 15% on the <span className="text-white font-bold">Cyber Monday</span> campaign could yield a 22% increase in ROAS based on current conversion trends.
            </p>
            <div className="flex gap-4">
              <button className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">Apply Optimization</button>
              <button className="text-sm font-bold text-zinc-500 hover:text-zinc-400 transition-colors">Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
