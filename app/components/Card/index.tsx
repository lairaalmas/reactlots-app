import { Link } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { Money } from '../Money';

export const Card = ({ lot }: { lot: Lot }) => {
  const availabilityClass = lot?.availability === 'available' ? 'fw-semibold' : 'fw-semibold text-danger';
  const lotTypeClass = lot?.type === 'residential' ? 'fw-semibold' : 'fw-semibold text-danger';
  const buildingTypeClass = lot?.buildingDetails?.type === 'house' ? 'fw-semibold' : 'fw-semibold text-danger';
  const buildingStatusClass = 'fw-semibold';

  return (
    <div className="row my-4">
      <div className="col-4">
        <Link to={`/lots/${lot?.id}`}>
          <img className="rlt-search-list__item__thumb" src={lot.imageUrl} alt={`${lot?.title} lot picture`} />
        </Link>
      </div>

      <div className="col-8">
        <header className="d-flex gap-2 justify-content-between">
          <h3>
            <Link className="link-underline link-underline-opacity-0" to={`/lots/${lot?.id}`}>
              {lot?.title}
            </Link>
          </h3>
          <Money value={lot?.price} />
        </header>

        <ul className="list-unstyled">
          <li className="mb-2 sims-blue-light fw-semibold">
            <span className="material-symbols-rounded mb-2" aria-hidden="true">
              location_on
            </span>{' '}
            {lot?.neighborhood?.title} ({lot?.world?.title})
          </li>
          <li>
            <strong>Availability:</strong> <span className={availabilityClass}>{lot?.availability}</span>
          </li>
          <li>
            <strong>Lot type:</strong> <span className={lotTypeClass}>{lot?.type}</span>
          </li>
          <li>
            <strong>Building type:</strong> <span className={buildingTypeClass}>{lot?.buildingDetails?.type}</span>
          </li>
          <li className="mb-2">
            <strong>Building status:</strong>{' '}
            <span className={buildingStatusClass}>{lot?.buildingDetails?.status}</span>
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
          </li>
        </ul>
      </div>
    </div>
  );
};
