import { createClient } from "@/lib/supabase/server";

export default async function AccountPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  async function signOut() {
    "use server";

    const supabase = await createClient();
    await supabase.auth.signOut();
  }

  return (
    <div>
      <h1>Account</h1>

      {user ? (
        <>
          <p>Authenticated ✅</p>
          <p>{user.email}</p>
          <form action={signOut}>
            <button type="submit">Sign out</button>
          </form>
        </>
      ) : (
        <p>Not authenticated ❌</p>
      )}
    </div>
  );
}
