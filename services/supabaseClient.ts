
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ljypfmwcqsloojghcwsf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqeXBmbXdjcXNsb29qZ2hjd3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNzE3MDIsImV4cCI6MjA3Njk0NzcwMn0.hJ8bqNh7Os6HugV7aOjfCu_7eE-IxZo9GGokNukalyY";

export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function to fetch courses (assuming 'courses' table exists based on description)
export const fetchCourses = async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*');
  
  if (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
  return data;
};
