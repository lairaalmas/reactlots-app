import { getLotById, getLots } from '../../api/requests/getLots';
import { getNeighborhoods } from '../../api/requests/getNeighborhoods';
import { getWorlds } from '../../api/requests/getWorlds';
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
  // read params
  const url = new URL(request.url);
  const filters: LotSearchFilters = {
    worldId: url.searchParams.get('world') || '',
    neighborhoodId: url.searchParams.get('neighborhood') || '',
  };

  // get all worlds
  const worlds: World[] = await getWorlds();
  // get all OR neighborhoods from world
  const neighborhoods: Neighborhood[] = await getNeighborhoods({ world: filters.worldId });

  // get filtered lots
  const lots: Lot[] = await getLots({ world: filters.worldId, neighborhood: filters.neighborhoodId });

  // return all + filter
  return {
    lots: lots || [],
    worlds: worlds || [],
    neighborhoods: neighborhoods || [],
    filters: filters,
  };
};
