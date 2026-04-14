import { mockGetNeighborhoodsResponse } from '../mocks/utils';
import { mapNeighborhoods } from '../mappers/neighborhood';

const mockDelay = (ms: number) => {
  new Promise((resolve) => setTimeout(resolve, ms));
};

export const getNeighborhoods = async ({ world = '' }) => {
  await mockDelay(200);
  // getNeighborhoods(world='')
  // getNeighborhoods(world='oasis-springs')
  const response = mockGetNeighborhoodsResponse();
  return mapNeighborhoods(response.data);
};
