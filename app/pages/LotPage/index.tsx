import { useLoaderData } from "react-router-dom";
import type { Lot } from "../../types/lot";
import { CURRENCY_SYMBOL } from "../../utils/constants";


const LotPage = () => {
  const lot = useLoaderData() as Lot;

  return <>
    <span>Lot PAGE</span>
    <div>
      <ul>
        <li>Title: {lot.title}</li>
        <li>Description: {lot.description}</li>
        <li>Price: {CURRENCY_SYMBOL} {lot.price}</li>
        <li>World: {lot.world}</li>
        <li>Neighborhood: {lot.neighborhood}</li>
        {/* <li>Type: {lot.type}</li> */}
        {/* <li>Is Empty Lot: {lot.isEmptyLot ? 'Yes' : 'No'}</li> */}
        {/* <li>Is Available: {lot.isAvailable ? 'Yes' : 'No'}</li> */}
        <li>Dimensions: {lot.lotDetails.dimensions.width} x {lot.lotDetails.dimensions.depth}</li>
        <li>Bedrooms: {lot.lotDetails.bedrooms}</li>
        <li>Bathrooms: {lot.lotDetails.bathrooms}</li>
        <li>Floors: {lot.lotDetails.floors}</li>
        <li><img src={lot.imageUrl} alt={lot.title} /></li>
      </ul>
    </div>
  </>
}

export default LotPage;