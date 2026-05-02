import { FAVORITE_LOTS_STORAGE_KEY } from '../../utils/constants';

const FavoritesPage = () => {
  const favoriteLots = JSON.parse(localStorage.getItem(FAVORITE_LOTS_STORAGE_KEY) || '');

  return (
    <section className="container mt-5">
      <h2>Favorite lots</h2>
      <ul>
        {(favoriteLots || []).map((lot: string) => (
          <li key={lot}>{lot}</li>
        ))}
      </ul>
    </section>
  );
};

export default FavoritesPage;
