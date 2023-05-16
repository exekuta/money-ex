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

export interface IOption {
  value: string;
  label: string;
}

export const options: IOption[] = [
  { value: 'option1', label: 'RUB' },
  { value: 'option2', label: 'AED' },
  { value: 'option3', label: 'CNY' },
  { value: 'option4', label: 'EUR' },
  { value: 'option5', label: 'USD' },
];
