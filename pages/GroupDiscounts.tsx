
import React from 'react';
import { 
  Users, 
  Handshake, 
  TrendingDown, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Target,
  BarChart3,
  BadgePercent,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GroupDiscounts: React.FC = () => {
  const activeOffers = [
    {
      id: 1,
      title: "Full Stack Development Batch",
      platform: "devcotel report",
      originalPrice: "₹15,000",
      discountedPrice: "₹8,500",
      savings: "43.3%",
      progress: 85,
      membersNeeded: 5,
      category: "Web Dev",
      link: "https://devcotel-chatbot.vercel.app/"
    },
    {
      id: 2,
      title: "Cyber Security Professional",
      platform: "devcotel repoer",
      originalPrice: "₹25,000",
      discountedPrice: "₹19,999",
      savings: "10.1%",
      progress: 60,
      membersNeeded: 10,
      category: "Security",
      link: "https://devcotel-chatbot.vercel.app/"
    },
    {
      id: 3,
      title: "Data Science & AI Masters",
      platform: "devcotel report ",
      originalPrice: "₹45,000",
      discountedPrice: "₹39,999",
      savings: "11.1%",
      progress: 92,
      membersNeeded: 7,
      category: "AI/ML",
      link: "https://devcotel-chatbot.vercel.app/"
    }
  ];

  const negotiators = [
    {
      name: "krishnadev.T",
      role: "Strategic Partnerships and CEO",
      bio: "Ex-EdTech lead with 2+ years experience negotiating deals.",
      image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
    },
    {
      name: "Jithin.",
      role: "HR department / tec expert",
      bio: "Focuses on identifying high-quality emerging platforms in the Indian market.",
      image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
    }
  ];

  return (
    <div className="bg-[#fbfaf8] min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-indigo-200">
            <BadgePercent size={14} /> The Power of Many
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 mb-8 tracking-tighter leading-tight">
            Individually You Pay More.<br />
            <span className="text-indigo-600 italic">Together You Pay Less.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            We pool thousands of Indian learners into single batches. By acting as one huge customer, we force platforms to give us institutional-level discounts of up to 40%.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
             <BarChart3 size={150} />
          </div>
          
          <h2 className="text-3xl font-black mb-16 text-center">How the Group Engine Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              { step: "01", title: "Join Batch", desc: "Select your desired course and join the active queue.", icon: Users },
              { step: "02", title: "Scale Up", desc: "Our community marketing brings in hundreds of peers.", icon: Zap },
              { step: "03", title: "Negotiate", desc: "Our deal-makers present the batch size to the provider.", icon: Handshake },
              { step: "04", title: "Save Big", desc: "The platform unlocks the hidden discount for the group.", icon: TrendingDown },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                  <item.icon size={28} />
                </div>
                <div className="text-indigo-400 font-black text-xs mb-2 tracking-widest">{item.step}</div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Batches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-2">Active Saving Batches</h2>
            <p className="text-slate-500 font-medium">Join before these groups close to lock in your discount.</p>
          </div>
          <Link to="/courses" className="text-indigo-600 font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-2">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeOffers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  {offer.category}
                </span>
                <span className="text-emerald-600 font-black text-lg">-{offer.savings}</span>
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {offer.title}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{offer.platform}</p>
              
              <div className="flex items-center gap-3 mb-8">
                <span className="text-slate-400 line-through text-sm font-bold">{offer.originalPrice}</span>
                <span className="text-2xl font-black text-slate-900">{offer.discountedPrice}</span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <span>Batch Capacity</span>
                  <span>{offer.progress}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full" 
                    style={{ width: `${offer.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs font-bold text-indigo-600 text-center">
                  Only {offer.membersNeeded} more members needed!
                </p>
              </div>

              <a 
                href={offer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-100 flex items-center justify-center"
              >
                Join This Group
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* The Negotiators */}
      <section className="bg-white py-32 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Handshake size={14} /> The Human Element
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
                Meet the <span className="text-indigo-600">Negotiators.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                Automated tools are great, but big discounts happen through relationships. Our team of veteran negotiators speaks directly with EdTech CEOs to secure exclusive rates you won't find anywhere else.
              </p>
              <div className="space-y-6">
                 {[
                   { icon: Target, text: "Strict quality vetting of every course provider." },
                   { icon: MessageSquare, text: "Direct line to platform decision makers." },
                   { icon: ShieldCheck, text: "Secure escrow for community payments." }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                     <div className="bg-slate-50 p-2 rounded-xl text-slate-400">
                       <item.icon size={20} />
                     </div>
                     <span className="font-bold text-slate-700">{item.text}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {negotiators.map((person, i) => (
                <div key={i} className="bg-[#fbfaf8] p-8 rounded-[3rem] border border-slate-100 text-center">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white shadow-xl" 
                  />
                  <h4 className="text-xl font-black text-slate-900 mb-1">{person.name}</h4>
                  <p className="text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-4">{person.role}</p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_0%,transparent_100%)]"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Stop Paying Retail.</h2>
          <p className="text-indigo-100 text-lg mb-12 max-w-xl mx-auto relative z-10">Joined students and get immediate access to the collective bargaining power of Devcotel.</p>
          <Link 
            to="/pricing" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-indigo-600 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-slate-100 transition-all shadow-2xl relative z-10"
          >
            Join for ₹299 <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GroupDiscounts;
