import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hafppzrgvoiteegdykvb.supabase.co";

const supabaseKey =
  "sb_publishable_iqBfddBu4M5YAv8LgDHwow_rBYKffEF";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);