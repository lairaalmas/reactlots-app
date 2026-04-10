import { useLoaderData } from "react-router-dom";
import type { Lot } from "../../types/lot";
import { CURRENCY_SYMBOL } from "../../utils/constants";

const LotPage = () => {
  const lot = useLoaderData() as Lot;

  const infoList = [
    {icon: 'hotel', value: lot.lotDetails.bedrooms, title: 'Bedrooms'},
    {icon: 'shower', value: lot.lotDetails.bathrooms, title: 'Bathrooms'},
    {icon: 'layers', value: lot.lotDetails.floors, title: 'Floors'},
  ];

  return <section className="d-flex flex-column">
    <header className="d-flex justify-content-between align-items-top">
      <div className="d-flex flex-column mb-2">
        <h2>{lot.title}</h2>
        <small className="d-flex align-items-center">
          <span className="material-symbols-rounded">location_on</span>{lot.neighborhood} ({lot.world})
        </small>
      </div>
      <span className="h1">
        <span className="sims-green">{CURRENCY_SYMBOL}</span> {lot.price}</span>
    </header>

    <div className="mb-3">
      <img className="img-fluid" src={lot.imageUrl} alt={lot.title}/>
    </div>

    <div>
      <ul className="list-inline d-flex gap-2 justify-content-between align-items-center">
        <div className="d-flex gap-3 list-unstyled">
          {infoList.map((info) => (
            <li key={info.icon} className="d-flex align-items-center gap-1">
              <span className="material-symbols-rounded">{info.icon}</span>
              <span>{info.value}</span>
            </li>
          ))}
        </div>
        <li>{lot.lotDetails.dimensions.width} &times; {lot.lotDetails.dimensions.depth}</li>
      </ul>
    </div>

    {/* <p>{lot.type} lot</p> */}

    <p>{lot.description}</p>
  </section>
}

export default LotPage;