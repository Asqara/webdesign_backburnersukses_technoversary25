import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export const supabaseAdmin = createClient(
//   supabaseUrl,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
//   {
//     auth: {
//       autoRefreshToken: false,
//       persistSession: false,
//     },
//   }
// );

// Types untuk database
export interface Profile {
  id: string;
  username: string;
  email: string;
  created_at: string;
}

export interface Volunteer {
  id: string;
  title: string;
  description: string;
  date: string;
  extra_json?: any;
}

export interface Registration {
  id: string;
  user_id: string;
  volunteer_id: string;
  registered_at: string;
}
