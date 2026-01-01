
import React from 'react';
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
  Star
} from 'lucide-react';

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
    { name: "varsha B.", action: "joined AWS Group Buy", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Divya T.", action: "saved ₹2,800 on Entri", icon: BadgePercent, color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  const scrollActivities = [...activities, ...activities];
  const marqueeItems = [...partners, ...partners];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(99,102,241,0.08)_0,rgba(255,255,255,0)_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/pricing"
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-700 text-sm font-bold mb-8 animate-bounce hover:bg-indigo-100 hover:scale-105 transition-all cursor-pointer"
          >
            <Sparkles size={16} />
            Special Community Offer: Join for just ₹299
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-6 lg:mb-8 tracking-tight leading-tight">
            Upskill for your <span className="gradient-text">Dream Career</span> Together.
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 lg:mb-12 leading-relaxed px-2">
            Devcotel THE SMARTEST LEARNING ECOSYSTEM CUTS THROUGH THE NOISE . OUR TEAM AND CORE AI IS RADICALLY BIASED TOWARDS YOUR CORE NEEDS .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/courses" 
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2"
            >
              Explore Courses <ArrowRight size={20} />
            </Link>
            <Link 
              to="/pricing" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-indigo-400 transition-all flex items-center justify-center gap-2"
            >
              Join Community
            </Link>
          </div>

          <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: 'Verified Courses', icon: ShieldCheck },
              { label: 'Group Buying', icon: Users },
              { label: 'Hands-on Projects', icon: TrendingUp },
              { label: 'Career Growth', icon: CheckCircle },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-indigo-50 p-3 lg:p-4 rounded-2xl text-indigo-600 mb-3 lg:mb-4">
                  <stat.icon size={24} className="lg:w-7 lg:h-7" />
                </div>
                <span className="text-xs lg:text-base font-bold text-slate-800 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="bg-slate-50/30 py-16 lg:py-32 border-y border-slate-100 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] lg:text-[11px] font-bold uppercase tracking-wider mb-6 lg:mb-8 shadow-sm shadow-indigo-100/50">
                <Users size={14} className="animate-pulse" /> Trusted by verified Indian Learners
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-[900] text-slate-900 mb-6 lg:mb-8 leading-[1.2] lg:leading-[1.1] tracking-tight">
                Precision Discovery. <br className="hidden sm:block" />
                <span className="text-indigo-600 italic">Peer-Validated</span> Growth.
              </h2>
              <p className="text-base lg:text-xl text-slate-500 font-medium mb-10 lg:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Navigating your career path shouldn't be a solo journey. We aggregate verified insights to help you find the <span className="text-slate-900 font-bold">perfect program</span> while building deep, professional networks.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-center justify-center lg:justify-start">
                <a 
                  href="https://devcotel-chatbot.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-slate-200"
                >
                  Start Discovery <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                          <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="user" />
                        ))}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-400">Join 50k+ active students</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full lg:max-w-xl order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative group mx-auto max-w-[400px] lg:max-w-none">
                <div className="relative z-10 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white group">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                    alt="Students collaborating" 
                    className="w-full aspect-square sm:aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden vertical-mask-container">
                    <div className="marquee-vertical pointer-events-auto p-4 lg:p-6 space-y-4">
                      {scrollActivities.map((act, idx) => (
                        <div key={idx} className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 w-fit transform hover:scale-105 transition-transform cursor-pointer">
                          <div className={`${act.bg} ${act.color} p-2 rounded-xl`}>
                            <act.icon size={16} fill={act.color.includes('emerald') || act.color.includes('indigo') ? 'currentColor' : 'none'} />
                          </div>
                          <div className="pr-4">
                            <div className="text-[10px] font-black text-slate-900 leading-none">{act.name}</div>
                            <div className="text-[10px] font-medium text-slate-500 whitespace-nowrap mt-0.5">{act.action}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/10 to-transparent z-15"></div>
                </div>
                <div className="absolute -bottom-6 -right-4 sm:bottom-10 sm:-right-8 z-30 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-2xl border border-slate-50 text-center flex flex-col items-center scale-90 sm:scale-100">
                    <div className="text-amber-500 mb-1 sm:mb-2">
                        <TrendingUp size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900">₹4.2k</div>
                    <div className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Savings</div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Platforms Section */}
      <section className="bg-[#0f172a] py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 lg:mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
             <Globe className="text-indigo-400" size={18} />
             <span className="text-[9px] lg:text-[10px] font-black text-indigo-300 uppercase tracking-[0.4em]">Our Educational Network</span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Upskill with the <span className="text-indigo-400">Industry Leaders</span></h3>
          <p className="text-slate-400 text-sm lg:text-base font-medium max-w-xl mx-auto">We've partnered with India's top learning platforms to bring you exclusive group-buying discounts.</p>
        </div>
        <div className="logo-wall-container relative">
          <div className="marquee-row-forward py-4">
            {marqueeItems.map((partner, index) => (
              <div key={index} className="px-4 lg:px-6">
                <div className="brand-tile bg-white border border-white/5 p-3 lg:p-4 rounded-2xl lg:rounded-3xl w-48 lg:w-64 h-28 lg:h-36 flex items-center justify-center group cursor-pointer shadow-lg overflow-hidden">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-contain p-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 lg:mt-20 text-center relative z-10">
            <Link to="/courses" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                Explore all partners <ArrowRight size={18} />
            </Link>
        </div>
      </section>

      {/* Why Devcotel - Improved Animation Section */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column: Text & Benefits */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest mb-6 shadow-sm shadow-indigo-100">
                <Sparkles size={14} className="animate-pulse" /> The Devcotel Edge
              </div>
              <h2 className="text-4xl lg:text-6xl font-[900] text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Don't Learn Alone. <br /> 
                <span className="gradient-text">Save More, Build Faster.</span>
              </h2>
              <div className="space-y-8 lg:space-y-10">
                {[
                  { 
                    title: "Group Buying Power", 
                    desc: "Join thousands of students to unlock bulk discounts of up to 40% on top-tier courses.",
                    icon: Users,
                    color: "text-indigo-600",
                    bg: "bg-indigo-50",
                    delay: "delay-100"
                  },
                  { 
                    title: "Interest-Based Projects", 
                    desc: "Access exclusive project templates and mentorship groups based on your specific interests.",
                    icon: TrendingUp,
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                    delay: "delay-200"
                  },
                  { 
                    title: "Verified Authenticity", 
                    desc: "We do the hard work of verifying course outcomes, instructors, and reviews for you.",
                    icon: ShieldCheck,
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                    delay: "delay-300"
                  }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col sm:flex-row gap-6 p-6 rounded-3xl transition-all duration-300 hover:bg-slate-50 hover:translate-x-2 group animate-fade-in-up ${item.delay}`}>
                    <div className={`flex-shrink-0 ${item.bg} ${item.color} p-4 rounded-2xl h-fit w-fit mx-auto sm:mx-0 shadow-sm group-hover:scale-110 transition-transform`}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-base text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 animate-fade-in-up delay-400">
                <Link to="/pricing" className="inline-flex items-center justify-center px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 group">
                  Start Upskilling Now <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visuals */}
            <div className="relative mt-8 lg:mt-0 px-4 sm:px-0 flex justify-center lg:justify-end animate-fade-in-up delay-200">
              <div className="relative max-w-lg w-full animate-float-slow">
                <div className="absolute inset-0 bg-indigo-600/10 rounded-[3rem] blur-3xl -z-10 transform translate-y-10"></div>
                <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <img 
                    src="https://www.21kschool.com/pk/wp-content/uploads/sites/17/2024/09/Learning-Methods.png" 
                    alt="Students learning" 
                    className="w-full aspect-[4/5] lg:aspect-square object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-12 bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl max-w-xs border border-slate-100 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer animate-float-slow delay-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="user" />
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-soft"></span>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Live Now</span>
                      </div>
                      <span className="text-xs font-black text-slate-400">+1,248 active</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                    "Just saved <span className="text-indigo-600">₹3,400</span> on my MERN course with the latest group buy!"
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Batch: #8492</span>
                    <div className="flex text-amber-400">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl animate-pulse-soft"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
