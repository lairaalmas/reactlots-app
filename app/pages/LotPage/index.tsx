import { useLoaderData } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { Icon } from '../../components/Icon';
import { useFavoriteLots } from '../../hooks/custom/useFavoriteLots';
import { ButtonFavorite } from '../../components/ButtonFavorite';
import { Money, type MoneyComponentSize } from '../../components/Money';
import { PipeSeparator } from '../../components/PipeSeparator';

const parseString = (value?: string) => {
  const invalidValues = [undefined, null, '', 'UNKNOWN', 'TBD'];

  if (invalidValues.includes(value)) return '-';

  return value;
};

const parseMoney = (value?: number, size?: MoneyComponentSize, rentPeriod?: string) => {
  if (!value) return '-';

  const updatedSize = size || 'inherit';
  const moneyComponent = <Money value={value} size={updatedSize} />;

  if (rentPeriod)
    return (
      <div className="d-flex align-items-center">
        {moneyComponent}/{rentPeriod}
      </div>
    );

  return moneyComponent;
};

const getBuyInfo = (lot: Lot) => {
  const buyDetails = lot?.transaction?.buyDetails;

  const buyPrice = buyDetails?.price || 0;
  const renderBuyPrice = (size?: MoneyComponentSize) => parseMoney(buyPrice, size);
  return { buyPrice, renderBuyPrice };
};

const getRentInfo = (lot: Lot) => {
  const rentDetails = lot?.transaction?.rentDetails;

  const rentPrice = rentDetails?.rent || 0;
  const rentDeposit = rentDetails?.deposit || 0;
  const rentPeriod = rentDetails?.period || 'week';

  const renderRentPrice = (size?: MoneyComponentSize) => parseMoney(rentPrice, size, rentPeriod);
  const renderRentDeposit = (size?: MoneyComponentSize) =>
    rentDetails?.deposit ? <Money value={rentDeposit} size={size || 'inherit'} /> : '-';

  return { rentPeriod, rentPrice, rentDeposit, renderRentDeposit, renderRentPrice };
};

const renderPipeSeparator = () => {
  return <span className="opacity-25">|</span>;
};

