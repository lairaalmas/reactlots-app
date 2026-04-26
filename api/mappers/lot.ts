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
    transactionType: dto.transaction_type,
    price: dto.price,
    priceDetails: {
      wiki: dto.price_details?.wiki,
      preGame: dto.price_details?.pre_game,
      inGame: dto.price_details?.in_game,
      rent: dto.price_details?.rent,
      deposit: dto.price_details?.deposit,
      furniture: dto.price_details?.furniture,
    },
    dimensions: {
      width: dto.dimensions.width,
      depth: dto.dimensions.depth,
    },
    type: dto.type,
    availability: dto.availability,
    buildingDetails: {
      type: dto.building_details.type,
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
      color: dto.neighborhood.color,
    },
  };
};

export const mapLots = (lots: LotDTO[]): Lot[] => {
  return lots.map(mapLot);
};
