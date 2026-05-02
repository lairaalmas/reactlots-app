import { CURRENCY_SYMBOL } from '../../utils/constants';

type MoneyComponent = {
  value: number;
  size?: 'inherit' | 'lg';
};

export const Money = ({ value, size = 'lg' }: MoneyComponent) => {
  const parsedValue =
    value > 0
      ? value.toLocaleString('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : '-';

  return (
    <span className={`${size === 'lg' ? 'h3' : ''} fw-bold d-flex gap-1`}>
      <span className={'d-flex align-items-start'}>{CURRENCY_SYMBOL}</span>
      <span className="d-flex align-items-start">{parsedValue}</span>
    </span>
  );
};
