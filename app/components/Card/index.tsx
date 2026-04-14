import { Link } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { CURRENCY_SYMBOL } from '../../utils/constants';

export const Card = ({ lot }: { lot: Lot }) => {
  return (
    <div className="row my-4">
      <div className="col-4">
        <Link to={`/lots/${lot?.id}`}>
          <img className="rlt-search-list__item__thumb" src={lot.imageUrl} alt={`${lot?.title} lot picture`} />
        </Link>
      </div>
      <div className="col-8">
        <header className="container">
          <small>{lot?.isEmptyLot ? 'Empty lot' : lot?.type}</small>
          <h3>
            <Link className="link-underline link-underline-opacity-0" to={`/lots/${lot?.id}`}>
              {lot?.title}
            </Link>
          </h3>
        </header>

        <ul className="list-unstyled container">
          <li>
            <span className="material-symbols-rounded">location_on</span> {lot?.neighborhood?.title},{' '}
            {lot?.world?.title}
          </li>
          <li className="mt-3">
            <p className="rlt-search-list__item__description">
              <strong>Description:</strong> {lot?.description}
            </p>
          </li>
          <li>
            <ul className="list-unstyled mt-3">
              <li className="d-flex gap-1 align-items-center">
                <strong>Price:</strong> {CURRENCY_SYMBOL} {lot?.price}
              </li>
              <li>
                <strong>Dimesions:</strong> {lot?.lotDetails?.dimensions?.width} &times;{' '}
                {lot?.lotDetails?.dimensions?.depth}
              </li>
              <li className="d-flex">
                <strong className="me-2">Caracteristics:</strong>

                <ul className="list-unstyled d-flex gap-2">
                  <li className="d-flex gap-1 align-items-center">
                    <span className="material-symbols-rounded" title="Bedrooms" aria-label="Bedrooms">
                      hotel
                    </span>
                    {lot?.lotDetails?.bedrooms || '-'}
                  </li>
                  <li className="d-flex gap-1 align-items-center">
                    <span className="material-symbols-rounded" title="Bathrooms" aria-label="Bathrooms">
                      shower
                    </span>
                    {lot?.lotDetails?.bathrooms || '-'}
                  </li>
                  <li className="d-flex gap-1 align-items-center">
                    <span className="material-symbols-rounded" title="Floors" aria-label="Floors">
                      layers
                    </span>
                    {lot?.lotDetails?.floors || '-'}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
