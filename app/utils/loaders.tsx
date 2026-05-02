import { mapLot, mapLots } from '../../api/mappers/lot';
import { getLotById, getLots } from '../../api/requests/getLots';
import { getNeighborhoods } from '../../api/requests/getNeighborhoods';
import { getWorlds } from '../../api/requests/getWorlds';
import type { LotDTO } from '../../api/types/lotDTO';
import type { Lot, LotFilters } from '../types/lot';
import type { Neighborhood } from '../types/neighborhood';
import type { World } from '../types/world';
import { QUERY_PARAM_MAP, QUERY_PARAM_MAP_KEYS } from './constants';

type HomePageLoaderData = {
  lots: Lot[] | [];
  worlds: World[] | [];
  neighborhoods: Neighborhood[] | [];
  filters: LotFilters;
};

// request, params
export const lotPageLoader = async ({ params }: any): Promise<Lot> => {
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

export const homePageLoader = async ({ request }: any): Promise<HomePageLoaderData> => {
  try {
    // read query params
    const url = new URL(request.url);

    // get query params (from browser) on load
    // map to camelCase
    const queryParams = QUERY_PARAM_MAP_KEYS.reduce((acc, key) => {
      acc[key] = url.searchParams.get(QUERY_PARAM_MAP[key]) || '';
      return acc;
    }, {} as LotFilters);

    // make all API calls in parallel
    const [worldsDTO, neighborhoodsDTO, lotsDTO] = await Promise.all([
      getWorlds(),
      getNeighborhoods(),
      // send query params (camelCase) from browser to bff
      getLots(queryParams),
    ]);

    const lots: Lot[] = mapLots(lotsDTO);

    // return fetched data and query params as filters
    return {
      lots: lots || [],
      worlds: worldsDTO || [],
      neighborhoods: neighborhoodsDTO || [],
      filters: queryParams,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error loading home page data.', error);

    throw new Response('Error loading home page data.', {
      status: 500,
    });
  }
};

export const favoritesPageLoader = async (): Promise<Lot[]> => {
  try {
    const lotsDTO = await getLots();

    const lots: Lot[] = mapLots(lotsDTO);

    return lots;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error loading favorites page data.', error);

    throw new Response('Error loading favorites page data.', {
      status: 500,
    });
  }
};
