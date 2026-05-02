import { useLoaderData } from 'react-router-dom';
import { FAVORITE_LOTS_STORAGE_KEY } from '../../utils/constants';
import { Card } from '../../components/Card';
import { useFavoriteLots } from '../../hooks/custom/useFavoriteLots';
import type { Lot } from '../../types/lot';

const FavoritesPage = () => {
  const allLots = useLoaderData();
  const favoriteLotIds = JSON.parse(localStorage.getItem(FAVORITE_LOTS_STORAGE_KEY) || '');

  const { isFavoriteLot, toggleFavoriteLot } = useFavoriteLots();

  return (
    <section className="container mt-5">
      <h2>Favorite lots</h2>
      <header>
        <p className="fw-bold">{`${favoriteLotIds.length} ${favoriteLotIds.length === 1 ? 'favorite lot' : 'favorite lots'}`}</p>
      </header>
      <ul className="list-unstyled">
        {(favoriteLotIds || []).map((lotId: string) => {
          const lot = allLots.find((lot: Lot) => lot?.id === lotId);
          return (
            <li key={lotId}>
              <Card lot={lot} isFavoriteLot={isFavoriteLot} toggleFavoriteLot={toggleFavoriteLot} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FavoritesPage;
