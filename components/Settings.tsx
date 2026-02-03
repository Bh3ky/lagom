'use client';

import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  Link as LinkIcon, 
  ShieldCheck, 
  BellRing, 
  CreditCard,
  Camera,
  ChevronRight,
  Plus,
  Trash2,
  ExternalLink,
  Zap,
  Palette
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'My Profile', icon: <User size={18} /> },
    { id: 'agency', label: 'Agency Info', icon: <Building2 size={18} /> },
    { id: 'integrations', label: 'Integrations', icon: <LinkIcon size={18} /> },
    { id: 'team', label: 'Team Members', icon: <ShieldCheck size={18} /> },
    { id: 'billing', label: 'Billing & Plans', icon: <CreditCard size={18} /> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold tracking-tight">System Configuration</h2>
        <p className="text-zinc-400 mt-1">Manage your agency profile, team access, and platform integrations.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="w-full lg:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200
                ${activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white'}
              `}
            >
              {tab.icon}
              <span className="font-semibold text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 glass rounded-[40px] p-10 border-white/5 min-h-[600px]">
          {activeTab === 'profile' && (
            <div className="space-y-10 animate-in fade-in duration-300">
              <div className="flex items-center gap-8">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-[40px] bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-4xl font-black border-4 border-white/10 shadow-2xl">
                    AR
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-3 bg-white text-black rounded-2xl shadow-xl hover:scale-110 transition-transform">
                    <Camera size={20} />
                  </button>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Alex Rivera</h3>
                  <p className="text-zinc-500 font-medium mt-1">Marketing Director @ Lagom Agencies</p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase rounded-full tracking-widest">Administrator</span>
                    <span className="px-3 py-1 bg-white/5 text-zinc-500 text-[10px] font-black uppercase rounded-full tracking-widest">Active</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
                  <input type="text" defaultValue="Alex Rivera" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                  <input type="email" defaultValue="alex@lagom.ai" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Timezone</label>
                  <select className="w-full bg-[#111] border border-white/10 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none">
                    <option>Pacific Time (PT) - Los Angeles</option>
                    <option>Eastern Time (ET) - New York</option>
                    <option>GMT / London</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Language</label>
                  <select className="w-full bg-[#111] border border-white/10 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end gap-4">
                <button className="px-8 py-3 rounded-2xl text-sm font-bold text-zinc-400 hover:text-white transition-colors">Discard</button>
                <button className="px-10 py-3 bg-white text-black rounded-2xl text-sm font-bold shadow-xl shadow-white/5 hover:bg-zinc-200 transition-all">Save Profile</button>
              </div>
            </div>
          )}

          {activeTab === 'agency' && (
            <div className="space-y-8 animate-in fade-in duration-300">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="text-xl font-bold">Agency Branding</h3>
                   <p className="text-sm text-zinc-500 mt-1">Customize how your client dashboards appear.</p>
                 </div>
                 <div className="flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full">
                    <Palette size={14} /> White-label Enabled
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Agency Name</label>
                      <input type="text" defaultValue="Lagom Agencies" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Primary Brand Color</label>
                      <div className="flex gap-3">
                        <div className="w-14 h-14 bg-blue-600 rounded-2xl cursor-pointer ring-4 ring-blue-500/20 shadow-lg shadow-blue-500/20"></div>
                        <div className="w-14 h-14 bg-emerald-500 rounded-2xl cursor-pointer hover:scale-110 transition-transform"></div>
                        <div className="w-14 h-14 bg-purple-600 rounded-2xl cursor-pointer hover:scale-110 transition-transform"></div>
                        <div className="w-14 h-14 bg-zinc-700 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                          <Plus size={20} className="text-zinc-400" />
                        </div>
                      </div>
                    </div>
                 </div>

                 <div className="bg-white/[0.02] border border-dashed border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-600 mb-4 border border-white/5">
                       <Building2 size={32} />
                    </div>
                    <p className="text-sm font-bold">Agency Logo</p>
                    <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">SVG, PNG (max 2MB)</p>
                    <button className="mt-6 px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-all">Upload New</button>
                 </div>
               </div>

               <div className="pt-8 border-t border-white/5">
                 <h4 className="text-sm font-bold mb-4">Domain Settings</h4>
                 <div className="glass p-6 rounded-2xl border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                       <ExternalLink size={18} />
                     </div>
                     <div>
                       <p className="text-sm font-bold">app.lagomagencies.com</p>
                       <p className="text-[10px] text-emerald-400 uppercase font-black tracking-widest">Status: Connected</p>
                     </div>
                   </div>
                   <button className="text-xs font-bold text-zinc-500 hover:text-white transition-colors">Manage DNS</button>
                 </div>
               </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <header className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Connected Platforms</h3>
                <button className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300">
                  <Plus size={18} /> Add Integration
                </button>
              </header>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: 'Meta / Instagram', icon: 'M', status: 'connected', color: 'bg-blue-600' },
                  { name: 'TikTok Ads', icon: 'T', status: 'connected', color: 'bg-zinc-900' },
                  { name: 'Google Ads', icon: 'G', status: 'disconnected', color: 'bg-white' },
                  { name: 'Snapchat', icon: 'S', status: 'connected', color: 'bg-yellow-400' },
                ].map((platform) => (
                  <div key={platform.name} className="glass p-6 rounded-[32px] border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all">
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 ${platform.color} rounded-2xl flex items-center justify-center text-xl font-black ${platform.color === 'bg-white' ? 'text-black' : 'text-white'} shadow-lg`}>
                        {platform.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{platform.name}</h4>
                        <p className={`text-[10px] font-black uppercase tracking-widest ${platform.status === 'connected' ? 'text-emerald-400' : 'text-zinc-500'}`}>
                          {platform.status}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 text-zinc-400">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="glass p-8 rounded-[32px] bg-gradient-to-br from-amber-600/5 to-transparent border-amber-500/10 mt-10">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="text-amber-400" size={24} />
                  <h4 className="font-bold">Pro Suggestion</h4>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Integrating your <span className="text-white font-bold">Google Search Console</span> would allow Gemini to analyze organic performance alongside paid campaigns for a 360° overview.
                </p>
                <button className="mt-6 text-sm font-black uppercase text-amber-400 tracking-widest hover:text-amber-300 transition-colors">Connect Search Console</button>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">Agency Personnel</h3>
                  <p className="text-sm text-zinc-500 mt-1">Manage seats and access permissions for your staff.</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                   <Plus size={18} /> Invite Member
                </button>
              </div>

              <div className="glass overflow-hidden rounded-[32px] border-white/5">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                      <th className="px-8 py-5 text-[10px] font-black uppercase text-zinc-500 tracking-widest">User</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase text-zinc-500 tracking-widest">Role</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase text-zinc-500 tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { name: 'Sarah Jenkins', email: 'sarah@lagom.ai', role: 'Strategist', color: 'bg-purple-500' },
                      { name: 'Marcus Chen', email: 'marcus@lagom.ai', role: 'Campaign Manager', color: 'bg-emerald-500' },
                      { name: 'Diana Prince', email: 'diana@lagom.ai', role: 'Viewer', color: 'bg-amber-500' },
                    ].map((user) => (
                      <tr key={user.email} className="group hover:bg-white/5 transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl ${user.color} flex items-center justify-center text-sm font-bold`}>{user.name.charAt(0)}</div>
                            <div>
                              <p className="font-bold text-sm">{user.name}</p>
                              <p className="text-xs text-zinc-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-xs font-medium text-zinc-300 bg-white/5 px-3 py-1 rounded-lg border border-white/5">{user.role}</span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="p-2 text-zinc-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                             <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-8 animate-in fade-in duration-300">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="glass p-8 rounded-[32px] bg-gradient-to-br from-blue-600/10 to-transparent border-blue-500/20">
                   <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-2">Current Plan</p>
                   <h3 className="text-3xl font-black mb-4">Agency Pro</h3>
                   <div className="flex items-baseline gap-2 mb-8">
                     <span className="text-4xl font-bold">$499</span>
                     <span className="text-zinc-500 text-sm">/ month</span>
                   </div>
                   <button className="w-full py-4 bg-white text-black font-bold rounded-2xl shadow-xl shadow-white/5">Change Plan</button>
                 </div>

                 <div className="glass p-8 rounded-[32px] border-white/5 flex flex-col justify-between">
                   <div>
                     <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-2">Usage Credits</p>
                     <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold">12,482 / 20,000</h4>
                        <span className="text-xs font-bold text-zinc-400">Monthly</span>
                     </div>
                     <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                        <div className="h-full bg-blue-500 w-[62%]"></div>
                     </div>
                   </div>
                   <button className="mt-8 text-sm font-bold text-blue-400 hover:text-blue-300 text-left">Refill Strategy Credits</button>
                 </div>
               </div>

               <div className="space-y-4 pt-4">
                 <h4 className="text-sm font-bold">Payment Methods</h4>
                 <div className="glass p-6 rounded-2xl border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-8 bg-zinc-800 rounded-md flex items-center justify-center text-[10px] font-black italic">VISA</div>
                     <div>
                       <p className="text-sm font-bold">•••• •••• •••• 4242</p>
                       <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Expires 12/26</p>
                     </div>
                   </div>
                   <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase rounded tracking-widest">Primary</span>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
