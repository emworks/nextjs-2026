"use client";

import { FC, useCallback } from "react";
import { useUser } from "@/providers/user";
import { useSetIsFavorite } from "@/providers/favorite/hooks";
import { BASE_API_URL } from "@/constants/api";

type Props = {
  racketId: number;
  isFavorite: boolean;
};

const handleFavorite = async ({ isFavorite, racketId }: Props) => {
  const url = `${BASE_API_URL}/product/${racketId}/favorite`;

  return fetch(url, {
    credentials: "include",
    method: isFavorite ? "DELETE" : "POST",
  });
};

const FavoriteButton: FC<Props> = ({ racketId, isFavorite }) => {
  const user = useUser();

  const setIsFavorite = useSetIsFavorite();

  const handleClick = useCallback(
    async ({ racketId, isFavorite }: Props) => {
      setIsFavorite?.({ isFavorite: !isFavorite, id: racketId });
      await handleFavorite({ racketId, isFavorite });
    },
    [setIsFavorite],
  );

  if (!user) return null;

  return (
    <button
      onClick={() => handleClick({ racketId, isFavorite })}
      className={isFavorite ? "favorite active" : "favorite"}
    >
      {isFavorite ? "❤️ В избранном" : "♡ В избранное"}
    </button>
  );
};

export default FavoriteButton;
