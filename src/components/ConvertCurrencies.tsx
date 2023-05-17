import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { $convert, fetchСonvertCurrenciesFx } from '../services/api';
import { IOption, options, IConvert } from '../types/common';
import Spinner from '../assets/Spinner/spinner';

const ConvertCurrencies = () => {
  const [selectedOptionFrom, setSelectedOptionFrom] = useState<IOption | null>(
    {value: 'option5', label: 'USD'}
  );
  const [selectedOptionTo, setSelectedOptionTo] = useState<IOption | null>(
    {value: 'option1', label: 'RUB'}
  );
  const [inputValue, setInputValue] = useState('1');
  const [isValid, setIsValid] = useState(true);

  const convert = useStore($convert) as IConvert;
  const isLoading = useStore(fetchСonvertCurrenciesFx.pending);
  const spinner = isLoading ? <Spinner /> : null;

  const handleOptionChangeFrom = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOptionFrom(selected || null);
  };

  const handleOptionChangeTo = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOptionTo(selected || null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValidInput = /^\d*$/.test(value);
    setIsValid(isValidInput);
    setInputValue(value);
  };

  const handleSwapClick = () => {
    if (selectedOptionFrom && selectedOptionTo) {
      const temp = selectedOptionFrom;
      setSelectedOptionFrom(selectedOptionTo);
      setSelectedOptionTo(temp);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchСonvertCurrenciesFx({
      CUR_FROM: selectedOptionFrom?.label ?? 'USD',
      CUR_TO: selectedOptionTo?.label ?? 'RUB',
      CUR_AMOUNT: inputValue ?? '1',
    });
  };

  useEffect(() => {
    fetchСonvertCurrenciesFx({ CUR_FROM: 'USD', CUR_TO: 'RUB', CUR_AMOUNT: '1' });
  }, []);

  return (
    <div>
      {spinner}
      {!isLoading ? (
        <div>
          <div>ConvertCurrencies</div>
          <form onSubmit={handleSubmit}>
            <div>
              <span>FROM: </span>
              <select
                value={selectedOptionFrom?.value || ''}
                onChange={handleOptionChangeFrom}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={handleSwapClick}>SWAP</button>
            <div>
              <span>TO: </span>
              <select
                value={selectedOptionTo?.value || ''}
                onChange={handleOptionChangeTo}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span>AMOUNT: </span>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
              {!isValid && <span style={{ color: 'red' }}>Enter only numbers, please!</span>}
            </div>
            <button type="submit">SUBMIT</button>
          </form>
          <div>RESULT: {convert.result}</div>
        </div>
      ) : null}
    </div>
  );
};

export default ConvertCurrencies;
