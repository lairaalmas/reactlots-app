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
  transaction: {
    type: string;
    main_price: number;
    rent?: RentFields;
    rent_details?: {
      in_game?: RentFields;
      pre_game?: RentFields;
    };
    buy?: {
      price: number;
    };
    buy_details?: {
      pre_game?: number;
      in_game?: number;
    };
  };
  building_details: {
    type: string;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
};
