"use client";

import { UserContext } from "@/providers/UserProvider";
import { use } from "react";
import { LogoutButton } from "@/components/LogoutButton";
import MenuLink from "@/components/MenuLink";

export const LoginSection = () => {
  const user = use(UserContext);

  return user ? (
    <>
      <div>hello, {user.login}</div>
      <LogoutButton />
    </>
  ) : (
    <>
      <MenuLink href="/login">Login</MenuLink>
      <MenuLink href="/signup">Signup</MenuLink>
    </>
  );
};
