// Readonly tuples of literal values (const assertion)
export const LOT_TYPES = ['residential', 'bar', 'generic', 'gym', 'library', 'lounge', 'museum', 'national_park', 'nightclub', 'park', 'playground', 'pool', 'vacation_rental', 'vet_clinic', 'wedding_venue'] as const;

// Union type derived from a tuple (indexed access type)
export type LotType = typeof LOT_TYPES[number];

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
    }
    bedrooms: number;
    bathrooms: number;
    floors: number;
  },
  imageUrl: string;
  worldTitle: string;
  neighborhoodTitle: string;
};