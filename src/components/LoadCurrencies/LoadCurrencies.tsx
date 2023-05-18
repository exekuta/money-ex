import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { $currency, fetchCurrenciesFx } from '../../services/api';
import Spinner from '../../assets/Spinner/spinner';
import { IOption, options, ICurrency, IRates } from '../../types/common';
import { Box, Button, Typography } from '@mui/material';
import * as S from './LoadCurrencies.style';

const LoadCurrencies = () => {
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  const currency = useStore($currency) as ICurrency;
  const rates = currency.rates as IRates;
  const isLoading = useStore(fetchCurrenciesFx.pending);
  const spinner = isLoading ? <Spinner /> : null;

  const exchangeRates = Object.keys(rates || {}).map((key) => (
      <S.CardItem key={key}>
        <Typography>1 {key}</Typography>
        <Typography variant="h4"> = </Typography>
        <Typography>{(1 / rates[key]).toFixed(2)} {currency.base}</Typography>
      </S.CardItem>
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
    <S.Container>
      {spinner}
      {!isLoading ? (
        <S.Container>
          <Box>
            <span>Date: {currency.date}</span>
          </Box>
          <S.BaseCurrencyContainer>
            <S.Text>Base currency: </S.Text>
            <S.HalfItemSelect
              value={selectedOption?.value || ''}
              onChange={handleOptionChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </S.HalfItemSelect>
          </S.BaseCurrencyContainer>
          <S.RatesCardsContainer>{exchangeRates}</S.RatesCardsContainer>
          <Button variant="contained" sx={{ width: '280px' }} onClick={handleRefresh}>
            REFRESH RATES
          </Button>
        </S.Container>
      ) : null}
    </S.Container>
  );
};

export default LoadCurrencies;
