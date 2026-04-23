import type { LotType } from '../../app/types/lot';

// DTO (Data Transfer Object) - represent the shape returned by the API (snake_case)
export type LotDTO = {
  id: string;
  title: string;
  description: string;
  price: number;
  lot_details: {
    dimensions: {
      width: number;
      depth: number;
    };
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  lot_type: LotType;
  building_type: string;
  status: string;
  image_url: string;
  world: {
    id: string;
    title: string;
  };
  neighborhood: {
    id: string;
    title: string;
  };
};
