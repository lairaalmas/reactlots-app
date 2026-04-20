// Readonly tuples of literal values (const assertion)
// export const LOT_TYPES = [
//   'residential',
//   'bar',
//   'generic',
//   'gym',
//   'library',
//   'lounge',
//   'museum',
//   'national Park',
//   'nightclub',
//   'park',
//   'playground',
//   'pool',
//   'vacation rental',
//   'veterinary clinic',
//   'wedding Venue',
// ] as const;

// Union type derived from a tuple (indexed access type)
// export type LotType = (typeof LOT_TYPES)[number];
export type LotType = string;

// Domain type (used by UI and business logic)
export type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  lotDetails: {
    dimensions: {
      width: number;
      depth: number;
    };
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  lotType: LotType;
  buildingType: string;
  status: string;
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
};
