import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your Supabase URL and API key
const supabaseUrl = 'https://tkexkfzwhjfnjsoiwjbw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrZXhrZnp3aGpmbmpzb2l3amJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNDY4NTQsImV4cCI6MjAyOTYyMjg1NH0.N1Ogek8zBwbkLGDzSrswJJRQyhiqnSjegs-JkyUNS6s';
export const supabase = createClient(supabaseUrl, supabaseKey);
