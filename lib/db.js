import { createClient } from "@supabase/supabase-js";

export const createSupabaseClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error("Supabase env vars are missing.");
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey);
};
