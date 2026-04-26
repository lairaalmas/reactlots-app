import type { LotFilters } from '../../../types/lot';

export const emptyFilter: LotFilters = {
  world: '',
  neighborhood: '',
  floors: '',
  bedrooms: '',
  bathrooms: '',
  buildingType: '',
  sortBy: '',
  sort: '',
  transactionType: '',
};

type Action =
  | { type: 'SET_WORLD'; payload?: string }
  | { type: 'SET_FILTERS'; payload: Partial<LotFilters> }
  | { type: 'CLEAR_FILTERS' };

export const filtersReducer = (state: LotFilters, action: Action): LotFilters => {
  switch (action.type) {
    case 'SET_WORLD':
      return {
        ...state,
        world: action?.payload || '',
        neighborhood: '',
      };
    case 'SET_FILTERS':
      return {
        ...state,
        ...action.payload,
      };
    case 'CLEAR_FILTERS':
      return emptyFilter;
    default:
      return state;
  }
};
