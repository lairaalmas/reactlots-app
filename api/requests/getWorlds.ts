import type { WorldDTO } from '../types/worldDTO';
import { ENV } from '../config/env';

export const getWorlds = async (): Promise<WorldDTO[]> => {
  if (!ENV.BASE_URL) {
    throw new Error('Missing env variable for BASE_URL');
  }

  const url = `${ENV.BASE_URL}/worlds`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch worlds');
  }

  return response.json();
};
