'use client';

import React, { useState } from 'react';
import { Search, Book, MessageSquare, Shield, CreditCard, ChevronRight, ExternalLink } from 'lucide-react';

const categories = [
  { id: 'start', title: 'Getting Started', icon: <Book className="text-blue-400" />, count: 12 },
  { id: 'support', title: 'Agency Support', icon: <MessageSquare className="text-purple-400" />, count: 8 },
  { id: 'security', title: 'Security & Privacy', icon: <Shield className="text-emerald-400" />, count: 5 },
  { id: 'billing', title: 'Billing & Plans', icon: <CreditCard className="text-amber-400" />, count: 7 },
];

const faqs = [
  { q: 'How do I connect my TikTok Ad Manager?', a: 'Navigate to Settings > Integrations and select TikTok. Follow the OAuth prompts to authorize Lagom.' },
  { q: 'Can I invite my clients to see reports?', a: 'Yes, agency plans allow for client-view-only dashboards under the Client Management section.' },
  { q: 'What AI model powers the Strategy Studio?', a: 'Lagom OS utilizes the Gemini-3 Pro model for advanced reasoning and marketing content generation.' },
];

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">How can we help you?</h2>
        <p className="text-zinc-400 text-lg">Search our documentation or browse categories below.</p>
        <div className="relative max-w-2xl mx-auto mt-8">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500" size={24} />
          <input 
            type="text" 
            placeholder="Search for articles, guides..." 
            className="w-full bg-white/5 border border-white/10 rounded-[32px] py-6 pl-16 pr-8 text-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all border-white/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <button key={cat.id} className="glass p-8 rounded-[32px] text-left hover:bg-white/5 transition-all group border-white/5 hover:border-white/20">
            <div className="mb-6">{cat.icon}</div>
            <h3 className="text-lg font-bold mb-1">{cat.title}</h3>
            <p className="text-sm text-zinc-500">{cat.count} Articles</p>
            <div className="mt-6 flex items-center text-blue-400 text-xs font-bold uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Browse <ChevronRight size={14} />
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass p-6 rounded-2xl border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-zinc-200 group-hover:text-white">{faq.q}</h4>
                  <ChevronRight size={18} className="text-zinc-600" />
                </div>
                <p className="text-zinc-500 text-sm mt-3 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-8 rounded-[32px] bg-gradient-to-br from-blue-600/10 to-transparent border-blue-500/20">
            <h3 className="text-xl font-bold mb-4">Still need help?</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Our support team is available 24/7 for agency-tier partners.</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20">
              Open Support Ticket
            </button>
          </div>
          <div className="glass p-8 rounded-[32px] border-white/5">
            <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white flex items-center justify-between">API Reference <ExternalLink size={14} /></a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white flex items-center justify-between">Community Forum <ExternalLink size={14} /></a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white flex items-center justify-between">Release Notes <ExternalLink size={14} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
