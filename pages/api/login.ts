import type { NextApiRequest, NextApiResponse } from "next";
import { isPasswordConfigured, passwordMatches, setAuthCookie } from "@/lib/auth";

type ResponseBody = { ok: true } | { error: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseBody>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  if (!isPasswordConfigured()) {
    res.status(500).json({ error: "DASHBOARD_PASSWORD is not configured." });
    return;
  }

  const { password } = req.body as { password?: string };
  if (!passwordMatches(password ?? "")) {
    res.status(401).json({ error: "Wrong password." });
    return;
  }

  setAuthCookie(res);
  res.status(200).json({ ok: true });
}
