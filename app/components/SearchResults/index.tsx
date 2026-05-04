import { useLoaderData } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { Card } from '../Card';
import { useFavoriteLots } from '../../hooks/custom/useFavoriteLots';

export const SearchResults = () => {
  const { lots, filters } = useLoaderData();

  const validFilters = Object.entries(filters)?.reduce((acc: string[], n) => {
    const [key, value] = n;
    return value !== '' ? [...acc, key] : acc;
  }, []);

  const filterText = validFilters.join(', ');

  const { isFavoriteLot, toggleFavoriteLot } = useFavoriteLots();

  return (
    <>
      <header>
        {validFilters.length > 0 && (
          <div className="d-flex gap-2">
            <strong>Filtering by:</strong>
            <ul className="list-inline">{filterText}</ul>
          </div>
        )}
        <p className="fw-bold">{`${lots.length} ${lots.length === 1 ? 'result' : 'results'}`}</p>
        {/* TODO: sorting selections */}
      </header>
      <div>
        {lots.length > 0 ? (
          <ul className="list-unstyled">
            {lots.map((lot: Lot) => (
              <li className="border-bottom" key={`card-${lot.id}`}>
                <Card lot={lot} isFavoriteLot={isFavoriteLot} toggleFavoriteLot={toggleFavoriteLot} />
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p className="text-center mt-3">No lots found</p>
          </div>
        )}
      </div>
    </>
  );
};
