
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  Award, 
  Rocket, 
  ShieldCheck, 
  ChevronRight, 
  Search, 
  Menu, 
  X,
  Zap,
  Star,
  MessageSquare,
  BadgePercent
} from 'lucide-react';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Community from './pages/Community';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import GroupDiscounts from './pages/GroupDiscounts';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Discounts', path: '/group-discounts' },
    { name: 'Community', path: '/community' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-2 rounded-xl text-white group-hover:rotate-12 transition-transform">
              <Zap size={24} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-indigo-900">devcotel</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://devcotel.vercel.app/"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200"
            >
              Explore More
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-700 px-2 py-2 rounded-lg hover:bg-indigo-50"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://devcotel.vercel.app/"
              onClick={() => setIsOpen(false)}
              className="bg-indigo-600 text-white text-center py-3 rounded-xl font-bold"
            >
              Explore More
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-indigo-400" />
              <span className="text-2xl font-bold">devcotel</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering students in India to upskill together. Identify trusted courses, save money through group buying, and build real-world projects.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/courses" className="hover:text-indigo-400 transition-colors">Find Courses</Link></li>
              <li><Link to="/group-discounts" className="hover:text-indigo-400 transition-colors">Group Discounts</Link></li>
              <li><Link to="/community" className="hover:text-indigo-400 transition-colors">Collective Growth</Link></li>
              <li><Link to="/projects" className="hover:text-indigo-400 transition-colors">Project Hub</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors text-rose-400">Refund Policy (Strictly No Refund)</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} devcotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/group-discounts" element={<GroupDiscounts />} />
            <Route path="/community" element={<Community />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
