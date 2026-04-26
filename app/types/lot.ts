// Domain type (used by UI and business logic)
export type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  priceDetails: {
    wiki?: number;
    preGame?: number;
    inGame?: number;
    rent?: number;
    deposit?: number;
    furniture?: number;
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
  worldId: string;
  neighborhoodId: string;
  buildingType: string;
  bedrooms: string;
  bathrooms: string;
  floors: string;
  sort: string;
  sortBy: string;
  transactionType: string;
};

export type GetLotsParams = {
  world?: string;
  neighborhood?: string;
  buildingType?: string;
  bedrooms?: string;
  bathrooms?: string;
  floors?: string;
  sort?: string;
  sortBy?: string;
  transactionType?: string;
};
