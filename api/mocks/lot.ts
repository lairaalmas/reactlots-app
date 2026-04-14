import type { LotDTO } from '../types/lotDTO';

const mockData: LotDTO[] = [
  {
    id: 'daisy-hovel',
    title: 'Daisy Hovel',
    description: 'Daisy Hovel is nestled between Crick Cabana and Garden Essence. While the house is small, the size of the lot allows for Sims to add on rooms and make the home larger. It also provides a lot of space for gardening and outdoor objects.',
    price: 16311,
    type: 'Residential',
    is_empty_lot: false,
    is_available: true,
    lot_details: {
      dimensions: {
        width: 30,
        depth: 20,
      },
      bedrooms: 2,
      bathrooms: 1,
      floors: 1,
    },
    image_url: 'https://static.wikia.nocookie.net/sims/images/6/67/Vista_Quarry.png/revision/latest/scale-to-width-down/1000?cb=20151220011254',
    world: {
      id: 'oasis-springs',
      title: 'Oasis Springs',
    },
    neighborhood: {
      id: 'vista-quarry',
      title: 'Vista Quarry',
    },
  },
    {
    id: 'vista-quarry',
    title: 'Vista Quarry',
    description: 'Vista Quarry is an uninhabited lot in Parched Prospect. It is a one-story building, featuring two bedrooms, one bathroom and a study.',
    price: 48023,
    type: 'Residential',
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
    world: {
      id: 'willow-creek',
      title: 'Willow Creek',
    },
    neighborhood: {
      id: 'foundry-cove',
      title: 'Foundry cove',
    },
  },
];

export default mockData;