import type { LotDTO } from "../types/lotDTO";

export const mapLot = (dto: LotDTO) => {
    return {
        id: dto.id,
        title: dto.title,
        description: dto.description,
        price: dto.price,
        type: dto.type,
        isEmptyLot: dto.is_empty_lot,
        isAvailable: dto.is_available,
        lotDetails: {
            dimensions: {
                width: dto.lot_details.dimensions.width,
                depth: dto.lot_details.dimensions.depth,
            },
            bedrooms: dto.lot_details.bedrooms,
            bathrooms: dto.lot_details.bathrooms,
            floors: dto.lot_details.floors,
        },
        imageUrl: dto.image_url,
        world: dto.world,
        neighborhood: dto.neighborhood,
    };
};

export const mapLots = (dtos: LotDTO[]) => {
    return dtos.map(mapLot);
}