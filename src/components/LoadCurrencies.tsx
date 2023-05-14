import { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $currency, IConvert, fetchCurrenciesFx } from '../services/api';

const LoadCurrencies = () => {
  const currency = useStore($currency);
  console.log(currency.date);
  
  useEffect(() => {
    fetchCurrenciesFx();
  }, []);

  // const currencyItems = currency?.map((value, index) => (
  //   <div key={index}>
  //     <div>{value.date}</div>
  //     <div>{value.result}</div>
  //   </div>
  // ));
  // console.log(currencyItems);

  return (
    <div>
      <div>{currency.date}</div>
      <div>{currency.result}</div>
    </div>
  );
};

export default LoadCurrencies;
