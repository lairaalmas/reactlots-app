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
    price: dto.price,
    priceHistory: {
      wiki: dto.price_history?.wiki,
      preGame: dto.price_history?.pre_game,
      inGame: dto.price_history?.in_game,
    },
    rentDetails: {
      rent: dto.rent_details?.rent,
      deposit: dto.rent_details?.deposit,
      furniture: dto.rent_details?.furniture,
      period: dto.rent_details?.period,
    },
    transactionType: dto.transaction_type,
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
    owner: dto.owner,
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
