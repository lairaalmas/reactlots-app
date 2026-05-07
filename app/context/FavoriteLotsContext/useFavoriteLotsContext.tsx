import { useContext } from 'react';

import { FavoriteLotsContext } from './context';

export const useFavoriteLotsContext = () => {
  const context = useContext(FavoriteLotsContext);

  if (!context) throw new Error('useFavoriteLotsContext must be used within a provider');

  return context;
};
