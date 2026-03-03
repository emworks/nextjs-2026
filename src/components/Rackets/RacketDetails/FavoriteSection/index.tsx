"use client";

import {
  useHydrateFavorite,
  useIsFavoriteById,
} from "@/providers/favorite/hooks";

import FavoriteButton from "@/components/Rackets/FavoriteButton";

export default function FavoriteSection({
  racketId,
  isFavorite,
}: {
  racketId: number;
  isFavorite?: boolean;
}) {
  useHydrateFavorite({
    id: racketId,
    isFavorite,
  });

  const favorite = useIsFavoriteById({
    id: racketId,
    isFavoriteInitial: isFavorite,
  });

  return <FavoriteButton racketId={racketId} isFavorite={favorite} />;
}
