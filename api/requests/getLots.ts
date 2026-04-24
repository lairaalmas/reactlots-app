import type { LotDTO } from '../types/lotDTO';
import type { GetLotsParams } from '../../app/types/lot';
import { ENV } from '../config/env';

export const getLots = async (params?: GetLotsParams): Promise<LotDTO[]> => {
  const searchParams = new URLSearchParams();

  // get query params from browser on function call
  if (params?.world) searchParams.append('world', params.world);
  if (params?.neighborhood) searchParams.append('neighborhood', params.neighborhood);
  if (params?.buildingStatus) searchParams.append('building_status', params.buildingStatus);
  if (params?.bedrooms) searchParams.append('bedrooms', params.bedrooms);
  if (params?.bathrooms) searchParams.append('bathrooms', params.bathrooms);
  if (params?.floors) searchParams.append('floors', params.floors);
  searchParams.append('sort', params?.sort || 'asc');
  searchParams.append('sort_by', params?.sortBy || 'price');
  searchParams.append('type', 'residential');
  // searchParams.append('availability', 'available');

  if (!ENV.BASE_URL) {
    throw new Error('Missing env variable for BASE_URL');
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
    throw new Error('Missing env variable for BASE_URL');
  }

  const url = `${ENV.BASE_URL}/lots/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch lot');
  }

  return response.json();
};
