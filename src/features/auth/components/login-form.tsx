"use client";

import { useForm } from "react-hook-form";
import {
  loginSchema,
  type LoginValues,
} from "@/features/auth/schemas/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { signInWithPassword } from "@/features/auth/services/sign-in-with-password";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
  const router = useRouter();
  async function onSubmit(data: LoginValues) {
    const { error: authError } = await signInWithPassword(data);
    if (authError) {
      toast.error("Invalid email or password");
      return;
    }
    router.push("/account");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "email-error" : undefined}
        {...register("email")}
      />
      {errors.email?.message && <p id="email-error">{errors.email.message}</p>}
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        aria-invalid={!!errors.password}
        aria-describedby={errors.password ? "password-error" : undefined}
        {...register("password")}
      />
      {errors.password?.message && (
        <p id="password-error">{errors.password.message}</p>
      )}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Login"}
      </Button>
    </form>
  );
}
