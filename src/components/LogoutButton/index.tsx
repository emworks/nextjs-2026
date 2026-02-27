"use client";

import { UserContext } from "@/providers/UserProvider";
import { logout } from "@/services/user";
import { use, useTransition } from "react";

export const LogoutButton = () => {
  const user = use(UserContext);

  const [isPending, startTransition] = useTransition();

  if (!user) {
    return null;
  }

  return (
    <button onClick={() => startTransition(logout)} disabled={isPending}>
      Выйти
    </button>
  );
};
