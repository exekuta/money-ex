import { createStore, createEffect, restore } from 'effector';

const BASE_CUR = 'RUB';

export interface IConvert {
  base?: string;
  date?: string;
  rates?: IRates;
  // timestamp?: number;
}

export interface IRates {
  [x: string]: any;
  AED?: number;
  CNY?: number;
  EUR?: number;
  USD?: number;
}

export const fetchCurrenciesFx = createEffect<void, IConvert[], Error>(async (BASE_CUR): Promise<IConvert[]> => {
  // const url = 'https://api.apilayer.com/exchangerates_data/latest?symbols=AED,CNY,EUR,USD&base=RUB';
  const url2 = `https://api.exchangerate.host/latest?symbols=AED,CNY,EUR,USD&base=${BASE_CUR}`;
  const requestOptions = {
    method: 'GET',
    // headers: {
    //   apikey: 'moCgI6kZ2DbOyHu7lwBRycCXTjkoE8BLE',
    //   // apikey: 'mock',
    // },
  };

  const response = await fetch(url2, requestOptions);
  const data = await response.json();
  return data;
});

export const $fetchError = restore<Error>(fetchCurrenciesFx.failData, null);
export const $currency = createStore<IConvert[]>([]).on(fetchCurrenciesFx.doneData, (_, currency) => currency);

fetchCurrenciesFx.done.watch(({ params, result }) => {
  console.log(result);
});
