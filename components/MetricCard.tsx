
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MetricCardProps } from '../types';

const MetricCard: React.FC<MetricCardProps> = ({ label, value, trend, icon }) => {
  const isPositive = trend >= 0;

  return (
    <div className="glass p-4 rounded-2xl group hover:border-white/20 transition-all duration-300 flex items-center gap-4">
      <div className="p-2.5 bg-white/5 rounded-xl text-blue-400 transition-colors group-hover:bg-blue-500/10 shrink-0">
        {React.cloneElement(icon as React.ReactElement, { size: 18 })}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider truncate">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl font-bold tracking-tight">{value}</h3>
          <span className={`text-[9px] font-bold flex items-center ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{trend}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
