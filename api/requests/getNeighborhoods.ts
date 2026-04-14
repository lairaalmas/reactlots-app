import { mockGetNeighborhoodsResponse } from "../mocks/utils";
import { mapNeighborhoods } from "../mappers/neighborhood";

const mockDelay = (ms: number) => {
  new Promise((resolve) => setTimeout(resolve, ms));
}

export const getNeighborhoods = async () => {
  await mockDelay(200);
  const response = mockGetNeighborhoodsResponse();
  return mapNeighborhoods(response.data);
}

// export const getNeighborhoodById = async (id: string) => {
//   await mockDelay(300);
//   const response = mockGetNeighborhoodByIdResponse(id);
//   return mapNeighborhood(response.data);
// }