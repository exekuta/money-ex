import { createStore, createEffect, restore } from 'effector';

export interface ICurrency {
  base?: string;
  date?: string;
  rates?: IRates;
}

export interface IRates {
  [x: string]: any;
  RUB?: number;
  AED?: number;
  CNY?: number;
  EUR?: number;
  USD?: number;
}

export interface IConvert {
  date?: string;
  result?: number;
  query?: {
    from?: string;
    to?: string;
    amount: number; 
  };
  info?: {
    rate?: number;
  };
}

export const fetchCurrenciesFx = createEffect<string, ICurrency[], Error>(async (BASE_CUR): Promise<ICurrency[]> => {
  const url = `https://api.exchangerate.host/latest?symbols=RUB,AED,CNY,EUR,USD&base=${BASE_CUR}`;
  const requestOptions = {
    method: 'GET',
  };

  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data;
});

export const fetchСonvertCurrenciesFx = createEffect<void, IConvert[], Error>(async (): Promise<IConvert[]> => {
  const url = `https://api.exchangerate.host/convert?from=RUB&to=USD&amount=1000`;
  const requestOptions = {
    method: 'GET',
  };

  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data;
});

export const $fetchError = restore<Error>(fetchCurrenciesFx.failData, null);
export const $currency = createStore<ICurrency[]>([]).on(fetchCurrenciesFx.doneData, (_, currency) => currency);
export const $convert = createStore<IConvert[]>([]).on(fetchСonvertCurrenciesFx.doneData, (_, currency) => currency);

fetchCurrenciesFx.done.watch(({ params, result }) => {
  console.log(result);
});

fetchСonvertCurrenciesFx.done.watch(({ params, result }) => {
  console.log(result);
});
