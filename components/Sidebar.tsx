'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Megaphone, 
  Sparkles, 
  BarChart3, 
  Settings, 
  LogOut,
  Zap,
  Wrench,
  FolderKanban,
  LifeBuoy
} from 'lucide-react';
import { NavItem, AppRoute } from '../types';
import { isPathActive } from '../lib/navigation';

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: AppRoute.Dashboard },
  { id: 'campaigns', label: 'Campaigns', icon: <Megaphone size={20} />, path: AppRoute.Campaigns },
  { id: 'ai-studio', label: 'AI Studio', icon: <Sparkles size={20} />, path: AppRoute.AIStudio },
  { id: 'tools', label: 'Marketing Tools', icon: <Wrench size={20} />, path: AppRoute.MarketingTools },
  { id: 'projects', label: 'Projects', icon: <FolderKanban size={20} />, path: AppRoute.Projects },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} />, path: AppRoute.Analytics },
  { id: 'help', label: 'Help Center', icon: <LifeBuoy size={20} />, path: AppRoute.Help },
  { id: 'settings', label: 'Settings', icon: <Settings size={20} />, path: AppRoute.Settings },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen glass border-r border-white/10 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Zap className="text-white" fill="white" size={24} />
        </div>
        <h1 className="text-2xl font-semibold italic tracking-tighter">Lagom<span className="text-blue-500 not-italic">.</span></h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
              isPathActive(pathname, item.path)
                ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className="transition-transform group-hover:scale-110">{item.icon}</span>
            <span className="font-medium whitespace-nowrap">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-white/5">
        <div className="bg-white/5 rounded-2xl p-4 mb-4">
          <p className="text-xs text-zinc-500 uppercase font-bold mb-2">Agency Plan</p>
          <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-3/4"></div>
          </div>
          <p className="text-[10px] text-zinc-400 mt-2">75% of resources used</p>
        </div>
        <button className="flex items-center gap-4 px-4 py-3 w-full text-zinc-400 hover:text-red-400 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
