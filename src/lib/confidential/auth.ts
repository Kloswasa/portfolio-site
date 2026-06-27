import { cookies } from "next/headers";
import { CONFIDENTIAL_ACCESS_COOKIE } from "@/src/lib/confidential/config";

export async function isConfidentialUnlocked(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(CONFIDENTIAL_ACCESS_COOKIE)?.value === "1";
}
