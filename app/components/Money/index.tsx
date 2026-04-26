import { CURRENCY_SYMBOL } from '../../utils/constants';

type MoneyComponent = {
  value: number;
};

export const Money = ({ value }: MoneyComponent) => {
  const parsedValue =
    value > 0
      ? value.toLocaleString('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : '-';

  return (
    <span className="h3 fw-bold d-flex gap-1">
      <span className={'d-flex align-items-start'}>{CURRENCY_SYMBOL}</span>
      <span className="d-flex align-items-start">{parsedValue}</span>
    </span>
  );
};
