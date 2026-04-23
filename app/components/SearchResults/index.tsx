import { useLoaderData } from 'react-router-dom';
import type { Lot } from '../../types/lot';
import { Card } from '../Card';

export const SearchResults = () => {
  const { lots } = useLoaderData();

  return (
    <div>
      {lots.length > 0 ? (
        <ul className="list-unstyled">
          {lots.map((lot: Lot) => (
            <li className="border-bottom" key={`card-${lot.id}`}>
              <Card lot={lot} />
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
};
