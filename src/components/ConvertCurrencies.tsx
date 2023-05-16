import { useEffect } from 'react';
import { fetchСonvertCurrenciesFx } from '../services/api';

const ConvertCurrencies = () => {
  useEffect(() => {
    fetchСonvertCurrenciesFx();
  }, []);

  return (
    <div>
      <div>ConvertCurrencies</div>

    </div>
  );
};

export default ConvertCurrencies;
