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
    lotDetails: {
      dimensions: {
        width: dto.lot_details.dimensions.width,
        depth: dto.lot_details.dimensions.depth,
      },
      bedrooms: dto.lot_details.bedrooms,
      bathrooms: dto.lot_details.bathrooms,
      floors: dto.lot_details.floors,
    },
    lotType: setFirstUpperCase(dto.lot_type),
    buildingType: setFirstUpperCase(dto.building_type),
    status: dto.status,
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
