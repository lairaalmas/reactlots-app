import type { Neighborhood } from '../../app/types/neighborhood';
import type { NeighborhoodDTO } from '../types/neighborhoodDTO';

export const mapNeighborhood = (dto: NeighborhoodDTO): Neighborhood => {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    color: dto.color,
    world: {
      id: dto.world.id,
      title: dto.world.title,
    },
  };
};

export const mapNeighborhoods = (dtos: NeighborhoodDTO[]): Neighborhood[] => {
  return dtos.map(mapNeighborhood);
};
