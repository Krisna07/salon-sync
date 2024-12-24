import { createClient } from "@supabase/supabase-js";

//creating supabase client connection
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL! as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! as string
);