import { mapLot, mapLots } from '../../api/mappers/lot';
import { getLotById, getLots } from '../../api/requests/getLots';
import { getNeighborhoods } from '../../api/requests/getNeighborhoods';
import { getWorlds } from '../../api/requests/getWorlds';
import type { LotDTO } from '../../api/types/lotDTO';
import type { Lot, LotFilters } from '../types/lot';
import type { Neighborhood } from '../types/neighborhood';
import type { World } from '../types/world';
import { QUERY_PARAM_MAP, FILTER_KEYS } from './constants';

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
    const filters = FILTER_KEYS.reduce((acc, key) => {
      acc[key] = url.searchParams.get(QUERY_PARAM_MAP[key]) || '';
      return acc;
    }, {} as LotFilters);

    // make all API calls in parallel
    const [worlds, neighborhoods, lots] = await Promise.all([
      getWorlds(),
      getNeighborhoods(),
      // send query params in browser to bff
      getLots({ ...filters }),
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
