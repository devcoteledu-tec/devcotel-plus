
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  ArrowUpRight, 
  Globe, 
  Shield, 
  Database, 
  Cpu, 
  BrainCircuit 
} from 'lucide-react';

const Community: React.FC = () => {
  const activeGroups = [
    { 
      id: 1, 
      name: 'Cyber Security Elite', 
      members: 342, 
      active: true, 
      topic: 'Cyber Security',
      icon: Shield,
      color: 'text-rose-500',
      bgColor: 'bg-rose-50',
      path: '/group-discounts'
    },
    { 
      id: 2, 
      name: 'Data Science Collective', 
      members: 512, 
      active: true, 
      topic: 'Data Science',
      icon: Database,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      path: 'https://devcotel-chatbot.vercel.app/'
    },
    { 
      id: 3, 
      name: 'ML Research Guild', 
      members: 284, 
      active: true, 
      topic: 'Machine Learning',
      icon: Cpu,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      path: '/group-discounts'
    },
    { 
      id: 4, 
      name: 'AI Frontiers Group', 
      members: 890, 
      active: true, 
      topic: 'Artificial Intelligence',
      icon: BrainCircuit,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
      path: '/group-discounts'
    },
  ];

  return (
    <div className="py-24 bg-[#fbfaf8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Globe size={14} /> Collective Intelligence
          </div>
          <h1 className="text-5xl font-[900] text-slate-900 mb-6 tracking-tight">
            The Devcotel <span className="text-indigo-600">Ecosystem.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Join thousands of students across India pooling their power to learn high-demand technologies and unlock group buying discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Feed area */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={200} />
              </div>
              <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                <div className="bg-indigo-600 p-5 rounded-[1.5rem] text-white shadow-xl shadow-indigo-200">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-[900] text-slate-900 mb-4 tracking-tight">Verified Group Buying</h3>
                  <p className="text-slate-500 font-medium mb-8 leading-relaxed text-lg">
                    Our platform ensures all group buys are processed securely. Once a group hits its target, we negotiate the best deal directly with providers for maximum student ROI.
                  </p>
                  <Link 
                    to="/group-discounts" 
                    className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all gap-2 shadow-xl shadow-slate-200"
                  >
                    How it works <Zap size={18} fill="currentColor" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Active Learning Groups</h3>
                <span className="text-xs font-bold text-slate-400 bg-white border border-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Live across India
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeGroups.map((group) => (
                  <Link 
                    key={group.id} 
                    to={group.path}
                    className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-indigo-200 transition-all flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-indigo-50"
                  >
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${group.bgColor} ${group.color}`}>
                          <group.icon size={24} />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full animate-pulse ${group.active ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Now</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">{group.topic}</span>
                      <h4 className="text-xl font-black text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">{group.name}</h4>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <p className="text-sm font-bold text-slate-500 flex items-center gap-2">
                        <Users size={16} /> {group.members} members
                      </p>
                      <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-indigo-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap size={80} fill="white" />
              </div>
              <h3 className="text-xl font-black mb-8 flex items-center gap-3 relative z-10">
                <Zap className="text-indigo-400" />
                Latest Updates
              </h3>
              <div className="space-y-8 relative z-10">
                {[
                  { text: "Cyber Security Elite closed! 250 students saved ₹4,200 each.", time: "2h ago" },
                  { text: "New project mentorship group starting for AI/ML on Monday.", time: "5h ago" },
                  { text: "Data Science group buy needs 12 more members for 35% discount.", time: "1d ago" }
                ].map((update, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 bg-indigo-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-100 leading-relaxed mb-1">{update.text}</p>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{update.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Member Benefits</h3>
              <ul className="space-y-6">
                {[
                  { text: "Exclusive WhatsApp Communities", icon: MessageSquare },
                  { text: "Direct doubt sessions", icon: ShieldCheck },
                  { text: "Peer code reviews", icon: Zap },
                  { text: "Priority project support", icon: ArrowUpRight }
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-600">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                      <benefit.icon size={16} />
                    </div>
                    <span className="text-sm font-bold">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
