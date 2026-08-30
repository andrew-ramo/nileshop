import type { RegisterValues } from "@/features/auth/schemas/register-schema";
import { supabase } from "@/lib/supabase/client";

export async function signUp(data: RegisterValues) {
  const { data: registerData, error: registerError } =
    await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          name: data.name,
        },
      },
    });

  return {
    data: registerData,
    error: registerError,
  };
}
