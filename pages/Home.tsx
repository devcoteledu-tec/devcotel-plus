import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Globe,
  Zap,
  BadgePercent,
  Star,
  Rocket
} from 'lucide-react';

const DraggableFeed: React.FC<{ activities: any[] }> = ({ activities }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Doubling for seamless infinite look (even though we're dragging, it helps fill space)
  const items = [...activities, ...activities, ...activities];

  useEffect(() => {
    let animationFrameId: number;
    const scroll = () => {
      if (autoScroll && scrollRef.current && !isDragging) {
        scrollRef.current.scrollTop += 0.5;
        // Reset to top for infinite loop simulation
        if (scrollRef.current.scrollTop >= scrollRef.current.scrollHeight / 2) {
          scrollRef.current.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoScroll, isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.pageY - (scrollRef.current?.offsetTop || 0));
    setScrollTop(scrollRef.current?.scrollTop || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - (scrollRef.current?.offsetTop || 0);
    const walk = (y - startY) * 1.5; // Scroll speed
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollTop - walk;
    }
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  return (
    <div 
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseEnter={() => setAutoScroll(false)}
      onMouseOut={() => setAutoScroll(true)}
      className={`absolute inset-0 z-20 overflow-hidden cursor-grab active:cursor-grabbing vertical-mask-container select-none p-4 lg:p-6 space-y-4 ${isDragging ? 'scroll-smooth' : ''}`}
      style={{ touchAction: 'none' }}
    >
      <div className="flex flex-col gap-4 py-10">
        {items.map((act, idx) => (
          <div 
            key={idx} 
            className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 w-fit transform transition-all duration-300 hover:scale-105 hover:bg-white shadow-indigo-100/20"
          >
            <div className={`${act.bg} ${act.color} p-2.5 rounded-xl shadow-inner`}>
              <act.icon size={20} fill={act.color.includes('emerald') || act.color.includes('indigo') ? 'currentColor' : 'none'} />
            </div>
            <div className="pr-6">
              <div className="text-xs font-black text-slate-900 leading-tight uppercase tracking-tight">{act.name}</div>
              <div className="text-[11px] font-bold text-slate-500 whitespace-nowrap mt-1 flex items-center gap-1.5">
                {act.action}
                <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
                <span className="text-[9px] text-slate-400">just now</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const partners = [
    { name: 'Coursera', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Coursera_logo.svg' },
    { name: 'Udemy', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg' },
    { name: 'PW Skills', logo: 'https://jobs.pwskills.com/images/PWSkills-main.png' },
    { name: 'Scaler', logo: 'https://scaler-blog-prod-wp-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/07/22113930/Scaler-HT-1-.png' },
    { name: 'Guvi', logo: 'https://www.kgkite.ac.in/demo/wp-content/uploads/2020/02/GUVI-Artboard-%E2%80%93-4.png' },
    { name: 'Entri', logo: 'https://yt3.googleusercontent.com/Z0ecUtYCdXdB54CDq28KlMnpG7e5UgYS36Dh6Jb-yiAiqk16vjDJsa-SIRVlH3jZW8-ne0BaUzc=s900-c-k-c0x00ffffff-no-rj' },
    { name: 'Unacademy', logo: 'https://www.generalatlantic.com/wp-content/uploads/2020/02/logo.png' },
    { name: 'Simplilearn', logo: 'https://mma.prnewswire.com/media/1100016/Simplilearn_Logo.jpg?p=twitter' },
  ];

  const activities = [
    { name: "Rahul S.", action: "joined MERN Batch", icon: Zap, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Sneha M.", action: "saved ₹4,500 on Scaler", icon: BadgePercent, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Amit P.", action: "unlocked 40% Group Discount", icon: TrendingUp, color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Priya R.", action: "started FinTech Project", icon: CheckCircle, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Vikram K.", action: "joined Cyber Security Elite", icon: ShieldCheck, color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Anjali D.", action: "completed Python Roadmap", icon: Sparkles, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Varsha B.", action: "joined AWS Group Buy", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Divya T.", action: "saved ₹2,800 on Entri", icon: BadgePercent, color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  const marqueeItems = [...partners, ...partners];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(99,102,241,0.08)_0,rgba(255,255,255,0)_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/pricing"
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-5 py-2.5 rounded-full text-indigo-700 text-xs font-black mb-10 animate-bounce hover:bg-indigo-100 hover:scale-105 transition-all cursor-pointer shadow-sm shadow-indigo-100"
          >
            <Sparkles size={16} />
            COMMUNITY OFFER: JOIN FOR JUST ₹299
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-[950] text-slate-900 mb-6 lg:mb-10 tracking-tight leading-[1.1]">
            Upskill for your <br /><span className="gradient-text">Dream Career</span> Together.
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto mb-10 lg:mb-14 leading-relaxed px-4 font-medium">
            Devcotel is India's smartest learning ecosystem. We cut through the noise with deep AI insights and group-buying power designed radically for your core needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              to="/courses" 
              className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-black rounded-[1.25rem] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
            >
              Explore Courses <ArrowRight size={20} />
            </Link>
            <Link 
              to="/pricing" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-black rounded-[1.25rem] border-2 border-slate-100 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
            >
              Join Community
            </Link>
          </div>

          <div className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { label: 'Verified Courses', icon: ShieldCheck },
              { label: 'Group Buying', icon: Users },
              { label: 'Hands-on Projects', icon: TrendingUp },
              { label: 'Career Growth', icon: CheckCircle },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="bg-white border border-slate-100 p-4 lg:p-6 rounded-[2rem] text-indigo-600 mb-4 shadow-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <stat.icon size={28} className="lg:w-8 lg:h-8" />
                </div>
                <span className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-widest text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Section - The Draggable Part */}
      <section className="bg-slate-50/50 py-20 lg:py-40 border-y border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            <div className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-indigo-100">
                <Users size={14} className="animate-pulse" /> Verified Social Activity
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-[950] text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                Precision Discovery. <br className="hidden sm:block" />
                <span className="text-indigo-600 italic">Grab & Scroll</span> Growth.
              </h2>
              <p className="text-base lg:text-xl text-slate-500 font-medium mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Witness real growth in real-time. Our community feed is tangible—<span className="text-slate-900 font-bold">grab the feed to the right</span> to explore what your peers are building and saving today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-center justify-center lg:justify-start">
                <a 
                  href="https://devcotel-chatbot.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] rounded-[1.25rem] hover:bg-indigo-600 transition-all duration-500 shadow-2xl shadow-slate-300"
                >
                  Start Discovery <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </a>
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                        {[1,2,3,4].map(i => (
                          <img key={i} src={`https://i.pravatar.cc/100?u=${i + 100}`} className="w-12 h-12 rounded-full border-4 border-white shadow-lg" alt="user" />
                        ))}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-[900] text-slate-900">50k+ Students</span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Members</span>
                    </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full lg:max-w-xl order-1 lg:order-2 mb-12 lg:mb-0">
              <div className="relative group mx-auto max-w-[450px] lg:max-w-none">
                <div className="relative z-10 rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white group aspect-[4/5] bg-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                    alt="Students collaborating" 
                    className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Interactive Draggable Feed Overlay */}
                  <DraggableFeed activities={activities} />

                  <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/20 to-transparent z-15 pointer-events-none"></div>
                </div>

                {/* Floating Stat Card */}
                <div className="absolute -bottom-8 -right-4 sm:bottom-12 sm:-right-12 z-30 bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-2xl border-4 border-slate-50 text-center flex flex-col items-center scale-90 sm:scale-100 animate-float-slow">
                    <div className="bg-amber-50 p-3 rounded-2xl text-amber-500 mb-3">
                        <TrendingUp size={32} />
                    </div>
                    <div className="text-3xl font-[950] text-slate-900 tracking-tighter">₹4,200</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Avg. Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Platforms Section */}
      <section className="bg-[#0f172a] py-24 lg:py-40 overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[800px] h-[300px] lg:h-[800px] bg-indigo-500/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-8 bg-indigo-500/10 px-5 py-2.5 rounded-full border border-indigo-500/20">
             <Globe className="text-indigo-400" size={20} />
             <span className="text-[10px] lg:text-xs font-black text-indigo-300 uppercase tracking-[0.4em]">Indian Educational Partners</span>
          </div>
          <h3 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">Upskill with <span className="text-indigo-400">Industry Leaders.</span></h3>
          <p className="text-slate-400 text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed">We've partnered with India's most trusted learning platforms to bring exclusive institutional-grade group discounts to individual students.</p>
        </div>
        
        <div className="logo-wall-container relative">
          <div className="marquee-row-forward py-6">
            {marqueeItems.map((partner, index) => (
              <div key={index} className="px-6">
                <div className="brand-tile bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.5rem] w-56 lg:w-80 h-32 lg:h-44 flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all duration-500 shadow-2xl">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 object-contain p-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Devcotel Edge Section */}
      <section className="py-24 lg:py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-5 py-2.5 rounded-[1rem] text-xs font-black uppercase tracking-widest mb-8 shadow-sm">
                <Sparkles size={16} className="animate-pulse" /> THE DEVCOTEL EDGE
              </div>
              <h2 className="text-4xl lg:text-7xl font-[950] text-slate-900 mb-10 leading-[1.05] tracking-tighter">
                Don't Learn Alone. <br /> 
                <span className="gradient-text">Save More, Build Faster.</span>
              </h2>
              <div className="space-y-10 lg:space-y-14">
                {[
                  { 
                    title: "Group Buying Power", 
                    desc: "Join thousands of students across top colleges to unlock bulk discounts of up to 40% on premium courses.",
                    icon: Users,
                    color: "text-indigo-600",
                    bg: "bg-indigo-50"
                  },
                  { 
                    title: "Interest-Based Projects", 
                    desc: "Don't just watch videos. Access exclusive project templates and specialized mentor groups to build real-world IP.",
                    icon: TrendingUp,
                    color: "text-emerald-600",
                    bg: "bg-emerald-50"
                  },
                  { 
                    title: "Verified Authenticity", 
                    desc: "We do the technical audit. Every partner is vetted for career outcomes, instructor quality, and real student ROI.",
                    icon: ShieldCheck,
                    color: "text-purple-600",
                    bg: "bg-purple-50"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-8 p-8 rounded-[2.5rem] transition-all duration-500 hover:bg-slate-50 group hover:-translate-y-1">
                    <div className={`flex-shrink-0 ${item.bg} ${item.color} p-5 rounded-[1.5rem] h-fit w-fit mx-auto sm:mx-0 shadow-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500`}>
                      <item.icon size={36} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h4>
                      <p className="text-lg text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative max-w-xl w-full group">
                <div className="absolute inset-0 bg-indigo-600/10 rounded-[4rem] blur-[80px] -z-10 transform translate-y-16"></div>
                <div className="relative rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[16px] border-white">
                  <img 
                    src="https://www.21kschool.com/pk/wp-content/uploads/sites/17/2024/09/Learning-Methods.png" 
                    alt="Students learning" 
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  
                  {/* Inner Content Card */}
                  <div className="absolute bottom-10 inset-x-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] text-white">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-indigo-600 p-2.5 rounded-xl">
                          {/* Fixed the missing Rocket icon error by importing it at the top */}
                          <Rocket size={24} />
                        </div>
                        <span className="text-lg font-black tracking-tight">Active Batch #942</span>
                      </div>
                      <p className="text-sm font-medium opacity-90 leading-relaxed mb-6">Currently pooling for Advanced ML Engineering Certification. Save ₹12,000.</p>
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-3">
                            {[1,2,3,4,5].map(j => (
                              <img key={j} src={`https://i.pravatar.cc/100?u=${j + 200}`} className="w-10 h-10 rounded-full border-2 border-white shadow-lg" alt="batch user" />
                            ))}
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-indigo-200">92% FULL</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
