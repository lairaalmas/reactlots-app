import type { LotType } from "../../app/types/lot";

// DTO (Data Transfer Object) - represent the shape returned by the API (snake_case)
export type LotDTO = {
  id: string;
  title: string;
  description: string;
  price: number;
  type: LotType;
  is_empty_lot: boolean;
  is_available: boolean;
  lot_details: {
    dimensions: {
      width: number;
      depth: number;
    }
    bedrooms: number;
    bathrooms: number;
    floors: number;
  },
  image_url: string;
  world_title: string;
  neighborhood_title: string;
};