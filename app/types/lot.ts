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
  buildingDetails: {
    type: string;
    apartmentTitle?: string;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  transaction: {
    type: string;
    mainPrice: number;
    rent?: RentFields;
    rentDetails?: {
      rent?: number;
      deposit?: number;
      furniture?: number;
      period?: string;
      priceHistory?: {
        preGame?: { furniture: number };
        inGame?: { furniture: number };
      };
    };
    buyDetails?: {
      price?: number;
      priceHistory?: {
        preGame?: number;
        inGame?: number;
      };
    };
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
