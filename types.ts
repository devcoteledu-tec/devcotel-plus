
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Course {
  id: number;
  image: string;
  title: string;
  type?: 'course' | 'bootcamp' | 'webinar' | 'youtube';
  category: string;
  instructor: string;
  rating: number | string;
  students: number | string;
  price: string;
  brand_color?: string; // Hex for card header
  provider: string;     // Brand name shown at bottom
  likes?: number;
  community_link?: string;
  enroll_link?: string;
  description?: string;
}

export interface UserProfile {
  name: string;
  age: number;
  interests: string[];
  career_goal: string;
}

export interface Project {
  id: string | number;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  languages: string[];
  description: string;
  repo_url?: string;
  live_url?: string;
  thumbnail?: string;
}
