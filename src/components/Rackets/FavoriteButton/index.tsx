"use client";

import { FC, useState, useEffect } from "react";
import { Racket } from "@/types/racket";
import { useUser } from "@/providers/UserProvider";

interface Props {
  userData: Racket["userData"];
}

const FavoriteButton: FC<Props> = ({ userData }) => {
  const user = useUser();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user && userData) {
      const userProduct = userData.find((up) => up.userId === user.id);
      setIsFavorite(userProduct?.isFavorite || false);
    }
  }, [user, userData]);

  if (!user) return null;

  return (
    <button disabled className={isFavorite ? "favorite active" : "favorite"}>
      {isFavorite ? "❤️ В избранном" : "♡ В избранное"}
    </button>
  );
};

export default FavoriteButton;
