type GetType = {
  icon: string;
  classNames?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
};

export const Icon = ({ icon, classNames, ariaHidden = false, ariaLabel }: GetType) => {
  return (
    <span
      className={`material-symbols-rounded ${classNames}`}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {icon}
    </span>
  );
};
