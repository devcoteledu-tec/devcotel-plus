
import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-24 bg-[#fbfaf8] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Shield size={14} /> Security First
          </div>
          <h1 className="text-5xl font-[900] text-slate-900 mb-6 tracking-tight">
            Privacy <span className="text-indigo-600">Protocol.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            How we handle your data, designed for transparency and developer integrity.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-slate-100 space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-600 p-3 rounded-2xl text-white">
                <Lock size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">1. Data Architecture</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Devcotel operates as a data controller for the information you provide. We collect basic identification metrics (name, email) and technical log files (IP addresses, browser headers) to optimize our load balancing and security endpoints. We prioritize your privacy by encrypting all PII (Personally Identifiable Information) at rest using AES-256 standards.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-600 p-3 rounded-2xl text-white">
                <Eye size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">2. Developer Transparency</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Our engineering team accesses anonymized telemetry to debug community interaction features. We do not sell your data to third-party advertisers. We believe in a student-first web where your learning habits belong to you, not a marketing algorithm. Any integration with external APIs (like Gemini or Supabase) is governed by strict transit-layer security (TLS 1.3).
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-600 p-3 rounded-2xl text-white">
                <Shield size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">3. User Sovereignty</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              You have the right to request a full export of your data or immediate deletion of your profile from our Supabase clusters. Our platform is biased towards your protection; in any event of a database migration or structural change, we notify our users 30 days in advance via their registered primary email endpoint.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest text-center">
              Last Updated: October 2023 | Version 1.0.4-stable
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
