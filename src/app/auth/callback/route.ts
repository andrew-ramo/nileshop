import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const UrlObj = new URL(request.url);
  const code = UrlObj.searchParams.get("code");
  if (!code) {
    return new Response("Missing code", { status: 400 });
  }
  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "auth_failed");

    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.redirect(`${UrlObj.origin}/account`);
}
