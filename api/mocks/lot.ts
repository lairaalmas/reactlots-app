import type { LotDTO } from '../types/lotDTO';

const mockData: LotDTO[] = [
  {
    id: 'bargain-bend',
    title: 'Bargain Bend',
    description: 'A sizeable Backwater lot, perfect for building your dream home.',
    price: 2000,
    lot_details: {
      dimensions: {
        width: 30,
        depth: 20,
      },
      bedrooms: 0,
      bathrooms: 0,
      floors: 0,
    },
    lot_type: 'residential',
    building_type: 'empty_lot',
    status: 'available',
    image_url: 'https://static.wikia.nocookie.net/sims/images/0/06/Bargain_Bend.png/revision/latest?cb=20140912235111',
    world: {
      id: 'willow-creek',
      title: 'Willow Creek',
    },
    neighborhood: {
      id: 'foundry-cove',
      title: 'Foundry cove',
    },
  },
  {
    id: 'vista-quarry',
    title: 'Vista Quarry',
    description:
      'Vista Quarry is an uninhabited lot in Parched Prospect. It is a one-story building, featuring two bedrooms, one bathroom and a study.',
    price: 48023,
    lot_details: {
      dimensions: {
        width: 30,
        depth: 20,
      },
      bedrooms: 2,
      bathrooms: 1,
      floors: 1,
    },
    lot_type: 'residential',
    building_type: 'house',
    status: 'available',
    image_url:
      'https://static.wikia.nocookie.net/sims/images/6/67/Vista_Quarry.png/revision/latest/scale-to-width-down/1000?cb=20151220011254',
    world: {
      id: 'oasis-springs',
      title: 'Oasis Springs',
    },
    neighborhood: {
      id: 'parched-prospect',
      title: 'Parched Prospect',
    },
  },
];

export default mockData;
