import type { ReactNode } from 'react';

import { useFavoriteLots } from '../../hooks/custom/useFavoriteLots';
import { FavoriteLotsContext } from './context';

export const FavoriteLotsProvider = ({ children }: { children: ReactNode }) => {
  const value = useFavoriteLots();

  return <FavoriteLotsContext.Provider value={value}>{children}</FavoriteLotsContext.Provider>;
};
