// DTO (Data Transfer Object) - represent the shape returned by the API (snake_case)
export type LotDTO = {
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
  building_details: {
    type: string;
    status: string;
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
  };
};
