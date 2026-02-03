import Link from 'next/link';
import { Bell, Search } from 'lucide-react';
import { AppRoute } from '../types';

const AppHeader = () => {
  return (
    <div className="flex justify-end items-center gap-6 mb-12 sticky top-0 z-40 py-4 bg-[#030303]/80 backdrop-blur-md">
      <div className="relative flex-1 max-w-md hidden md:block">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          size={18}
        />
        <input
          type="text"
          placeholder="Search campaigns, analytics, docs..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
        />
      </div>

      <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors relative">
        <Bell size={20} className="text-zinc-400" />
        <span className="absolute top-3 right-3 w-2 h-2 bg-blue-500 rounded-full"></span>
      </button>

      <Link
        href={AppRoute.Settings}
        className="flex items-center gap-3 pl-4 border-l border-white/10 hover:opacity-80 transition-opacity"
      >
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold">Alex Rivera</p>
          <p className="text-[10px] text-zinc-500 uppercase font-black">
            Marketing Director
          </p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-sm font-bold border-2 border-white/10">
          AR
        </div>
      </Link>
    </div>
  );
};

export default AppHeader;
