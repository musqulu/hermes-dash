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
    <main className="flex min-h-screen w-full flex-col justify-center px-5 py-12">
      <div className="auth-card animate-in">
        <a
          href="/"
          style={{ color: "var(--modal-muted)", fontSize: "0.82rem", textDecoration: "none" }}
        >
          ← Public dashboard
        </a>

        <h1 className="detail-title" style={{ marginTop: "1rem", fontSize: "1.9rem" }}>
          Management login
        </h1>
        <p className="detail-summary" style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
          Enter the dashboard password to review reports and save feedback for future agent runs.
        </p>

        <form className="flex flex-col gap-4" style={{ marginTop: "1.5rem" }} onSubmit={submit}>
          <label className="flex flex-col gap-2">
            <span className="section-label" style={{ marginBottom: 0 }}>
              Password
            </span>
            <input
              autoFocus
              className="field"
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              value={password}
            />
          </label>
          <button className="btn-accent btn w-full" disabled={status === "saving" || !password} type="submit">
            {status === "saving" ? "Logging in…" : "Log in"}
          </button>
          {status === "error" ? (
            <p style={{ color: "hsl(var(--destructive))", fontSize: "0.85rem" }}>{error}</p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
