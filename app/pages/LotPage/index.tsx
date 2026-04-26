import { useLoaderData } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { CURRENCY_SYMBOL } from '../../utils/constants';
import { Icon } from '../../components/Icon';

const LotPage = () => {
  const lot = useLoaderData() as Lot;

  const infoList = [
    { icon: 'hotel', value: lot.buildingDetails?.bedrooms, ariaLabel: 'Bedrooms' },
    { icon: 'shower', value: lot.buildingDetails?.bathrooms, ariaLabel: 'Bathrooms' },
    { icon: 'layers', value: lot.buildingDetails?.floors, ariaLabel: 'Floors' },
  ];

  return (
    <section className="container my-5 d-flex flex-column">
      <header className="d-flex justify-content-between align-items-top">
        <div className="d-flex flex-column mb-2">
          <h2>{lot.title}</h2>
          <small className="d-flex align-items-center">
            <Icon name="location_on" ariaHidden={true} />
            {lot.neighborhood.title} ({lot.world.title})
          </small>
        </div>
        <span className="h1 sims-font">
          <span className="sims-green">{CURRENCY_SYMBOL}</span> {lot.price}
        </span>
      </header>

      <div className="mb-3">
        <img className="img-fluid" src={lot.imageUrl} alt={lot.title} />
      </div>

      <div className="sims-font">
        <ul className="list-inline d-flex gap-2 justify-content-between align-items-center">
          <div className="d-flex gap-3 list-unstyled">
            {infoList.map((info) => (
              <li key={info.icon} className="d-flex align-items-center gap-1">
                <Icon name={info.icon} ariaLabel={info.ariaLabel} />
                <span>{info.value}</span>
              </li>
            ))}
          </div>
          <li>
            {lot.dimensions?.width} &times; {lot.dimensions?.depth}
          </li>
        </ul>
      </div>

      {/* <p>{lot.type} lot</p> */}

      <p>
        <strong>About lot:</strong> {lot.description}
      </p>
    </section>
  );
};

export default LotPage;
