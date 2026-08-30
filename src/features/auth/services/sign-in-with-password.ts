import type { LoginValues } from "@/features/auth/schemas/login-schema";
import { supabase } from "@/lib/supabase/client";

export async function signInWithPassword(data: LoginValues) {
  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword(data);
  return {
    data: authData,
    error: authError,
  };
}
