import { Icon } from '../Icon';

type FavoriteLotButtonProps = {
  lotId: string;
  isFavorite: boolean;
  onToggleFavorite: (lotId: string) => void;
};

export const ButtonFavorite = ({ lotId, isFavorite, onToggleFavorite }: FavoriteLotButtonProps) => {
  return (
    <button
      className="rlt-btn --favorite --sm"
      type="button"
      aria-pressed={isFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      onClick={() => onToggleFavorite(lotId)}
    >
      <Icon name="favorite" isOutlined={!isFavorite} />
    </button>
  );
};
