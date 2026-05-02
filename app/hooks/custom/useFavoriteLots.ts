import { useState } from 'react';
import { FAVORITE_LOTS_STORAGE_KEY } from '../../utils/constants';

export const useFavoriteLots = () => {
  // list of favorite lot ids in local storage
  const [favoriteLotIds, setFavoriteLotIds] = useState<string[]>(() => {
    const storedFavoriteLots = localStorage.getItem(FAVORITE_LOTS_STORAGE_KEY);

    if (!storedFavoriteLots) {
      return [];
    }

    return JSON.parse(storedFavoriteLots);
  });

  const toggleFavoriteLot = (lotId: string) => {
    setFavoriteLotIds((currentFavoriteLotIds) => {
      const isFavorite = currentFavoriteLotIds.includes(lotId);

      const nextFavoriteLotIds = isFavorite
        ? // removes favorite
          currentFavoriteLotIds.filter((currentLotId) => currentLotId !== lotId)
        : // adds new favorite
          [...currentFavoriteLotIds, lotId];

      // updates local storage with new state
      localStorage.setItem(FAVORITE_LOTS_STORAGE_KEY, JSON.stringify(nextFavoriteLotIds));

      return nextFavoriteLotIds;
    });
  };

  function isFavoriteLot(lotId: string) {
    return favoriteLotIds.includes(lotId);
  }

  return {
    favoriteLotIds,
    isFavoriteLot,
    toggleFavoriteLot,
  };
};
