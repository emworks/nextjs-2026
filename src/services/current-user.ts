import { BASE_API_URL } from "@/constants/api";
import { UserResponse } from "@/types/user";
import { cookies } from "next/headers";

export interface User {
  id: number;
  login: string;
  isAdmin: boolean;
}

export async function getCurrentUser(): Promise<UserResponse | null> {
  try {
    const cookieStore = await cookies();

    const result = await fetch(`${BASE_API_URL}/auth/user`, {
      credentials: "include",
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    if (result.status === 401) return null;
    if (!result.ok) throw new Error("Failed to fetch user");

    return result.json();
  } catch (err) {
    return null;
  }
}
