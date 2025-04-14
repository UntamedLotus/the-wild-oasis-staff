import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vzlitbnlharjvtpqmxge.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bGl0Ym5saGFyanZ0cHFteGdlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzQ4MDE5MSwiZXhwIjoyMDUzMDU2MTkxfQ.xAUk0woL8rLGryzgg9DzIGFV8i6V9KMStXoLdByGeT0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
