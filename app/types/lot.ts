// Domain type (used by UI and business logic)
export type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  dimensions: {
    width: number;
    depth: number;
  };
  type: string;
  availability: string;
  buildingDetails: {
    type: string;
    status: string;
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
  };
};

export type LotFilters = {
  worldId: string;
  neighborhoodId: string;
  buildingStatus: string;
  bedrooms: string;
  bathrooms: string;
  floors: string;
  sort: string;
  sortBy: string;
};

export type GetLotsParams = {
  world?: string;
  neighborhood?: string;
  buildingStatus?: string;
  bedrooms?: string;
  bathrooms?: string;
  floors?: string;
  sort?: string;
  sortBy?: string;
};
