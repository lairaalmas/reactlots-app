import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card, type CardDisplayStyle } from '../Card';
import { useFavoriteLots } from '../../hooks/custom/useFavoriteLots';
import { Icon } from '../Icon';
import type { Lot } from '../../types/lot';

export const SearchResults = () => {
  const { lots, filters } = useLoaderData();
  const { isFavoriteLot, toggleFavoriteLot } = useFavoriteLots();
  const [lotDisplayStyle, setLotDisplayStyle] = useState<CardDisplayStyle>('default');

  const validFilters = Object.entries(filters)?.reduce((acc: string[], n) => {
    const [key, value] = n;
    return value !== '' ? [...acc, key] : acc;
  }, []);
  const filterText = validFilters.join(', ');

  const changeDisplayStyle = (variant: CardDisplayStyle) => {
    setLotDisplayStyle(variant);
  };

  const renderHeader = () => (
    <header className="mb-3">
      {validFilters.length > 0 && (
        <div className="d-flex gap-2">
          <strong>Filtering by:</strong>
          <ul className="list-inline">{filterText}</ul>
        </div>
      )}

      <div className="d-flex gap-5 justify-content-between align-items-center">
        <strong>{`${lots.length} ${lots.length === 1 ? 'result' : 'results'}`}</strong>

        <div className="d-flex align-items-center gap-2">
          <strong>List display style:</strong>

          <div className="btn-group d-flex gap-2" role="group" aria-label="Display style">
            <input
              type="radio"
              className="btn-check"
              name="listDisplayBtn"
              id="listDisplayBtnGrid"
              autoComplete="off"
              onClick={() => changeDisplayStyle('default')}
            />
            <label className="rlt-btn --sm" htmlFor="listDisplayBtnGrid">
              <Icon name="apps" />
            </label>

            <input
              type="radio"
              className="btn-check"
              name="listDisplayBtn"
              id="listDisplayBtnList"
              autoComplete="off"
              onClick={() => changeDisplayStyle('list')}
            />
            <label className="rlt-btn --sm" htmlFor="listDisplayBtnList">
              <Icon name="reorder" />
            </label>
          </div>
        </div>
      </div>
    </header>
  );

  const renderList = () => (
    <div>
      {lots.length > 0 ? (
        <ul className="list-unstyled row m-0">
          {lots.map((lot: Lot) => (
            <li
              className={`d-flex flex-column p-0 ${lotDisplayStyle === 'default' ? 'col-xxl-3 col-lg-4 col-md-6' : 'border-bottom'}`}
              key={`card-${lot.id}`}
            >
              <Card
                lot={lot}
                variant={lotDisplayStyle}
                isFavoriteLot={isFavoriteLot}
                toggleFavoriteLot={toggleFavoriteLot}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p className="text-center mt-3">No lots found</p>
        </div>
      )}
    </div>
  );

  return (
    <div>
      {renderHeader()}

      {renderList()}
    </div>
  );
};
