import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ajtoklipmhjkbydsgjre.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdG9rbGlwbWhqa2J5ZHNnanJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNjA1NjIsImV4cCI6MjAyMjgzNjU2Mn0.JHeV4B7WB3MqJwq57AdvPYL4tfGv-xkVS5NUZWmerYU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
