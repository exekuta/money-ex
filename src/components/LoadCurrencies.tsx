import { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $currency, fetchCurrenciesFx } from '../services/api';

const LoadCurrencies = () => {
  const currency = useStore($currency);
  console.log(currency);
  
  useEffect(() => {
    fetchCurrenciesFx();
  }, []);

  const currencyItems = currency.map((currency) => (
    <div>
      <div>{currency.source}</div>
      <div>{currency.start_date}</div>
      <div>{currency.end_date}</div>
    </div>
  ));

  return (
    <div>
      {currencyItems}
    </div>
  );
};

export default LoadCurrencies;
