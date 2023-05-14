import { createStore, createEffect, restore } from 'effector';

// export interface ICurrency {
//   start_date: string;
//   end_date: string;
//   source: string;
//   quotes: IQuotes;
// }

// export interface IQuotes {
//   RUBAED: ICur;
//   RUBCNY: ICur;
//   RUBEUR: ICur;
//   RUBUSD: ICur;
// }

// export interface ICur {
//   change: number;
//   change_pct: number;
//   end_rate: number;
//   start_rate: number;
// }

export interface IConvert {
  date?: string;
  // historical: boolean;
  // info: object;
  // query: object;
  result?: number;
  // success: boolean;
}

export const fetchCurrenciesFx = createEffect<void, IConvert[], Error>(async (): Promise<IConvert[]> => {
  const url = 'https://api.apilayer.com/exchangerates_data/convert?to=RUB&from=EUR&amount=1';
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

export const $fetchError = restore<Error>(fetchCurrenciesFx.failData, null);
export const $currency = createStore<IConvert[]>([]).on(fetchCurrenciesFx.doneData, (_, currency) => currency);

fetchCurrenciesFx.done.watch(({ params, result }) => {
  console.log(result?.date);
});
