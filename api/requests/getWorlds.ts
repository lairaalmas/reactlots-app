import { mockGetWorldsResponse } from '../mocks/utils';
import { mapWorlds } from '../mappers/world';

const mockDelay = (ms: number) => {
  new Promise((resolve) => setTimeout(resolve, ms));
};

export const getWorlds = async () => {
  await mockDelay(200);
  const response = mockGetWorldsResponse();
  return mapWorlds(response.data);
};
