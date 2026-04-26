import { Link } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { Money } from '../Money';

export const Card = ({ lot, index }: { lot: Lot; index: number }) => {
  const availabilityClass = lot?.availability === 'available' ? 'fw-semibold' : 'fw-semibold text-danger';
  const lotTypeClass = lot?.type === 'residential' ? 'fw-semibold' : 'fw-semibold text-danger';
  const buildingTypeClass =
    lot?.buildingDetails?.type === 'house' || lot?.buildingDetails?.type === 'apartment'
      ? 'fw-semibold'
      : 'fw-semibold text-danger';

  return (
    <div className="row my-4">
      {/* <span>{index}.</span> */}
      <div className="col-4">
        <Link to={`/lots/${lot?.id}`}>
          <img className="rlt-search-list__item__thumb" src={lot.imageUrl} alt={`${lot?.title} lot picture`} />
        </Link>
      </div>

      <div className="col-8">
        <div className={`rlt-card--${lot?.neighborhood?.color}`}>
          <span className="material-symbols-rounded mb-2" aria-hidden="true">
            location_on
          </span>{' '}
          {lot?.neighborhood?.title} ({lot?.world?.title})
        </div>

        <header className="d-flex gap-2 justify-content-between">
          <h3>
            <Link className="link-underline link-underline-opacity-0" to={`/lots/${lot?.id}`}>
              {lot?.title}
            </Link>
          </h3>
          <span className="d-flex align-items-center">
            <Money value={lot?.price} />
            {lot?.transactionType === 'rent' && <span>/week</span>}
          </span>
        </header>

        <ul className="list-unstyled">
          {/* <li className="mb-2 sims-blue-light fw-semibold">
            <span className="material-symbols-rounded mb-2" aria-hidden="true">
              location_on
            </span>{' '}
            {lot?.neighborhood?.title} ({lot?.world?.title})
          </li> */}
          <li>
            <strong>Availability:</strong> <span className={availabilityClass}>{lot?.availability}</span>
          </li>
          <li>
            <strong>Lot type:</strong> <span className={lotTypeClass}>{lot?.type}</span>
          </li>
          <li>
            <strong>Building type:</strong> <span className={buildingTypeClass}>{lot?.buildingDetails?.type}</span>
          </li>

          <li>
            <p className="rlt-search-list__item__description m-0">
              <strong>Description:</strong> {lot?.description || '-'}
            </p>
          </li>
          <li>
            <strong>Dimensions:</strong>{' '}
            <span className="sims-blue-light fw-semibold">
              {lot?.dimensions?.width} &times; {lot?.dimensions?.depth}
            </span>
          </li>

          <li className="d-flex">
            <strong className="me-2">Caracteristics:</strong>

            {lot?.buildingDetails?.type !== 'empty' && (
              <ul className="list-unstyled d-flex gap-2 fw-semibold">
                <li className="d-flex gap-1 align-items-center">
                  <span className="sims-gray material-symbols-rounded" title="Bedrooms" aria-label="Bedrooms">
                    hotel
                  </span>
                  <span className="sims-blue-light">{lot?.buildingDetails?.bedrooms || '-'}</span>
                </li>
                <li className="d-flex gap-1 align-items-center">
                  <span className="sims-gray material-symbols-rounded" title="Bathrooms" aria-label="Bathrooms">
                    shower
                  </span>
                  <span className="sims-blue-light">{lot?.buildingDetails?.bathrooms || '-'}</span>
                </li>
                <li className="d-flex gap-1 align-items-center">
                  <span className="sims-gray material-symbols-rounded" title="Floors" aria-label="Floors">
                    layers
                  </span>
                  <span className="sims-blue-light">{lot?.buildingDetails?.floors || '-'}</span>
                </li>
              </ul>
            )}
          </li>

          <li>
            Price History:
            <ul>
              <li
                className={`fw-semibold ${lot?.price === -1 ? 'text-danger' : lot?.price === -2 ? 'text-secondary' : ''}`}
              >
                Price: {lot?.price}
              </li>
              <li
                className={`fw-semibold ${lot?.priceDetails?.preGame === -1 ? 'text-danger' : lot?.priceDetails?.preGame === -2 ? 'text-secondary' : ''}`}
              >
                Pre game: {lot?.priceDetails?.preGame}
              </li>
              <li
                className={`fw-semibold ${lot?.priceDetails?.inGame === -1 ? 'text-danger' : lot?.priceDetails?.inGame === -2 ? 'text-secondary' : ''}`}
              >
                In game: {lot?.priceDetails?.inGame}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
