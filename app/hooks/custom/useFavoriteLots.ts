import { useState } from 'react';
import { FAVORITE_LOTS_STORAGE_KEY } from '../../utils/constants';

export const useFavoriteLots = () => {
  // list of favorite lot ids in local storage
  const [favoriteLotIds, setFavoriteLotIds] = useState<string[]>(() => {
    const storedFavoriteLots = localStorage.getItem(FAVORITE_LOTS_STORAGE_KEY);

    if (!storedFavoriteLots) return [];

    return JSON.parse(storedFavoriteLots);
  });

  const toggleFavoriteLot = (lotId: string) => {
    setFavoriteLotIds((curFavoriteIds) => {
      const isFavorite = curFavoriteIds.includes(lotId);

      const nextFavoriteIds = isFavorite
        ? curFavoriteIds.filter((curId) => curId !== lotId)
        : [...curFavoriteIds, lotId];

      // updates local storage with new state
      localStorage.setItem(FAVORITE_LOTS_STORAGE_KEY, JSON.stringify(nextFavoriteIds));

      return nextFavoriteIds;
    });
  };

  const isFavoriteLot = (lotId: string) => favoriteLotIds.includes(lotId);

  return {
    favoriteLotIds,
    isFavoriteLot,
    toggleFavoriteLot,
  };
};
