
import React from 'react';
import { 
  Image as ImageIcon, 
  Type, 
  Search, 
  Calculator, 
  Share2, 
  Clock, 
  Zap,
  ArrowRight,
  Monitor,
  Database
} from 'lucide-react';

const tools = [
  {
    title: 'AI Image Forge',
    desc: 'Generate photorealistic ad creatives from text prompts.',
    icon: <ImageIcon size={28} />,
    color: 'from-blue-500 to-indigo-600',
    span: 'col-span-2'
  },
  {
    title: 'ROAS Predictor',
    desc: 'Calculate campaign profitability with advanced modeling.',
    icon: <Calculator size={28} />,
    color: 'from-emerald-500 to-teal-600',
    span: 'col-span-1'
  },
  {
    title: 'Content Remix',
    desc: 'Transform one blog post into 50+ social snippets.',
    icon: <Type size={28} />,
    color: 'from-purple-500 to-pink-600',
    span: 'col-span-1'
  },
  {
    title: 'Keyword Intel',
    desc: 'Deep search volume and competitor gap analysis.',
    icon: <Search size={28} />,
    color: 'from-amber-500 to-orange-600',
    span: 'col-span-2'
  },
  {
    title: 'Channel Sync',
    desc: 'Automated cross-platform posting and scheduling.',
    icon: <Share2 size={28} />,
    color: 'from-rose-500 to-red-600',
    span: 'col-span-1'
  },
  {
    title: 'Brand Monitor',
    desc: 'Real-time sentiment tracking across the web.',
    icon: <Monitor size={28} />,
    color: 'from-cyan-500 to-blue-600',
    span: 'col-span-1'
  },
  {
    title: 'CRM Connector',
    desc: 'Sync lead data directly with your preferred CRM.',
    icon: <Database size={28} />,
    color: 'from-violet-500 to-purple-600',
    span: 'col-span-1'
  }
];

const MarketingTools: React.FC = () => {
  return (
    <div className="space-y-8 pb-12 animate-in zoom-in-95 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Marketing Toolkit</h2>
          <p className="text-zinc-400 mt-1">Specialized utilities to accelerate your agency's output.</p>
        </div>
        <div className="flex gap-2">
          <div className="glass px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 border-white/10">
            <Zap size={14} className="text-blue-400" /> Professional Access
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <div 
            key={i} 
            className={`group glass rounded-[32px] p-8 border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[300px] ${tool.span}`}
          >
            {/* Background Gradient Glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity -mr-16 -mt-16`}></div>
            
            <div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-500`}>
                <div className="text-white">
                  {tool.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-6 mb-2">{tool.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[200px]">{tool.desc}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Utility v2.4</span>
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="glass p-12 rounded-[48px] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-white/5 flex flex-col md:flex-row items-center gap-12 mt-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold leading-tight">Can't find what <br/> you're looking for?</h2>
          <p className="text-zinc-400 text-lg">Suggest a custom tool or integration, and our engineering team will look into building it for the Lagom ecosystem.</p>
          <button className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-zinc-200 transition-all">
            Request Custom Tool
          </button>
        </div>
        <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
          <div className="aspect-square glass rounded-3xl border-dashed border-zinc-700 flex flex-col items-center justify-center text-zinc-500">
             <Clock size={32} />
             <span className="text-[10px] mt-2 font-bold uppercase">Planned</span>
          </div>
          <div className="aspect-square glass rounded-3xl border-dashed border-zinc-700 flex flex-col items-center justify-center text-zinc-500">
             <Zap size={32} />
             <span className="text-[10px] mt-2 font-bold uppercase">WIP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingTools;
