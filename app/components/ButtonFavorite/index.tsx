type FavoriteLotButtonProps = {
  lotId: string;
  isFavorite: boolean;
  onToggleFavorite: (lotId: string) => void;
};

export const ButtonFavorite = ({ lotId, isFavorite, onToggleFavorite }: FavoriteLotButtonProps) => {
  return (
    <button
      className="btn btn-outline-secondary"
      type="button"
      aria-pressed={isFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      onClick={() => onToggleFavorite(lotId)}
    >
      {isFavorite ? '★' : '☆'}
    </button>
  );
};
