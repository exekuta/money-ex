import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import {
  $currency,
  ICurrency,
  IRates,
  fetchCurrenciesFx,
} from '../services/api';
import Spinner from '../assets/Spinner/spinner';

export interface IOption {
  value: string;
  label: string;
}

const options: IOption[] = [
  { value: 'option1', label: 'RUB' },
  { value: 'option2', label: 'AED' },
  { value: 'option3', label: 'CNY' },
  { value: 'option4', label: 'EUR' },
  { value: 'option5', label: 'USD' },
];

const LoadCurrencies = () => {
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  const currency = useStore($currency) as ICurrency;
  const rates = currency.rates as IRates;
  const isLoading = useStore(fetchCurrenciesFx.pending);
  const spinner = isLoading ? <Spinner /> : null;

  const exchangeRates = Object.keys(rates || {}).map((key) => (
    <div key={key}>
      <p>
        1 {key} = {(1 / rates[key]).toFixed(2)} {currency.base}
      </p>
    </div>
  ));

  const handleRefresh = () => {
    fetchCurrenciesFx(selectedOption?.label ?? 'RUB');
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected || null);
    fetchCurrenciesFx(selected?.label ?? 'RUB');
  };

  useEffect(() => {
    fetchCurrenciesFx('RUB');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCurrenciesFx(selectedOption?.label ?? 'RUB');
    }, 60000);
    return () => clearInterval(interval);
  }, [selectedOption?.label]);

  return (
    <div>
      {spinner}
      {!isLoading ? (
        <div>
          <div>
            <h2>DATE: {currency.date}</h2>
          </div>
          <div>
            <span>SELECT BASE CURRENCY: </span>
            <select
              value={selectedOption?.value || ''}
              onChange={handleOptionChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>{exchangeRates}</div>
          <button onClick={handleRefresh}>REFRESH EXCHANGE RATES</button>
        </div>
      ) : null}
    </div>
  );
};

export default LoadCurrencies;
