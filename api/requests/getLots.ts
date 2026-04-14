import { mockGetLotsResponse, mockGetLotByIdResponse } from "../mocks/utils";
import { mapLots, mapLot } from "../mappers/lot";

const mockDelay = (ms: number) => {
  new Promise((resolve) => setTimeout(resolve, ms));
}

export const getLots = async ({ world = '', neighborhood = '' }: any) => {
  await mockDelay(200);
  // mock all
  // mock filtered lots
  const response = mockGetLotsResponse(); 
  return mapLots(response.data);
}

export const getLotById = async (id: string) => {
  await mockDelay(300);
  // mock selected lot
  const response = mockGetLotByIdResponse(id);
  return mapLot(response.data);
}