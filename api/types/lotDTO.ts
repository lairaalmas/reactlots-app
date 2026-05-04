import type { RentFields } from '../../app/types/lot';

// DTO (Data Transfer Object) - represent the shape returned by the API (snake_case)
export type LotDTO = {
  id: string;
  title: string;
  description: string;
  image_url: string;
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
  building_details: {
    type: string;
    apartment_title?: string;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  transaction: {
    type: string;
    main_price: number;
    rent_details?: {
      rent?: number;
      deposit?: number;
      furniture?: number;
      period?: string;
      price_history?: {
        pre_game?: { furniture: number };
        in_game?: { furniture: number };
      };
    };
    buy_details?: {
      price?: number;
      price_history?: {
        pre_game?: number;
        in_game?: number;
      };
    };
  };
};
