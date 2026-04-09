import type { LotDTO } from '../types/lotDTO';

const mockData: LotDTO = {
  id: 'foundry_cove',
  title: 'Daisy Hovel',
  description: 'Daisy Hovel is nestled between Crick Cabana and Garden Essence...',
  price: 16311,
  type: 'residential',
  is_empty_lot: false,
  is_available: true,
  lot_details: {
    dimensions: {
      width: 30,
      depth: 20,
    },
    bedrooms: 1,
    bathrooms: 1,
    floors: 1,
  },
  image_url: 'https://static.wikia.nocookie.net/sims/images/6/6c/Daisy_Hovel.png/revision/latest?cb=20140913000538',
  world: 'willow_creek',
  neighborhood: 'foundry_cove',
};

export const mockGetLotsResponse: { data: LotDTO[] } = {
  data: [
    mockData,
  ],
};

export const mockGetLotByIdResponse = ( id: string ): { data: LotDTO } => ({
  data: mockData,
});