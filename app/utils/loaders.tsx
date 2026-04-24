import { mapLot, mapLots } from '../../api/mappers/lot';
import { getLotById, getLots } from '../../api/requests/getLots';
import { getNeighborhoods } from '../../api/requests/getNeighborhoods';
import { getWorlds } from '../../api/requests/getWorlds';
import type { LotDTO } from '../../api/types/lotDTO';
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
    // get query params in browser on load
    const filters: LotFilters = {
      worldId: url.searchParams.get('world') || '',
      neighborhoodId: url.searchParams.get('neighborhood') || '',
      buildingStatus: url.searchParams.get('building_status') || '',
      bedrooms: url.searchParams.get('bedrooms') || '',
      bathrooms: url.searchParams.get('bathrooms') || '',
      floors: url.searchParams.get('floors') || '',
      sort: url.searchParams.get('sort') || 'desc',
      sortBy: url.searchParams.get('sort_by') || 'price',
    };

    // make all API calls in parallel
    const [worlds, neighborhoods, lots] = await Promise.all([
      getWorlds(),
      getNeighborhoods(),
      // send query params in browser to bff
      getLots({
        world: filters.worldId,
        neighborhood: filters.neighborhoodId,
        buildingStatus: filters.buildingStatus,
        bedrooms: filters.bedrooms,
        bathrooms: filters.bathrooms,
        floors: filters.floors,
        sort: filters.sort,
        sortBy: filters.sortBy,
      }),
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
