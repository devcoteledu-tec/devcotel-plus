
import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Zap, 
  Users, 
  Star, 
  Award, 
  Rocket, 
  Code, 
  Target,
  Sparkles
} from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 bg-[#fbfaf8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Sparkles size={14} /> Join the Devcotel Movement
          </div>
          <h1 className="text-5xl font-[900] text-slate-900 mb-6 tracking-tight">
            Invest in Your <span className="text-indigo-600">Growth.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Choose the path that fits your current goals. Whether you want the best deals or high-impact projects, we've got you covered.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Starter Plan: Community Access */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col h-full relative overflow-hidden group hover:border-indigo-200 transition-all">
            <div className="mb-8">
              <div className="bg-slate-100 text-slate-600 text-[10px] font-black px-3 py-1 rounded-full inline-block uppercase tracking-widest mb-4">
                Starter Community
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">₹299</span>
                <span className="text-slate-400 font-bold">/lifetime</span>
              </div>
              <p className="mt-4 text-slate-500 font-medium">Perfect for students looking to save on trusted courses.</p>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {[
                "Lifetime Community Access",
                "Unlimited Group Buy Offers",
                "Verified Platform Discovery",
                "Course Authenticity Checks",
                "Basic WhatsApp Network",
                "Community Support"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-slate-50 p-1 rounded-full text-slate-400 mt-1">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-black hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
              Join Community
            </button>
          </div>

          {/* Premium Plan: Elite Project Hub */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-200 flex flex-col h-full relative overflow-hidden ring-4 ring-indigo-500/20">
            {/* Featured Badge */}
            <div className="absolute top-0 right-0">
               <div className="bg-indigo-600 text-white text-[10px] font-black px-8 py-2 rotate-45 translate-x-10 translate-y-6 uppercase tracking-widest">
                  Popular
               </div>
            </div>

            <div className="mb-8 relative z-10">
              <div className="bg-indigo-500/20 text-indigo-400 text-[10px] font-black px-3 py-1 rounded-full inline-block uppercase tracking-widest mb-4">
                Elite Project Group
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">₹1999</span>
                <span className="text-slate-400 font-bold">/one-time</span>
              </div>
              <p className="mt-4 text-slate-400 font-medium">For high-achievers who want to build real-world products.</p>
            </div>

            <div className="space-y-4 mb-10 flex-grow relative z-10">
              <div className="pb-4 mb-4 border-b border-white/10">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Includes Everything in Starter, plus:</span>
              </div>
              {[
                "Entry into Elite Project Groups",
                "Interest-Based Projects",
                "Hands-on Industry Mentorship",
                "AI-Powered Roadmap Tool",
                "Peer-to-Peer Code Reviews",
                "Devcotel Project Certification",
                "Priority Recruitment Access"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-indigo-600 p-1 rounded-full text-white mt-1">
                    <Rocket size={12} fill="white" />
                  </div>
                  <span className="text-sm font-bold text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-900/40 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2">
              Join Project Group <Rocket size={18} />
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
          {[
            { 
              title: "Trusted Security", 
              desc: "Encrypted payments processed via Razorpay/Stripe.", 
              icon: ShieldCheck,
              color: 'text-indigo-600'
            },
            { 
              title: "Career ROI", 
              desc: "Students save an average of ₹4,000 per course.", 
              icon: Target,
              color: 'text-emerald-600'
            },
            { 
              title: "Vast Network", 
              desc: "Connect with students from top colleges across India.", 
              icon: Users,
              color: 'text-amber-600'
            }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`mb-6 p-4 rounded-3xl bg-white shadow-sm border border-slate-100 ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-32 text-center bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-4">Have questions?</h3>
            <p className="text-slate-500 font-medium mb-8">Join our free webinar this Sunday to learn how Devcotel transforms upskilling.</p>
            <div className="flex justify-center gap-4">
                <a 
                  href="https://wa.me/917593038781" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-600 font-bold flex items-center gap-2 hover:underline"
                >
                    Chat with an expert <Zap size={16} fill="currentColor" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
