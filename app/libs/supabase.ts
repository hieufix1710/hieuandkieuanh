import { SupabaseClient, createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const service_role_key = process.env
  .NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY as string;

interface SupaGlobal {
  supabase: SupabaseClient;
  supabaseAdmin: SupabaseClient;
}

declare const global: SupaGlobal;

const supabase = global.supabase || createClient(supabaseUrl, supabaseAnonKey);
const supabaseAdmin =
  global.supabase ||
  createClient(supabaseUrl, service_role_key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

export { supabase, supabaseAdmin };
