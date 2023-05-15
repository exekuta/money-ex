import { useEffect } from 'react';
import { useStore } from 'effector-react';
import {
  $currency,
  IConvert,
  IRates,
  fetchCurrenciesFx,
} from '../services/api';
import Spinner from '../assets/Spinner/spinner';

const LoadCurrencies = () => {
  const currency = useStore($currency) as IConvert;
  const rates = currency.rates as IRates;
  const isLoading = useStore(fetchCurrenciesFx.pending);
  const spinner = isLoading ? <Spinner /> : null;

  // console.log(rates);

  // const ratesValues = Object.values(rates).map((value) => (1 / value).toFixed(2));
  // const exchangeRates = ratesValues.map((value, index) => (
  //   <div key={index}>
  //     <div>{value}</div>
  //   </div>
  // ));

  const exchangeRates = Object.keys(rates).map((key) => (
    <div key={key}>
      <p>1 {key} = {(1 / (rates[key])).toFixed(2)} {currency.base}</p>
    </div>
  ));

  const handleRefresh = () => {
    fetchCurrenciesFx();
  };

  const handleChange = () => {
    
  };

  useEffect(() => {
    fetchCurrenciesFx();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {fetchCurrenciesFx()}, 60000)
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {spinner}
      {!isLoading ? (
        <div>
          <div>
            <h2>BASE CURRENCY: {currency.base}</h2>
          </div>
          <button onClick={handleChange}>CHANGE BASE CURRENCY</button>
          <div>
            <h2>DATE: {currency.date}</h2>
          </div>
          {/* <div>{exchangeRates}</div> */}
          <div>{exchangeRates}</div>
          <button onClick={handleRefresh}>REFRESH EXCHANGE RATES</button>
        </div>
      ) : null}
    </div>
  );
};

export default LoadCurrencies;
