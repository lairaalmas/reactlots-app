import type { LotDTO } from '../types/lotDTO';
import type { LotFilters } from '../../app/types/lot';
import { ENV } from '../config/env';
import { QUERY_PARAM_MAP_KEYS, QUERY_PARAM_MAP } from '../../app/utils/constants';

export const getLots = async (params?: Partial<LotFilters>): Promise<LotDTO[]> => {
  const searchParams = new URLSearchParams();

  // get mapped query params from browser (camelCase) on function call
  // append to search params (as snake_case)
  QUERY_PARAM_MAP_KEYS.forEach((key) => {
    const curParam = params?.[key];
    if (curParam) searchParams.append(QUERY_PARAM_MAP[key], curParam);
  });
  searchParams.append('type', 'residential');
  searchParams.append('availability', 'available');

  if (!ENV.BASE_URL) {
    throw new Error('Missing env variable for api BASE_URL');
  }

  // send query params to api
  const url = `${ENV.BASE_URL}/lots?${searchParams.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch lots');
  }

  return response.json();
};

export const getLotById = async (id: string) => {
  if (!ENV.BASE_URL) {
    throw new Error('Missing env variable for api BASE_URL');
  }

  const url = `${ENV.BASE_URL}/lots/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch lot');
  }

  return response.json();
};
