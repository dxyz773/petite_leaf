import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hxxoafnewtclypqeirzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eG9hZm5ld3RjbHlwcWVpcnpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MTk5NjcsImV4cCI6MjAyMTE5NTk2N30.mJjuoyoQ-0LOx_vE8R_77LSaJpr1myT3bS3ezqMRqqw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
