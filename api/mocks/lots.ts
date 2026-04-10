import type { LotDTO } from '../types/lotDTO';

const mockData: LotDTO = {
  id: 'foundry_cove',
  title: 'Daisy Hovel',
  description: 'Daisy Hovel is nestled between Crick Cabana and Garden Essence. While the house is small, the size of the lot allows for Sims to add on rooms and make the home larger. It also provides a lot of space for gardening and outdoor objects.',
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
  world: 'Willow Creek',
  neighborhood: 'Foundry cove',
};

export const mockGetLotsResponse: { data: LotDTO[] } = {
  data: [
    mockData,
  ],
};

export const mockGetLotByIdResponse = ( id: string ): { data: LotDTO } => ({
  data: mockData,
});