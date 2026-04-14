import { Link } from "react-router-dom";
import { CURRENCY_SYMBOL } from "../../utils/constants";

export const Card = ({ lot }: any) => {
  return <div>
    <ul className="list-unstyled row">
      <div className="col-4">
        <li>
          <img className="img-fluid" src={lot.imageUrl}/>
        </li>
      </div>
      <div className="col-8">
        <li>{lot?.isEmptyLot ? 'Empty lot' : lot?.type}</li>
        <h3>
          <Link to={`/lots/${lot?.id}`}>
            {lot?.title}  
          </Link>
        </h3>
        <li><span className="material-symbols-rounded">location_on</span> {lot?.neighborhood?.title}, {lot?.world?.title}</li>
        <li className="mt-3"><small><strong>Description:</strong> {lot?.description}</small></li>
        <li className="mt-3">{CURRENCY_SYMBOL} {lot?.price}</li>
        <div className="mt-3 d-flex gap-3">
          {!lot?.isEmptyLot && <>
            <li className="d-flex gap-1 align-items-center">
              <span className="material-symbols-rounded" title='Bedrooms' aria-label="Bedrooms">hotel</span>
              {lot?.lotDetails?.bedrooms}
            </li> 
            <li className="d-flex gap-1 align-items-center">
              <span className="material-symbols-rounded" title='Bathrooms' aria-label="Bathrooms">shower</span>
              {lot?.lotDetails?.bathrooms}
            </li> 
            <li className="d-flex gap-1 align-items-center">
              <span className="material-symbols-rounded" title='Floors' aria-label="Floors">layers</span>
              {lot?.lotDetails?.floors}
            </li>
          </>}
          <li>
            {lot?.lotDetails?.dimensions?.width} &times; {lot?.lotDetails?.dimensions?.depth}
          </li>
        </div>
      </div>
    </ul>
  </div>
};