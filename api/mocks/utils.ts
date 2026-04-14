import mockLotData from './lot';
import mockNeighborhoodData from './neighborhood';
import mockWorldData from './world';
import type { LotDTO } from '../types/lotDTO';
import type { NeighborhoodDTO } from '../types/neighborhoodDTO';
import type { WorldDTO } from '../types/worldDTO';

export const mockGetLotsResponse = (): { data: LotDTO[] } => ({
  data: mockLotData,
});
export const mockGetNeighborhoodsResponse = (): { data: NeighborhoodDTO[] } => ({
  data: mockNeighborhoodData,
});
export const mockGetWorldsResponse = (): { data: WorldDTO[] } => ({
  data: mockWorldData,
});

export const mockGetLotByIdResponse = (id: string): { data: LotDTO } => ({
  data: mockLotData[0],
});
// export const mockGetNeighborhoodByIdResponse = ( id: string ): { data: NeighborhoodDTO } => ({
//   data: mockNeighborhoodData[0],
// });
// export const mockGetWorldByIdResponse = ( id: string ): { data: WorldDTO } => ({
//   data: mockWorldData[0],
// });
