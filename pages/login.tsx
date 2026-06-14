import { useRouter } from "next/router";
import { useState, type FormEvent } from "react";

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setError("");

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      setStatus("error");
      setError(payload.error ?? "Could not log in.");
      return;
    }

    const next = typeof router.query.next === "string" ? router.query.next : "/manage";
    await router.replace(next.startsWith("/") ? next : "/manage");
  }

  return (
    <main className="page-frame mx-auto flex min-h-screen w-full max-w-[480px] flex-col justify-center gap-6 px-5 py-12">
      <div className="space-y-2">
        <a className="classic-link font-serif text-sm" href="/">
          ← Public dashboard
        </a>
        <h1 className="font-display text-4xl uppercase leading-none">Management login</h1>
        <p className="font-serif text-sm text-black">
          Enter the dashboard password to review reports and save feedback for future agent runs.
        </p>
      </div>

      <form className="space-y-4 border border-black bg-[var(--tint-sage)] p-5" onSubmit={submit}>
        <label className="space-y-2 font-ui text-sm font-bold uppercase">
          <span>Password</span>
          <input
            autoFocus
            className="w-full border border-black bg-white px-3 py-2 font-serif text-sm normal-case outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
          />
        </label>
        <button
          className="bevel-sticker w-full bg-black px-3 py-2 font-ui text-sm font-bold uppercase text-white disabled:opacity-50"
          disabled={status === "saving" || !password}
          type="submit"
        >
          {status === "saving" ? "Logging in…" : "Log in"}
        </button>
        {status === "error" ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>
    </main>
  );
}
