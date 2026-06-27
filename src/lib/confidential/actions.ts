"use server";

import { cookies } from "next/headers";
import { CONFIDENTIAL_ACCESS_COOKIE } from "@/src/lib/confidential/config";

export type UnlockConfidentialResult =
  | { ok: true }
  | { ok: false; error: string };

export async function unlockConfidentialCaseStudy(
  password: string,
): Promise<UnlockConfidentialResult> {
  const expected = process.env.CONFIDENTIAL_ACCESS_PASSWORD;

  if (!expected) {
    return { ok: false, error: "Access is not configured." };
  }

  if (password !== expected) {
    return { ok: false, error: "Incorrect password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(CONFIDENTIAL_ACCESS_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { ok: true };
}
