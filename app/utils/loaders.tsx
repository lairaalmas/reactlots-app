import { mapLot, mapLots } from '../../api/mappers/lot';
import { getLotById, getLots } from '../../api/requests/getLots';
import { getNeighborhoods } from '../../api/requests/getNeighborhoods';
import { getWorlds } from '../../api/requests/getWorlds';
import type { LotDTO } from '../../api/types/lotDTO';
import type { WorldDTO } from '../../api/types/worldDTO';
import type { NeighborhoodDTO } from '../../api/types/neighborhoodDTO';
import type { Lot, LotFilters } from '../types/lot';
import type { Neighborhood } from '../types/neighborhood';
import type { World } from '../types/world';

type HomePageLoaderData = {
  lots: Lot[] | [];
  worlds: World[] | [];
  neighborhoods: Neighborhood[] | [];
  filters: LotFilters;
};

export const lotPageLoader = async ({ request, params }: any): Promise<Lot> => {
  // read params
  const { id } = params;

  if (!id) {
    throw new Response('Lot id is required', { status: 400 });
  }

  const lot: LotDTO = await getLotById(id);
  const mappedLot: Lot = mapLot(lot);

  // return fetched lot
  return mappedLot;
};

export const homePageLoader = async ({ request, params }: any): Promise<HomePageLoaderData> => {
  try {
    // read query params
    const url = new URL(request.url);
    const filters: LotFilters = {
      worldId: url.searchParams.get('world') || '',
      neighborhoodId: url.searchParams.get('neighborhood') || '',
    };

    // make all API calls in parallel
    const [worlds, neighborhoods, lots] = await Promise.all([
      getWorlds(),
      getNeighborhoods(),
      getLots({ world: filters.worldId, neighborhood: filters.neighborhoodId }),
    ]);

    const mappedLots: Lot[] = mapLots(lots);

    // return fetched data and query params as filters
    return {
      lots: mappedLots || [],
      worlds: worlds || [],
      neighborhoods: neighborhoods || [],
      filters: filters,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error loading home page data.', error);

    throw new Response('Error loading home page data.', {
      status: 500,
    });
  }
};
