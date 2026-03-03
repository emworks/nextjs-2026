"use server";

import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { signup } from "@/services/user";
import { cookies } from "next/headers";

export const signupAction = async (state: unknown, formData: FormData) => {
  const login = formData.get("new_login")?.toString() ?? "";
  const password = formData.get("new_password")?.toString() ?? "";

  try {
    const result = await signup(login, password);

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
