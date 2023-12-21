import { createClient } from '@supabase/supabase-js'
// const {SUPABASE_API_URL, SUPABASE_ANON_KEY} = import.meta.env;

console.log( process.env.REACT_APP_SUPABASE_API_URL);
export const supabase = createClient(
    process.env.REACT_APP_SUPABASE_API_URL,
    process.env.REACT_APP_SUPABASE_ANON_KEY || ''
)