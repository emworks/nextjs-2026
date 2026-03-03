"use server";

import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { login as loginUser } from "@/services/user";
import { cookies } from "next/headers";

export const loginAction = async (state: unknown, formData: FormData) => {
  const login = formData.get("login")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  try {
    const result = await loginUser(login, password);

    const cookiesStore = await cookies();
    const setCookieHeaders = result.headers.getSetCookie();

    if (setCookieHeaders) {
      const parsed = parseSetCookie(setCookieHeaders);
      for (const cookie of parsed) {
        cookiesStore.set(cookie.name, cookie.value, cookie.options);
      }
    }

    return { error: "", redirectTo: "/" };
  } catch {
    return { error: "invalid login or password", redirectTo: undefined };
  }
};
