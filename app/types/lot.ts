export type RentFields = {
  rent?: number;
  deposit?: number;
  furniture?: number;
  period?: string;
};

// Domain type (used by UI and business logic)
export type Lot = {
  id: string;
  title: string;
  description: string;
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
  type: string;
  dimensions: {
    width: number;
    depth: number;
  };
  availability: string;
  owner?: string;
  transaction: {
    type: string;
    mainPrice: number;
    rent?: RentFields;
    rentDetails?: {
      inGame?: RentFields;
      preGame?: RentFields;
    };
    buy?: {
      price?: number;
    };
    buyDetails?: {
      preGame?: number;
      inGame?: number;
    };
  };
  buildingDetails: {
    type: string;
    bedrooms: number;
    bathrooms: number;
    floors: number;
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
