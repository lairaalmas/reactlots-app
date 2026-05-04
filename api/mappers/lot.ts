import type { Lot } from '../../app/types/lot';
import type { LotDTO } from '../types/lotDTO';

// export const setFirstUpperCase = (txt: string) => {
//   if (!txt || typeof txt !== 'string') {
//     return '';
//   }
//   return txt.charAt(0).toUpperCase() + txt.slice(1);
// };

export const mapLot = (dto: LotDTO): Lot => {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    imageUrl: dto.image_url,
    world: {
      id: dto.world.id,
      title: dto.world.title,
    },
    neighborhood: {
      id: dto.neighborhood.id,
      title: dto.neighborhood.title,
      color: dto.neighborhood.color,
    },
    type: dto.type,
    dimensions: {
      width: dto.dimensions.width,
      depth: dto.dimensions.depth,
    },
    availability: dto.availability,
    owner: dto.owner,
    buildingDetails: {
      type: dto.building_details.type,
      apartmentTitle: dto.building_details?.apartment_title,
      bedrooms: dto.building_details.bedrooms,
      bathrooms: dto.building_details.bathrooms,
      floors: dto.building_details.floors,
    },
    transaction: {
      type: dto.transaction?.type,
      mainPrice: dto.transaction?.main_price,
      rentDetails: dto.transaction?.rent_details,
      buyDetails: dto.transaction?.buy_details,
    },
  };
};

export const mapLots = (lots: LotDTO[]): Lot[] => {
  return lots.map(mapLot);
};
