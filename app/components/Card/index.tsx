import { Link } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { Money } from '../Money';
import { Icon } from '../Icon';
import { ButtonFavorite } from '../ButtonFavorite';

export type CardDisplayStyle = 'default' | 'list';
type CardComponent = {
  lot: Lot;
  variant: CardDisplayStyle;
  isFavoriteLot: any;
  toggleFavoriteLot: any;
};

export const Card = ({ lot, variant = 'default', isFavoriteLot, toggleFavoriteLot }: CardComponent) => {
  if (!lot) return <></>; // TODO: add error card

  const buildingTypes = ['house', 'apartment', 'empty'];
  const buildingTypeClass = buildingTypes.includes(lot?.buildingDetails?.type) ? '' : 'text-danger';

  // const availabilityClass = lot?.availability === 'available' ? '' : 'text-danger';
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

  const transactionType = lot?.transaction?.type;

  const buyDetails = lot?.transaction?.buyDetails;
  const buyPrice = buyDetails?.price ? <Money value={buyDetails.price} size="inherit" /> : '-';

  const rentDetails = lot?.transaction?.rentDetails;
  const rentPeriod = rentDetails?.period || 'week';
  const rentPrice = rentDetails?.rent ? <Money value={rentDetails.rent} size="inherit" /> : '-';
  const rentDeposit = rentDetails?.deposit ? <Money value={rentDetails.deposit} size="inherit" /> : '-';

  const showLines = false;
  const renderLines = showLines ? <hr /> : <></>;

  const lotImage = () => (
    <Link to={`/lots/${lot?.id}`}>
      <img
        className={`rlt-search-list__item__thumb ${variant === 'default' ? 'rounded-top-4' : ''}`}
        src={lot.imageUrl}
        alt={`${lot?.title} lot picture`}
      />
    </Link>
  );

  const headerInfo = () => (
    <header>
      <div className="d-flex gap-2 justify-content-between">
        <h3 className="m-0 p-0">
          {/* Title */}
          <Link className="link-underline link-underline-opacity-0" to={`/lots/${lot?.id}`}>
            {lot?.title}
          </Link>
        </h3>
      </div>
    </header>
  );

  const lotInfo = () => (
    <ul className="list-unstyled">
      {(transactionType === 'rent' || transactionType === 'both') && (
        <>
          <li>
            <span className="d-flex align-items-center gap-1">
              <strong>Deposit:</strong> {rentDeposit}
            </span>
          </li>
          <li className="d-flex align-items-center">
            <strong className="me-1">Rent:</strong> {rentPrice} <span>/{rentPeriod}</span>
          </li>
        </>
      )}
      {transactionType === 'buy' && (
        <li>
          <span className="d-flex align-items-center gap-1">
            <strong>Price:</strong> {buyPrice}
          </span>
        </li>
      )}
      <hr />

      {lot?.buildingDetails?.apartmentTitle && (
        <li>
          <strong>Apartment title:</strong>{' '}
          <span className={buildingTypeClass}>{parseString(lot?.buildingDetails?.apartmentTitle)}</span>
        </li>
      )}
      {renderLines}

      <li>
        <strong>World:</strong> {lot?.neighborhood?.title}
      </li>
      <li>
        <strong>Neighborhood:</strong> {lot?.world?.title}
        {/* <Icon name="location_on" /> */}
      </li>
      {renderLines}

      <li>
        <strong>Transaction:</strong> <span>{parseString(lot?.transaction?.type)}</span>
      </li>
      {/* <li>
        <strong>Availability:</strong> <span className={availabilityClass}>{parseString(lot?.availability)}</span>
      </li> */}
      <li>
        <strong>Lot type:</strong> <span className={lotTypeClass}>{parseString(lot?.type)}</span>
      </li>
      <li>
        <strong>Building type:</strong>{' '}
        <span className={buildingTypeClass}>{parseString(lot?.buildingDetails?.type)}</span>
      </li>
      {renderLines}
    </ul>
  );

  const buildingInfo = () => (
    <ul className="list-unstyled">
      {parseString(lot?.description) !== '-' && (
        <li>
          <p className="rlt-search-list__item__description m-0">
            <strong>Description:</strong> {parseString(lot?.description)}
          </p>
        </li>
      )}
      <hr />

      <li>
        <strong>Dimensions:</strong>{' '}
        <span className="sims-blue-light fw-semibold">
          {lot?.dimensions?.width} &times; {lot?.dimensions?.depth}
        </span>
      </li>

      {lot?.buildingDetails?.type !== 'empty' && (
        <li className="d-flex">
          <strong className="me-2">Caracteristics:</strong>
          <ul className="list-unstyled d-flex gap-2 fw-semibold flex-wrap">
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
    // row + homogen height in grid + fix breaking layout
    <div className="row m-0 h-100">
      {/* spacing between cards */}
      <div className="m-0 p-3 pt-0">
        {/* card background */}
        <div className={`${variant === 'default' ? 'sims-bg-muted rounded-4 h-100' : 'row mt-3'}`}>
          {/* favorite button - position absolute */}
          <div className="rlt-favorite__container">
            <ButtonFavorite lotId={lot.id} isFavorite={isFavoriteLot(lot.id)} onToggleFavorite={toggleFavoriteLot} />
          </div>

          {/* img */}
          <div className={`${variant === 'default' ? 'rlt-card__img' : 'col-4 p-0'}`}>{lotImage()}</div>

          {/* header + lot + building */}
          <div className={`p-3 pt-2 ${variant === 'default' ? '' : 'col-8'}`}>
            {headerInfo()}

            {lotInfo()}

            {buildingInfo()}
          </div>
        </div>
      </div>
    </div>
  );
};
