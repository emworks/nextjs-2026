import { BASE_API_URL } from "@/constants/api";

export const login = async (login: string, password: string) => {
  const result = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (result.status !== 200) throw new Error("invalid login or password");

  return result;
};

export const signup = async (login: string, password: string) => {
  const result = await fetch(`${BASE_API_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (result.status !== 200) throw new Error("invalid login or password");

  return result;
};

export const logout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });

  location.assign("/");
};
