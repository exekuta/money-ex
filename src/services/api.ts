import { createStore, createEffect } from 'effector';

export interface ICurrency {
  start_date: string;
  end_date: string;
  source: string;
  quotes: object;
}

export const fetchCurrenciesFx = createEffect<void, ICurrency[], Error>(async (): Promise<ICurrency[]> => {
  const url = 'https://api.apilayer.com/currency_data/change?start_date=2023-05-14&end_date=2023-05-14&source=RUB&currencies=AED';
  const requestOptions = {
    method: 'GET',
    headers: {
      apikey: 'moCgI6kZDbOyHu7lwBRycCXTjkoE8BLE',
      // apikey: 'mock',
    },
  };

  const response = await fetch(url, requestOptions);
  return response.json();
});

export const $currency = createStore<ICurrency[]>([]).on(fetchCurrenciesFx.doneData, (_, currency) => currency);
