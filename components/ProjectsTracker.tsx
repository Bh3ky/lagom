
import React from 'react';
import { 
  MoreHorizontal, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Filter,
  Plus,
  // Fix: Added missing FolderKanban import
  FolderKanban
} from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Nike Summer Drop 2025',
    client: 'Nike Global',
    status: 'In Progress',
    progress: 65,
    due: 'Oct 12, 2025',
    team: ['AR', 'KD', 'SJ'],
    priority: 'High'
  },
  {
    id: 2,
    name: 'Starbucks Rewards Overhaul',
    client: 'Starbucks EMEA',
    status: 'Review',
    progress: 90,
    due: 'Sep 30, 2025',
    team: ['AR', 'PL'],
    priority: 'Medium'
  },
  {
    id: 3,
    name: 'Tesla Cyber-Truck Promo',
    client: 'Tesla Inc.',
    status: 'Planning',
    progress: 15,
    due: 'Nov 05, 2025',
    team: ['SJ', 'KD'],
    priority: 'Low'
  },
  {
    id: 4,
    name: 'Patagonia Eco-Summit',
    client: 'Patagonia',
    status: 'In Progress',
    progress: 42,
    due: 'Dec 01, 2025',
    team: ['PL', 'AR', 'SJ'],
    priority: 'High'
  }
];

const ProjectsTracker: React.FC = () => {
  return (
    <div className="space-y-8 pb-12 animate-in slide-in-from-right-8 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Active Projects</h2>
          <p className="text-zinc-400 mt-1">Managing {projects.length} concurrent agency workflows.</p>
        </div>
        <div className="flex gap-4">
          <button className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-zinc-400 hover:text-white border-white/10 transition-colors">
            <Filter size={18} /> Filter
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            <Plus size={20} /> New Project
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="glass p-6 rounded-3xl border-dashed border-zinc-800 flex flex-col items-center justify-center text-zinc-500 group cursor-pointer hover:border-blue-500/50 hover:bg-blue-500/5 transition-all h-[320px]">
           <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
             <Plus size={24} />
           </div>
           <p className="font-bold">Add New Project</p>
           <p className="text-xs mt-1">Start a fresh workspace</p>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="glass p-8 rounded-[32px] border-white/5 flex flex-col justify-between hover:bg-white/5 transition-colors h-[320px] group relative">
            <div className="absolute top-8 right-8 text-zinc-600 hover:text-white cursor-pointer">
              <MoreHorizontal size={20} />
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                {project.status === 'In Progress' && <Clock size={14} className="text-blue-400" />}
                {project.status === 'Review' && <CheckCircle2 size={14} className="text-emerald-400" />}
                {project.status === 'Planning' && <AlertCircle size={14} className="text-amber-400" />}
                <span className={`text-[10px] font-black uppercase tracking-widest ${
                  project.status === 'In Progress' ? 'text-blue-400' : 
                  project.status === 'Review' ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 leading-tight group-hover:text-blue-400 transition-colors">{project.name}</h3>
              <p className="text-zinc-500 text-sm font-medium">{project.client}</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-zinc-400">Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-1000" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex -space-x-2">
                  {project.team.map((initials, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold">
                      {initials}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold text-blue-400">
                    +2
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase">Deadline</p>
                  <p className="text-xs font-bold flex items-center gap-1 mt-1">
                    <Calendar size={12} className="text-zinc-500" />
                    {project.due}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass p-8 rounded-[32px] overflow-hidden">
        <h3 className="text-xl font-bold mb-6">Recent Deliverables</h3>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
                  <FolderKanban size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Campaign Assets - V3 Final.zip</h4>
                  <p className="text-[10px] text-zinc-500 uppercase mt-1">Modified 2h ago • 482 MB</p>
                </div>
              </div>
              <button className="text-xs font-bold text-blue-400 px-4 py-2 rounded-lg bg-blue-400/10 hover:bg-blue-400 hover:text-white transition-all">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsTracker;
