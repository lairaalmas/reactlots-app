type GetType = {
  name: string;
  classNames?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
};

export const Icon = ({ name, classNames, ariaHidden = false, ariaLabel }: GetType) => {
  return (
    <span
      className={`material-symbols-rounded ${classNames}`}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {name}
    </span>
  );
};
