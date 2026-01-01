
import React from 'react';
import { Gavel, AlertTriangle, Terminal, Ban, HeartHandshake, Target } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <div className="py-24 bg-[#fbfaf8] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Gavel size={14} /> Service Agreement
          </div>
          <h1 className="text-5xl font-[900] text-slate-900 mb-6 tracking-tight">
            Terms of <span className="text-rose-600">Service.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            The legal framework for participating in the Devcotel community.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-slate-100 space-y-12">
          
          <section className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-rose-600 p-3 rounded-2xl text-white">
                <Ban size={20} />
              </div>
              <h2 className="text-2xl font-black text-rose-900">Refund Policy: Strictly None</h2>
            </div>
            <p className="text-rose-800 leading-relaxed font-bold">
              Devcotel operates on a digital-first, community-driven resource model. Due to the immediate allocation of server resources, community access, and the collaborative nature of group buying discounts, we maintain a <span className="underline">Strict No-Refund Policy</span>. Once the membership fee (₹299 or ₹1999) is processed, it is final and non-refundable under any circumstances.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-600 p-3 rounded-2xl text-white">
                <Target size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">1. Group Buying Activation Thresholds</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Users acknowledge that the discounted rates displayed on the "Group Discounts" page are conditional. **An offer only activates and becomes valid if the specified target amount of learners (the "Batch Size") is reached.**
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              If a group fails to reach its target threshold by the deadline, the negotiation may be voided or extended at our discretion. Devcotel acts as a facilitator and does not guarantee that every group will reach its target.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-600 p-3 rounded-2xl text-white">
                <HeartHandshake size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">2. Transparency & Zero-Commission Model</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Devcotel is built for student empowerment. We maintain absolute transparency in our operations:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-slate-700 font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                <span>We do NOT collect any kind of fees or commission from EdTech platforms for our negotiations.</span>
              </li>
              <li className="flex gap-3 text-slate-700 font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                <span>100% of the negotiated savings are passed directly to the learners in the group.</span>
              </li>
              <li className="flex gap-3 text-slate-700 font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                <span>Our only revenue source is the one-time community entry fee (₹299), which fuels our platform development and core AI.</span>
              </li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-900 p-3 rounded-2xl text-white">
                <Terminal size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">3. Technical Usage & Integrity</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Users are prohibited from attempting to scrape, reverse-engineer, or perform SQL injections on the Devcotel platform. We provide our services "as-is" and do not guarantee 100% uptime. Misuse of the project hub or AI guidance tools for malicious purposes will result in immediate API key revocation and community banning.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-600 p-3 rounded-2xl text-white">
                <AlertTriangle size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">4. Provider Liability</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              While we strive to verify every platform, the ultimate responsibility for course completion and content quality lies with the original provider (e.g., Coursera, Udemy, PW Skills). Our bias is always towards the student, and we will blacklist any provider that fails to honor group discounts once the target is met.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest text-center">
              Execution Date: 2023-10-24 | Updated: March 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
