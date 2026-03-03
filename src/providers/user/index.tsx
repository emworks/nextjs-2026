"use client";

import { createContext, useContext, FC, PropsWithChildren } from "react";
import { User } from "@/types/user";

export const UserContext = createContext<User | undefined>(undefined);

interface Props extends PropsWithChildren {
  user: User | undefined;
}

export const UserProvider: FC<Props> = ({ children, user }) => {
  return <UserContext value={user}>{children}</UserContext>;
};

export const useUser = () => useContext(UserContext);
