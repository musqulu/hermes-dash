import { createHash, timingSafeEqual } from "node:crypto";
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

export const AUTH_COOKIE = "hermes_dash_auth";

function configuredPassword() {
  return process.env.DASHBOARD_PASSWORD ?? "";
}

export function isPasswordConfigured() {
  return configuredPassword().length > 0;
}

function digest(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function authToken() {
  const password = configuredPassword();
  if (!password) return "";
  return digest(`hermes-dash:${password}`);
}

export function passwordMatches(candidate: string) {
  const password = configuredPassword();
  if (!password || !candidate) return false;

  const left = Buffer.from(digest(candidate));
  const right = Buffer.from(digest(password));
  return left.length === right.length && timingSafeEqual(left, right);
}

function parseCookieHeader(header?: string) {
  const entries = new Map<string, string>();
  if (!header) return entries;

  for (const part of header.split(";")) {
    const [key, ...valueParts] = part.trim().split("=");
    if (!key) continue;
    entries.set(key, decodeURIComponent(valueParts.join("=")));
  }

  return entries;
}

export function isAuthenticatedFromCookie(cookieHeader?: string) {
  const token = authToken();
  if (!token) return false;
  return parseCookieHeader(cookieHeader).get(AUTH_COOKIE) === token;
}

export function isAuthenticatedRequest(req: NextApiRequest | GetServerSidePropsContext["req"]) {
  return isAuthenticatedFromCookie(req.headers.cookie);
}

export function setAuthCookie(res: NextApiResponse) {
  const token = authToken();
  if (!token) throw new Error("DASHBOARD_PASSWORD is not configured.");

  res.setHeader(
    "Set-Cookie",
    `${AUTH_COOKIE}=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=2592000${
      process.env.NODE_ENV === "production" ? "; Secure" : ""
    }`,
  );
}

export function clearAuthCookie(res: NextApiResponse) {
  res.setHeader("Set-Cookie", `${AUTH_COOKIE}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`);
}
