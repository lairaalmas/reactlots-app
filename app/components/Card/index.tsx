import { Link } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { Money } from '../Money';
import { Icon } from '../Icon';
import { ButtonFavorite } from '../ButtonFavorite';

type CardComponent = { lot: Lot; index: number; isFavoriteLot: any; toggleFavoriteLot: any };

export const Card = ({ lot, index, isFavoriteLot, toggleFavoriteLot }: CardComponent) => {
  if (!lot) return <></>; // TODO: add error card

  const neighborhoodTheme = `rlt-card--${lot?.neighborhood?.color}`;

  const buildingTypes = ['house', 'apartment', 'empty'];
  const buildingTypeClass = buildingTypes.includes(lot?.buildingDetails?.type) ? '' : 'text-danger';

  const availabilityClass = lot?.availability === 'available' ? '' : 'text-danger';
  const lotTypeClass = lot?.type === 'residential' ? '' : 'text-danger';

  const parseString = (value: string) => {
    const invalidValues = ['', 'UNKNOWN', 'TBD'];

    if (invalidValues.includes(value)) return '-';

    return value;
  };

  const parseNumber = (value: number) => {
    if (!value || value < 1) return '-';
    return value;
  };

  const lotImage = () => (
    <div className="col-4">
      <Link to={`/lots/${lot?.id}`}>
        <img className="rlt-search-list__item__thumb" src={lot.imageUrl} alt={`${lot?.title} lot picture`} />
      </Link>
    </div>
  );

  const headerInfo = () => (
    <header>
      <div>
        <span className={neighborhoodTheme}>
          <Icon name="location_on" />
        </span>{' '}
        {lot?.neighborhood?.title} ({lot?.world?.title})
      </div>

      <div className="d-flex gap-2 justify-content-between">
        <h3>
          <Link className="link-underline link-underline-opacity-0" to={`/lots/${lot?.id}`}>
            {lot?.title}
          </Link>
        </h3>
        <span className="d-flex align-items-center">
          {lot?.price > 0 ? <Money value={lot.price} /> : '-'}
          {lot?.transactionType === 'rent' ||
            (lot?.transactionType === 'both' && <span>/{lot?.rentDetails?.period}</span>)}
        </span>
      </div>
    </header>
  );

  const lotInfo = () => (
    <ul className="list-unstyled mb-3">
      <li>
        <strong>Availability:</strong> <span className={availabilityClass}>{parseString(lot?.availability)}</span>
      </li>
      <li>
        <strong>Lot type:</strong> <span className={lotTypeClass}>{parseString(lot?.type)}</span>
      </li>
      <li>
        <strong>Building type:</strong>{' '}
        <span className={buildingTypeClass}>{parseString(lot?.buildingDetails?.type)}</span>
      </li>
      <li>
        <strong>Transaction type:</strong> <span>{parseString(lot?.transactionType)}</span>
      </li>
    </ul>
  );

  const buildingInfo = () => (
    <ul className="list-unstyled">
      <li>
        <p className="rlt-search-list__item__description m-0 mb-3">
          <strong>Description:</strong> {parseString(lot?.description)}
        </p>
      </li>

      <li>
        <strong>Dimensions:</strong>{' '}
        <span className="sims-blue-light fw-semibold">
          {lot?.dimensions?.width} &times; {lot?.dimensions?.depth}
        </span>
      </li>

      {lot?.buildingDetails?.type !== 'empty' && (
        <li className="d-flex">
          <strong className="me-2">Caracteristics:</strong>
          <ul className="list-unstyled d-flex gap-2 fw-semibold">
            <li className="d-flex gap-1 align-items-center">
              <Icon name="hotel" ariaLabel="Berdooms" classNames="sims-gray" />
              <span className="sims-blue-light">{parseNumber(lot?.buildingDetails?.bedrooms)}</span>
            </li>

            <li className="d-flex gap-1 align-items-center">
              <Icon name="shower" ariaLabel="Bathrooms" classNames="sims-gray" />
              <span className="sims-blue-light">{parseNumber(lot?.buildingDetails?.bathrooms)}</span>
            </li>

            <li className="d-flex gap-1 align-items-center">
              <Icon name="layers" ariaLabel="Floors" classNames="sims-gray" />
              <span className="sims-blue-light">{parseNumber(lot?.buildingDetails?.floors)}</span>
            </li>
          </ul>
        </li>
      )}
    </ul>
  );

  return (
    <div className="row my-4">
      <div className="d-flex justify-content-end">
        <ButtonFavorite lotId={lot.id} isFavorite={isFavoriteLot(lot.id)} onToggleFavorite={toggleFavoriteLot} />
      </div>

      {/* <span>{index}.</span> */}

      {lotImage()}
      <div className="col-8">
        {headerInfo()}

        {lotInfo()}

        {buildingInfo()}
      </div>
    </div>
  );
};
