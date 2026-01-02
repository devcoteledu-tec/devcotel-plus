
import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../services/supabaseClient';
import { Course, User } from '../types';
import { 
  Star, 
  Heart, 
  MessageSquare, 
  Share2, 
  Users,
  Info,
  Loader2,
  Search,
  X
} from 'lucide-react';

const getTypeColorClasses = (type?: string): string => {
  switch (type?.toLowerCase()) {
    case 'course': return 'bg-blue-600 text-white';
    case 'bootcamp': return 'bg-indigo-600 text-white';
    case 'webinar': return 'bg-emerald-600 text-white';
    case 'youtube': 
    case 'youtube video': return 'bg-red-600 text-white';
    default: return 'bg-slate-600 text-white';
  }
};

const getTypeHeaderColor = (type?: string): string => {
  switch (type?.toLowerCase()) {
    case 'course': return '#0084ff';
    case 'bootcamp': return '#6366f1';
    case 'webinar': return '#059669';
    case 'youtube': 
    case 'youtube video': return '#ef4444';
    default: return '#f3f4f6';
  }
};

const CourseCard: React.FC<{
    course: Course;
    onLike: (courseId: number) => void;
    currentUser: User | null;
    promptLogin: () => void;
}> = ({ course, onLike, currentUser, promptLogin }) => {
    
    const isLiked = (() => {
        if (!currentUser) return false;
        const userLikedCoursesKey = `likedCourses_${currentUser.id}`;
        const likedCourses = JSON.parse(localStorage.getItem(userLikedCoursesKey) || '[]');
        return likedCourses.includes(course.id);
    })();

    const handleLikeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!currentUser) {
            promptLogin();
            return;
        }
        if (!isLiked) {
            onLike(course.id);
        }
    };
    
    const handleEnrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!currentUser) {
            e.preventDefault();
            promptLogin();
        }
    };

    const headerBg = course.brand_color || getTypeHeaderColor(course.type);
    const badgeClasses = getTypeColorClasses(course.type);

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl transition-all duration-300">
            {/* Header Section with 100% Image Size */}
            <div 
              className="relative h-52 flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: headerBg }}
            >
                {/* Colored Type Badge */}
                <div className={`absolute top-4 left-4 ${badgeClasses} text-[10px] font-black px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-[0.15em] z-20`}>
                   {course.type || 'Course'}
                </div>
                
                {/* Image scaled to 100% container size */}
                <img 
                    src={course.image} 
                    alt={course.provider} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=Course+Logo';
                    }}
                />
                {/* Subtle Overlay to ensure brand colors pop if the image is transparent */}
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded">
                        {course.category}
                    </span>
                </div>
                
                <h3 className="text-xl font-[900] text-slate-900 mb-3 leading-tight line-clamp-2 tracking-tight">
                    {course.title}
                </h3>
                
                <p className="text-sm text-slate-500 mb-6 line-clamp-3 flex-grow leading-relaxed font-medium">
                    {course.description}
                </p>

                <div className="mb-6 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block leading-tight text-center">
                        <span className="text-emerald-600">GROUP BUYING:</span> GET UP TO 40% OFF THROUGH COMMUNITY
                    </span>
                </div>

                {/* Stats Bar */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-5 mb-5">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-xs font-black text-amber-500">
                            <Star size={14} fill="currentColor" /> {course.rating}
                        </div>
                        <div className="flex items-center gap-1 text-xs font-black text-slate-700">
                            <Users size={14} /> {course.students}
                        </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {course.provider}
                    </span>
                </div>

                {/* Social Interaction Bar */}
                <div className="flex items-center gap-4 mb-6">
                    <button 
                        className={`flex items-center gap-1.5 transition-colors ${isLiked ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'}`}
                        onClick={handleLikeClick}
                        disabled={isLiked}
                    >
                        <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                        <span className="text-sm font-bold">{course.likes || 0}</span>
                    </button>
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <MessageSquare size={20} />
                    </button>
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <Share2 size={20} />
                    </button>
                </div>

                {/* Main Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a 
                        href={course.community_link || '#'} 
                        className="flex items-center justify-center py-3 px-4 bg-white text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest border-2 border-slate-100 hover:border-slate-900 transition-all"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Community
                    </a>
                    <a 
                        href={course.enroll_link || '#'} 
                        className="flex items-center justify-center py-3 px-4 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200"
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={handleEnrollClick}
                    >
                        Enroll Now
                    </a>
                </div>
            </div>
        </div>
    );
};

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = ['All', 'Courses', 'Bootcamps', 'Webinars', 'YouTube Videos'];
  
  const [currentUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('devcotel_user');
    return savedUser ? JSON.parse(savedUser) : { id: 1, name: "Demo User", email: "demo@devcotel.com" };
  });

  const mockCourses: Course[] = [
    {
      id: 1,
      title: 'Online Data Analytics Course - Become a Certified Data Analyst',
      instructor: 'Entri Elevate Team',
      image: 'https://cdn-images-1.medium.com/max/1200/1*6X3Hl0p9UeL4U3uC1-fCvw.png', 
      price: '₹8,999',
      category: 'Data analytics',
      provider: 'ENTRI',
      brand_color: '#0084ff',
      type: 'course',
      rating: 4.8,
      students: 5,
      likes: 5,
      description: "Step into the world of data analytics with Entri Elevate's Data Analytics course which offers an effective and comprehensible experience.",
      community_link: '#',
      enroll_link: '#'
    },
    {
      id: 2,
      title: 'Transform raw data into actionable insights and build predictive models',
      instructor: 'ASAP Kerala',
      image: 'https://images.unsplash.com/photo-1518186239717-2e9b69d7744a?auto=format&fit=crop&q=80&w=800',
      price: '₹12,500',
      category: 'MACHINE LEARNING',
      provider: 'ASAP KERALA.gov',
      brand_color: '#f0fdfa',
      type: 'course',
      rating: 4.9,
      students: 3,
      likes: 3,
      description: "This project (internship)-based and multi-skill course will provide structured and unstructured data to solve critical business problems with machine learning and deep learning.",
      community_link: '#',
      enroll_link: '#'
    },
    {
      id: 3,
      title: 'Defend against modern threats. Become an expert in securing networks...',
      instructor: 'Techolas Team',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      price: '₹15,000',
      category: 'Certified Cyber Security course',
      provider: 'TECHOLAS',
      brand_color: '#f8fafc',
      type: 'course',
      rating: 4.4,
      students: 5,
      likes: 1,
      description: "Techolas Technologies offers a 6-month cyber security course that provides job-oriented training with 100% placement assistance available in both online and offline modes.",
      community_link: '#',
      enroll_link: '#'
    },
    {
      id: 4,
      title: 'Complete Java Mastery: From Zero to Hero',
      instructor: 'CodeWithHarry',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      price: 'Free',
      category: 'JAVA PROGRAMMING',
      provider: 'YOUTUBE',
      brand_color: '#fee2e2',
      type: 'youtube',
      rating: 4.9,
      students: '1.2M',
      likes: 450,
      description: "A comprehensive video series covering everything from basic syntax to advanced enterprise patterns in Java. Perfect for beginners looking to enter the IT industry.",
      community_link: '#',
      enroll_link: '#'
    }
  ];

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        if (data && data.length > 0) {
            const mapped = data.map((c: any) => ({
                ...c,
                image: c.image || c.image_url || 'https://via.placeholder.com/400x200?text=Course+Logo',
                price: c.price || `₹${(c.discount_price || 0).toLocaleString()}`,
                provider: c.provider || 'Verified Partner',
                brand_color: c.brand_color || null,
                description: c.description || "Upskill your career with this verified learning resource from one of India's top providers.",
                type: c.type || 'course'
            }));
            setCourses(mapped);
        } else {
            setCourses(mockCourses);
        }
      } catch (err) {
        setCourses(mockCourses);
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  const handleLike = (courseId: number) => {
    if (!currentUser) return;
    setCourses(prev => prev.map(c => 
        c.id === courseId ? { ...c, likes: (c.likes || 0) + 1 } : c
    ));
    const key = `likedCourses_${currentUser.id}`;
    const liked = JSON.parse(localStorage.getItem(key) || '[]');
    if (!liked.includes(courseId)) {
        liked.push(courseId);
        localStorage.setItem(key, JSON.stringify(liked));
    }
  };

  const promptLogin = () => {
    alert("Join the Devcotel community for just ₹299 to unlock exclusive group buying offers!");
  };

  const filteredCourses = courses.filter(c => {
      // Tab Filter
      let passTab = true;
      if (activeTab !== 'All') {
          const type = c.type?.toLowerCase();
          if (activeTab === 'Courses') passTab = type === 'course';
          else if (activeTab === 'Bootcamps') passTab = type === 'bootcamp';
          else if (activeTab === 'Webinars') passTab = type === 'webinar';
          else if (activeTab === 'YouTube Videos') passTab = type === 'youtube' || type === 'youtube video';
      }

      // Search Filter
      let passSearch = true;
      if (searchTerm.trim() !== '') {
          const query = searchTerm.toLowerCase();
          passSearch = 
            c.title.toLowerCase().includes(query) || 
            c.category.toLowerCase().includes(query) || 
            (c.description || '').toLowerCase().includes(query) ||
            (c.provider || '').toLowerCase().includes(query);
      }

      return passTab && passSearch;
  });

  return (
    <div className="py-20 bg-[#fbfaf8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-[900] text-slate-900 mb-5 tracking-tight">
            Curated <span className="text-indigo-600">Growth</span> Catalog
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Find premium resources vetted by the community. Join groups to slash prices by up to 40%.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 relative group">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search for skills, providers, or course titles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border-2 border-slate-100 py-4 pl-14 pr-12 rounded-[1.5rem] shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all font-bold text-slate-700 placeholder:text-slate-400"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-7 py-3 rounded-2xl text-[10px] uppercase tracking-widest font-black transition-all border-2 ${
                activeTab === tab 
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        {loading ? (
          <div className="flex flex-col justify-center items-center py-32 gap-4">
            <Loader2 className="animate-spin text-indigo-600" size={40} />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Syncing validated providers...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onLike={handleLike} 
                currentUser={currentUser}
                promptLogin={promptLogin}
              />
            ))}
          </div>
        )}

        {!loading && filteredCourses.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                <Info className="mx-auto text-slate-300 mb-4" size={56} />
                <h3 className="text-2xl font-black text-slate-900">No matches found</h3>
                <p className="text-slate-500 mt-2 font-medium">Try adjusting your filters or checking for typos in your search.</p>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="mt-6 text-indigo-600 font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    Clear Search
                  </button>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
