"use client";

import { Racket } from "@/types/racket";
import {
  createContext,
  useState,
  useCallback,
  PropsWithChildren,
  FC,
} from "react";

export type SetFavorite = { id: Racket["id"]; isFavorite?: boolean };

type FavoriteContextType = {
  favorites?: Record<Racket["id"], boolean>;
  setFavorite?: (params: SetFavorite) => void;
};

export const FavoriteContext = createContext<FavoriteContextType>({});

export const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState({});

  const setFavorite = useCallback(({ id, isFavorite }: SetFavorite) => {
    setFavorites((prev: Record<Racket["id"], boolean>) => {
      if (prev[id] === isFavorite) {
        return prev;
      }

      return {
        ...prev,
        [id]: isFavorite,
      };
    });
  }, []);

  return (
    <FavoriteContext value={{ favorites, setFavorite }}>
      {children}
    </FavoriteContext>
  );
};
