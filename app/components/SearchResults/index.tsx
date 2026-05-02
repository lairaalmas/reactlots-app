import { useLoaderData } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { Card } from '../Card';
import { useFavoriteLots } from '../../hooks/custom/useFavoriteLots';

export const SearchResults = () => {
  const { lots } = useLoaderData();

  const { isFavoriteLot, toggleFavoriteLot } = useFavoriteLots();

  return (
    <>
      <header>
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
