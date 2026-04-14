import type { NeighborhoodDTO } from '../types/neighborhoodDTO';

const mockData: NeighborhoodDTO[] = [
  // fc
  {
    id: 'foundry-cove',
    title: 'Foundry cove',
    description: '',
    world: {
      id: 'willow-creek',
      title: 'Willow Creek',
    },
  },
  {
    id: 'courtyard-lane',
    title: 'Courtyard Lane',
    description: '',
    world: {
      id: 'willow-creek',
      title: 'Willow Creek',
    },
  },
  // os
  {
    id: 'bedrock-strait',
    title: 'Bedrock Strait',
    description: '',
    world: {
      id: 'oasis-springs',
      title: 'Oasis Springs',
    },
  },
  {
    id: 'parched-prospect',
    title: 'Parched Prospect',
    description: '',
    world: {
      id: 'oasis-springs',
      title: 'Oasis Springs',
    },
  }
];

export default mockData;