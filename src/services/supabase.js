import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vzlitbnlharjvtpqmxge.supabase.co";

const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bGl0Ym5saGFyanZ0cHFteGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0ODAxOTEsImV4cCI6MjA1MzA1NjE5MX0.IeHnfT4yDPmLXZ214LGCRL5hHeo6YZAibTUqf7ocAsk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
