import type { NeighborhoodDTO } from '../types/neighborhoodDTO';
import { ENV } from '../config/env';

export const getNeighborhoods = async (): Promise<NeighborhoodDTO[]> => {
  if (!ENV.BASE_URL) {
    throw new Error('Missing BASE_URL');
  }

  const url = `${ENV.BASE_URL}/neighborhoods`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch neighborhoods');
  }

  return response.json();
};
