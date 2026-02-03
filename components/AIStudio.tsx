'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  RefreshCcw,
  Lightbulb,
  Target,
  PenTool,
  Loader2
} from 'lucide-react';

const AIStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategyResult, setStrategyResult] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setStrategyResult(null);
    try {
      const response = await fetch('/api/ai/strategy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Failed to generate strategy');
      }
      setStrategyResult(data.result);
    } catch (error) {
      console.error("AI Generation failed", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex items-center gap-4 mb-10">
        <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-xl shadow-blue-500/20">
          <Sparkles className="text-white" size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">AI Strategy Studio</h2>
          <p className="text-zinc-400">Supercharge your marketing operations with Gemini-3 Pro intelligence.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="glass p-8 rounded-[32px] border border-blue-500/20 shadow-2xl shadow-blue-500/5">
            <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Brand Description / Campaign Goal</label>
            <textarea
              className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
              placeholder="e.g. A sustainable luxury clothing brand launching a summer collection for eco-conscious Gen Z..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="flex-1 bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                Generate Strategy
              </button>
              <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 text-white transition-colors">
                <RefreshCcw size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Tone', icon: <PenTool size={18}/>, value: 'Professional' },
              { label: 'Audience', icon: <Target size={18}/>, value: 'Global' },
            ].map((tool, idx) => (
              <div key={idx} className="glass p-4 rounded-2xl flex items-center gap-3">
                <div className="text-blue-400">{tool.icon}</div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-500">{tool.label}</p>
                  <p className="text-sm font-bold">{tool.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          {loading ? (
            <div className="glass rounded-[32px] p-12 h-[600px] flex flex-col items-center justify-center text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Analyzing Data & Trends</h3>
              <p className="text-zinc-400 max-w-xs">Our AI is synthesizing a custom strategy based on current market dynamics.</p>
            </div>
          ) : strategyResult ? (
            <div className="glass rounded-[32px] overflow-hidden">
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Lightbulb className="text-amber-400" size={24} />
                  Strategy Output
                </h3>
                <button 
                  onClick={() => copyToClipboard(JSON.stringify(strategyResult, null, 2))}
                  className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied' : 'Export Strategy'}
                </button>
              </div>
              <div className="p-8 space-y-8 h-[600px] overflow-y-auto">
                <section>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Executive Summary</h4>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {strategyResult.executiveSummary}
                  </p>
                </section>

                <div className="grid grid-cols-2 gap-8">
                  <section>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-purple-400 mb-4">Target Segments</h4>
                    <ul className="space-y-3">
                      {strategyResult.targetAudience?.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-4">Viral Hooks</h4>
                    <ul className="space-y-3">
                      {strategyResult.strategicHooks?.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-zinc-400 italic">
                          "{item}"
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <section>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-400 mb-4">Suggested Content Roadmap</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {strategyResult.contentCalendar?.map((day: any, i: number) => (
                      <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <p className="text-[10px] font-bold text-zinc-500 uppercase">{day.day} • {day.platform}</p>
                        <p className="text-sm font-semibold mt-1">{day.topic}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          ) : (
            <div className="glass rounded-[32px] p-12 h-[600px] flex flex-col items-center justify-center text-center opacity-40 grayscale pointer-events-none">
              <Sparkles className="text-zinc-600 mb-6" size={64} />
              <h3 className="text-2xl font-bold mb-2">Awaiting Instructions</h3>
              <p className="text-zinc-500 max-w-xs">Define your goals on the left to activate the AI marketing strategist.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIStudio;
