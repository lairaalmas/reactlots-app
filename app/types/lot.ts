// Readonly tuples of literal values (const assertion)
export const LOT_TYPES = [
  'Residential',
  'Bar',
  'Generic',
  'Gym',
  'Library',
  'Lounge',
  'museum',
  'National Park',
  'Nightclub',
  'Park',
  'Playground',
  'Pool',
  'Vacation rental',
  'Veterinary Clinic',
  'Wedding Venue',
] as const;

// Union type derived from a tuple (indexed access type)
export type LotType = (typeof LOT_TYPES)[number];

// Domain type (used by UI and business logic)
export type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  type: LotType;
  isEmptyLot: boolean;
  isAvailable: boolean;
  lotDetails: {
    dimensions: {
      width: number;
      depth: number;
    };
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

export type LotSearchFilters = {
  worldId: string;
  neighborhoodId: string;
};
