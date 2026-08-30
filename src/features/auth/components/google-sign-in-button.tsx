"use client";

import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/features/auth/services/sign-in-with-google";
import { toast } from "sonner";
import { useState } from "react";

export function GoogleSignInButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleGoogleSignIn() {
    setIsLoading(true);

    const { error } = await signInWithGoogle();

    if (error) {
      toast.error("Something went wrong. Please try again.");
      setIsLoading(false);
      return;
    }
  }

  return (
    <Button type="button" onClick={handleGoogleSignIn} disabled={isLoading}>
      {isLoading ? "Signing in..." : "Sign in with Google"}
    </Button>
  );
}
