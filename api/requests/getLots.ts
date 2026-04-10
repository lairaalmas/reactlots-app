import { mockGetLotsResponse, mockGetLotByIdResponse } from "../mocks/lots";
import { mapLots, mapLot } from "../mappers/lot";

const mockDelay = (ms: number) => {
  new Promise((resolve) => setTimeout(resolve, ms));
}

export const getLots = async () => {
  await mockDelay(200);
  return mapLots(mockGetLotsResponse.data);
}

export const getLotById = async (id: string) => {
  await mockDelay(300);
  const response = mockGetLotByIdResponse(id);
  return mapLot(response.data);
}