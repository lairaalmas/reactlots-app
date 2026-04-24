import type { Lot } from '../../app/types/lot';
import type { LotDTO } from '../types/lotDTO';

export const setFirstUpperCase = (txt: string) => {
  if (!txt || typeof txt !== 'string') {
    return '';
  }

  return txt.charAt(0).toUpperCase() + txt.slice(1);
};

export const mapLot = (dto: LotDTO): Lot => {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    price: dto.price,
    dimensions: {
      width: dto.dimensions.width,
      depth: dto.dimensions.depth,
    },
    type: dto.type, // setFirstUpperCase(dto.type),
    availability: dto.availability,
    buildingDetails: {
      type: dto.building_details.type, // setFirstUpperCase(dto.building_details.type),
      status: dto.building_details.status,
      bedrooms: dto.building_details.bedrooms,
      bathrooms: dto.building_details.bathrooms,
      floors: dto.building_details.floors,
    },
    imageUrl: dto.image_url,
    world: {
      id: dto.world.id,
      title: dto.world.title,
    },
    neighborhood: {
      id: dto.neighborhood.id,
      title: dto.neighborhood.title,
    },
  };
};

export const mapLots = (lots: LotDTO[]): Lot[] => {
  return lots.map(mapLot);
};