const LotPage = () => {
  const lot = useLoaderData() as Lot;
  const { isFavoriteLot, toggleFavoriteLot } = useFavoriteLots();

  const isAvailable = lot?.availability === 'available';

  const transactionType = lot?.transaction?.type;
  const { buyPrice, renderBuyPrice } = getBuyInfo(lot);
  const { rentPeriod, rentPrice, rentDeposit, renderRentDeposit, renderRentPrice } = getRentInfo(lot);

  const tax = 500;
  let totalPrice = tax;

  if (transactionType === 'buy' || transactionType === 'both') totalPrice += buyPrice;
  if (transactionType === 'rent' || transactionType === 'both') totalPrice += rentDeposit;

  const address =
    [lot?.neighborhood?.title, lot?.buildingDetails?.apartmentTitle, lot?.buildingDetails?.apartmentNumber]
      .filter((item) => item)
      .join(', ') + ` (${lot?.world?.title})`;

  const renderMainPrice = () => {
    return transactionType === 'buy' ? (
      <>{parseMoney(totalPrice, 'inherit')}</>
    ) : (
      <>
        {parseMoney(totalPrice, 'inherit')} + {parseMoney(rentPrice, 'inherit', rentPeriod)}
      </>
    );
  };

  const lotImage = () => (
    <img
      className={`rlt-search-list__item__thumb`}
      src={lot.imageUrl}
      alt={`${lot?.title} lot picture`}
      style={{ height: '400px' }}
    />
  );

  const headerInfo = () => (
    <header>
      {/* Objective */}
      <div className="d-flex gap-1">
        <span>{parseString(lot?.transaction?.type)}</span> <PipeSeparator />
        <span>{parseString(lot?.buildingDetails?.type)}</span>
      </div>
      <div className="d-flex gap-3 justify-content-between align-items-end">
        <div>
          {/* Title */}
          <h3 className="m-0 p-0">{lot?.title}</h3>
          {/* Location */}
          <div className="d-flex">
            {address}
            <Icon name="location_on" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          {transactionType === 'buy' ? renderBuyPrice('lg') : <>{renderRentPrice('lg')}</>}
        </div>
      </div>
    </header>
  );

  const paymentInfo = () => (
    <ul className="list-unstyled">
      {(transactionType === 'rent' || transactionType === 'both') && (
        <>
          <li className="d-flex align-items-center gap-1 justify-content-between">
            <strong className="me-1">Rent</strong> {renderRentPrice()}
          </li>
          <li>
            <span className="d-flex align-items-center gap-1 justify-content-between">
              <strong>Deposit</strong> {renderRentDeposit()}
            </span>
          </li>
        </>
      )}
      {transactionType === 'buy' && (
        <li className="d-flex align-items-center gap-1 justify-content-between">
          <strong>Price</strong> {renderBuyPrice()}
        </li>
      )}
      <li className="d-flex align-items-center gap-1 justify-content-between">
        <strong>Tax</strong> <Money value={500} size="inherit" />
      </li>
      <hr />
      <li className="d-flex align-items-center gap-1 justify-content-end">{renderMainPrice()}</li>
    </ul>
  );

  const lotInfo = () => (
    <ul className="list-unstyled">
      <div className="d-flex gap-3 flex-wrap">
        {lot?.buildingDetails?.type !== 'empty' && (
          <li className="d-flex">
            <ul className="list-unstyled d-flex gap-2 fw-semibold flex-wrap">
              <li className="d-flex gap-1 align-items-center">
                <Icon name="hotel" ariaHidden classNames="sims-gray" />
                <span className="sims-blue-light">{lot?.buildingDetails?.bedrooms || 0} bedrooms</span>
              </li>

              <PipeSeparator />

              <li className="d-flex gap-1 align-items-center">
                <Icon name="shower" ariaHidden classNames="sims-gray" />
                <span className="sims-blue-light">{lot?.buildingDetails?.bathrooms || 0} bathrooms</span>
              </li>

              <PipeSeparator />

              <li className="d-flex gap-1 align-items-center">
                <Icon name="layers" ariaHidden classNames="sims-gray" />
                <span className="sims-blue-light">{lot?.buildingDetails?.floors || 0} floors</span>
              </li>

              <PipeSeparator />

              <li>
                <span className="sims-blue-light fw-semibold">
                  {lot?.dimensions?.width}&nbsp;&times;&nbsp;{lot?.dimensions?.depth}
                </span>
              </li>
            </ul>
          </li>
        )}
      </div>

      <li className="my-3">
        <p className="m-0">
          <strong>Description:</strong> {parseString(lot?.description)}
        </p>
      </li>

      {lot?.buildingDetails?.apartmentTitle && (
        <>
          <li>
            <strong>Apartment:</strong> <span>{parseString(lot?.buildingDetails?.apartmentTitle)}</span>
          </li>
          <li>
            <strong>Apartment number:</strong> <span>{parseString(lot?.buildingDetails?.apartmentNumber)}</span>
          </li>
        </>
      )}
      <li>
        <strong>Neighborhood:</strong> {lot?.neighborhood?.title}
      </li>
      <li>
        <strong>World:</strong> {lot?.world?.title}
      </li>
    </ul>
  );

  return (
    <section className="container my-5 d-flex flex-column">
      {headerInfo()}
      <hr />

      <div className="rlt-favorite__container">
        <ButtonFavorite lotId={lot.id} isFavorite={isFavoriteLot(lot.id)} onToggleFavorite={toggleFavoriteLot} />
      </div>

      {lotImage()}

      <div className="row pe-3 mt-3">
        <div className="col-lg-8">{lotInfo()}</div>
        <div className="col-lg-4">
          <div className="border px-3 pt-3 rounded-4">{paymentInfo()}</div>
        </div>
      </div>
    </section>
  );
};

export default LotPage;
