import type { LotFilters } from '../types/lot';

export const CURRENCY_SYMBOL = '§';

// main source of query params
export const QUERY_PARAM_MAP: LotFilters = {
  world: 'world',
  neighborhood: 'neighborhood',
  bedrooms: 'bedrooms',
  bathrooms: 'bathrooms',
  floors: 'floors',
  sort: 'sort',
  sortBy: 'sort_by',
  buildingType: 'building_type',
  transactionType: 'transaction_type',
} as const;
export const QUERY_PARAM_MAP_KEYS = Object.keys(QUERY_PARAM_MAP) as Array<keyof LotFilters>;
