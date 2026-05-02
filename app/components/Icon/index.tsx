type GetType = {
  name: string;
  classNames?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
  color?: string;
  isOutlined?: boolean;
};

export const Icon = ({ name, classNames, ariaHidden, ariaLabel, color, isOutlined }: GetType) => {
  return (
    <span
      className={`material-symbols-rounded ${isOutlined ? 'outlined' : ''} ${classNames || ''}`}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{ color: color }}
    >
      {name}
    </span>
  );
};
