// Domain type (used by UI and business logic)
export type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  priceHistory: {
    wiki?: number;
    preGame?: number;
    inGame?: number;
  };
  rentDetails: {
    rent?: number;
    deposit?: number;
    furniture?: number;
    period?: number;
  };
  transactionType: string;
  dimensions: {
    width: number;
    depth: number;
  };
  type: string;
  availability: string;
  buildingDetails: {
    type: string;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  owner?: string;
  imageUrl: string;
  world: {
    id: string;
    title: string;
  };
  neighborhood: {
    id: string;
    title: string;
    color: string;
  };
};

export type LotFilters = {
  world: string;
  neighborhood: string;
  buildingType: string;
  bedrooms: string;
  bathrooms: string;
  floors: string;
  sort: string;
  sortBy: string;
  transactionType: string;
};
