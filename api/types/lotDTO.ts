// DTO (Data Transfer Object) - represent the shape returned by the API (snake_case)
export type LotDTO = {
  id: string;
  title: string;
  description: string;
  price: number;
  price_details: {
    wiki?: number;
    pre_game?: number;
    in_game?: number;
    rent?: number;
    deposit?: number;
    furniture?: number;
  };
  transaction_type: string;
  dimensions: {
    width: number;
    depth: number;
  };
  type: string;
  availability: string;
  building_details: {
    type: string;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
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
};
