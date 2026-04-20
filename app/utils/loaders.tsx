import { mapLots } from '../../api/mappers/lot';
import { getLotById, getLots } from '../../api/requests/getLots';
import { getNeighborhoods } from '../../api/requests/getNeighborhoods';
import { getWorlds } from '../../api/requests/getWorlds';
import type { LotDTO } from '../../api/types/lotDTO';
import type { WorldDTO } from '../../api/types/worldDTO';
import type { NeighborhoodDTO } from '../../api/types/neighborhoodDTO';
import type { Lot, LotSearchFilters } from '../types/lot';
import type { Neighborhood } from '../types/neighborhood';
import type { World } from '../types/world';

type HomePageLoaderData = {
  lots: Lot[] | [];
  worlds: World[] | [];
  neighborhoods: Neighborhood[] | [];
  filters: LotSearchFilters;
};

export const lotPageLoader = async ({ request, params }: any) => {
  // read params
  const { id } = params;

  if (!id) {
    throw new Response('Lot id is required', { status: 400 });
  }

  return getLotById(id);
};

export const homePageLoader = async ({ request, params }: any): Promise<HomePageLoaderData> => {
  // read query params
  const url = new URL(request.url);
  const filters: LotSearchFilters = {
    worldId: url.searchParams.get('world') || '',
    neighborhoodId: url.searchParams.get('neighborhood') || '',
  };

  // get all worlds - for filter options
  const worlds: WorldDTO[] = await getWorlds();

  // get all neighborhoods - for filter options
  const neighborhoods: NeighborhoodDTO[] = await getNeighborhoods();

  // get filtered lots - for lot result list
  const lots: LotDTO[] = await getLots({ world: filters.worldId, neighborhood: filters.neighborhoodId });
  const mappedLots: Lot[] = mapLots(lots);

  // return fetched data and query params as filters
  return {
    lots: mappedLots || [],
    worlds: worlds || [],
    neighborhoods: neighborhoods || [],
    filters: filters,
  };
};
