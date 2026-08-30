import { Container } from "@/components/layout/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GoogleSignInButton } from "@/features/auth/components/google-sign-in-button";
import { LoginForm } from "@/features/auth/components/login-form";
import Link from "next/link";

export default function Login() {
  return (
    <Container>
      <div className="w-full min-h-full flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>

              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">OR</span>
              </div>
            </div>
            <GoogleSignInButton />
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="font-medium underline">
                Register
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Container>
  );
}
