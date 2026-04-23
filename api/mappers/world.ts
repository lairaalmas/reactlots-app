import type { World } from '../../app/types/world';
import type { WorldDTO } from '../types/worldDTO';

export const mapWorld = (dto: WorldDTO): World => {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
  };
};

export const mapWorlds = (dtos: WorldDTO[]): World[] => {
  return dtos.map(mapWorld);
};
