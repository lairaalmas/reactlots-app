import type { LotDTO } from '../types/lotDTO';
import { ENV } from '../config/env';

type GetLotsParams = {
  world?: string;
  neighborhood?: string;
};

export const getLots = async (params?: GetLotsParams): Promise<LotDTO[]> => {
  const searchParams = new URLSearchParams();

  if (params?.world) searchParams.append('world', params.world);
  if (params?.neighborhood) searchParams.append('neighborhood', params.neighborhood);

  if (!ENV.BASE_URL) {
    throw new Error('Missing BASE_URL');
  }

  const url = `${ENV.BASE_URL}/lots?${searchParams.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch lots');
  }

  return response.json();
};

export const getLotById = async (id: string) => {
  if (!ENV.BASE_URL) {
    throw new Error('Missing BASE_URL');
  }

  const url = `${ENV.BASE_URL}/lots/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch lot');
  }

  return response.json();
};
