"use client";
import { Button } from "@/components/ui/button";
import {
  registerSchema,
  type RegisterValues,
} from "@/features/auth/schemas/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUp } from "@/features/auth/services/sign-up";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });
  const router = useRouter();
  async function onSubmit(data: RegisterValues) {
    const { data: registerData, error: registerError } = await signUp(data);

    if (registerError !== null) {
      switch (registerError.code) {
        case "email_exists":
          toast.error("This email is already registered.");
          break;
        case "weak_password":
          toast.error(
            "Your password doesn't meet the required security rules.",
          );
          break;
        default:
          toast.error("Something went wrong. Please try again.");
      }
      return;
    }
    if (registerData.session !== null) {
      router.push("/");
      return;
    }
    toast.info("Check your email to confirm your account");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        aria-invalid={!!errors.name}
        aria-describedby={errors.name ? "name-error" : undefined}
        {...register("name")}
      />
      {errors.name?.message && <p id="name-error">{errors.name.message}</p>}
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
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <Input
        type="password"
        id="confirmPassword"
        aria-invalid={!!errors.confirmPassword}
        aria-describedby={
          errors.confirmPassword ? "confirmPassword-error" : undefined
        }
        {...register("confirmPassword")}
      />
      {errors.confirmPassword?.message && (
        <p id="confirmPassword-error">{errors.confirmPassword.message}</p>
      )}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
