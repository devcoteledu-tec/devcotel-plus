
import React, { useState } from 'react';
import { getCareerGuidance } from '../services/geminiService';
import { Project } from '../types';
import { 
  Sparkles, 
  Code, 
  BrainCircuit, 
  Rocket, 
  Loader2, 
  ChevronRight, 
  AlertCircle,
  Github,
  ExternalLink,
  Layers,
  Terminal
} from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const difficultyColors = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    Intermediate: 'bg-amber-50 text-amber-700 border-amber-100',
    Advanced: 'bg-rose-50 text-rose-700 border-rose-100'
  };

  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
      <div className="flex items-start justify-between mb-6">
        <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform">
          <Terminal size={24} />
        </div>
        <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-widest ${difficultyColors[project.difficulty]}`}>
          {project.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight">
        {project.title}
      </h3>
      
      <p className="text-sm text-slate-500 mb-6 line-clamp-3 font-medium leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Programming Languages / Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.languages.map((lang, idx) => (
          <span key={idx} className="bg-slate-50 text-slate-600 px-2.5 py-1 rounded-lg text-[10px] font-bold border border-slate-100 uppercase">
            {lang}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-auto">
        <a 
          href={project.repo_url || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-slate-700 font-bold text-xs bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
        >
          <Github size={16} /> View Repo
        </a>
        <a 
          href={project.live_url || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white font-bold text-xs bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all"
        >
          <ExternalLink size={16} /> Visit Project
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState(20);
  const [goal, setGoal] = useState('');
  const [interests, setInterests] = useState('');
  const [recommendations, setRecommendations] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Real-time Fintech Dashboard",
      difficulty: "Advanced",
      languages: ["React", "TypeScript", "Tailwind", "Chart.js"],
      description: "A secure dashboard for tracking cryptocurrency trends and personal wallet balances with real-time WebSocket integration.",
      repo_url: "https://github.com/devcotel/fintech-dashboard",
      live_url: "#"
    },
    {
      id: 2,
      title: "AI Mental Health Chatbot",
      difficulty: "Intermediate",
      languages: ["Python", "Flask", "Gemini API", "React"],
      description: "An empathetic AI assistant that helps students manage stress through personalized conversation and verified coping mechanisms.",
      repo_url: "https://github.com/devcotel/mind-buddy-ai",
      live_url: "#"
    },
    {
      id: 3,
      title: "Eco-Friendly E-commerce",
      difficulty: "Beginner",
      languages: ["HTML", "CSS", "JavaScript", "Firebase"],
      description: "A fully functional marketplace for sustainable goods, featuring a custom cart system and Stripe payment integration.",
      repo_url: "https://github.com/devcotel/green-store",
      live_url: "#"
    },
    {
      id: 4,
      title: "Decentralized Voting App",
      difficulty: "Advanced",
      languages: ["Solidity", "Ether.js", "Next.js", "Web3"],
      description: "Secure, transparent voting platform built on Ethereum. Ensuring every vote is counted fairly without a central authority.",
      repo_url: "https://github.com/devcotel/eth-vote",
      live_url: "#"
    },
    {
      id: 5,
      title: "Code-Sharing Platform",
      difficulty: "Intermediate",
      languages: ["Node.js", "MongoDB", "Express", "React"],
      description: "A developer tool that allows teams to share snippets and pair-program in real-time with an integrated code editor.",
      repo_url: "https://github.com/devcotel/snippet-share",
      live_url: "#"
    },
    {
      id: 6,
      title: "Weather Insight Engine",
      difficulty: "Beginner",
      languages: ["React", "OpenWeather API", "CSS Modules"],
      description: "Hyper-local weather predictions with interactive maps and 7-day visual forecasts for travel planning.",
      repo_url: "https://github.com/devcotel/weather-engine",
      live_url: "#"
    }
  ];

  const handleGetIdeas = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal || !interests) return;
    
    setLoading(true);
    setError(null);
    try {
      const processedInterests = interests.split(',').map(i => i.trim()).filter(i => i.length > 0);
      const data = await getCareerGuidance(age, goal, processedInterests);
      setRecommendations(data);
    } catch (err) {
      console.error(err);
      setError("AI service is currently at capacity. Enjoy our community project library below!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Layers size={14} /> Hands-on Project Hub
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
            Apply Your Skills. <br />
            <span className="text-indigo-600">Build Real-World Projects.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Theoretical knowledge isn't enough. Choose a project from our community library or use Gemini AI to generate a custom roadmap based on your career goals.
          </p>
        </div>

        {/* AI Generator Section */}
        <div className="bg-[#111827] rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-indigo-100 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20 text-indigo-400">
             <BrainCircuit size={120} />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-white mb-4">Generate Custom Roadmap</h2>
            <p className="text-slate-400 mb-10 font-medium">Get a step-by-step project guide tailored to your age and career objectives.</p>
            
            <form onSubmit={handleGetIdeas} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Your Age</label>
                  <input 
                    type="number" 
                    min="16" 
                    max="38"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="w-full bg-slate-800 border-none text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Dream Job</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Backend Engineer"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-slate-800 border-none text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all font-bold placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">What do you love? (Interests)</label>
                <input 
                  type="text" 
                  placeholder="e.g. React, Space, Photography"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  className="w-full bg-slate-800 border-none text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all font-bold placeholder:text-slate-600"
                />
              </div>
              <button 
                type="submit"
                disabled={loading || !goal || !interests}
                className="group w-full py-5 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-xl shadow-indigo-900/40"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={24} />}
                {loading ? "Designing Your Path..." : "Get AI Roadmap"}
                {!loading && <ChevronRight className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>

        {error && (
          <div className="mb-12 p-6 bg-rose-50 border border-rose-100 rounded-3xl flex items-center gap-4 text-rose-700 font-bold">
            <AlertCircle size={24} />
            {error}
          </div>
        )}

        {/* AI Results Display */}
        {recommendations && (
          <div className="mb-24 space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Rocket className="text-indigo-200" /> Your Personal Learning Path
              </h3>
              <p className="text-indigo-50 leading-relaxed text-xl font-medium">{recommendations.path}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.projects.map((proj: any, idx: number) => (
                <ProjectCard 
                  key={idx} 
                  project={{
                    id: `ai-${idx}`,
                    title: proj.title,
                    description: proj.description,
                    difficulty: proj.difficulty as any,
                    languages: ["Custom Stack"],
                    repo_url: "#",
                    live_url: "#"
                  }} 
                />
              ))}
            </div>
          </div>
        )}

        {/* Community Projects Section */}
        <div className="border-t border-slate-100 pt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Community Project Library</h2>
              <p className="text-slate-500 font-medium">Standard projects every student should master to get hired.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-5 py-2.5 bg-[#111827] text-white rounded-full text-sm font-bold shadow-lg">All Projects</button>
              <button className="px-5 py-2.5 bg-white text-slate-500 border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition-all">My Build List</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
