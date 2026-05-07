import { createContext } from 'react';

import type { useFavoriteLots } from '../../hooks/custom/useFavoriteLots';

export const FavoriteLotsContext = createContext<ReturnType<typeof useFavoriteLots> | null>(null);
