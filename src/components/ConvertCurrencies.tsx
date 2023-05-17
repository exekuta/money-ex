import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { $convert, fetchСonvertCurrenciesFx } from '../services/api';
import { IOption, options, IConvert } from '../types/common';

const ConvertCurrencies = () => {
  const convert = useStore($convert) as IConvert;

  const [selectedOptionFrom, setSelectedOptionFrom] = useState<IOption | null>(
    null
  );
  const [selectedOptionTo, setSelectedOptionTo] = useState<IOption | null>(
    null
  );
  const [inputValue, setInputValue] = useState('');

  const handleOptionChangeFrom = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOptionFrom(selected || null);
    // fetchСonvertCurrenciesFx(selected?.label ?? 'RUB');
  };

  const handleOptionChangeTo = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOptionTo(selected || null);
    // fetchСonvertCurrenciesFx(selected?.label ?? 'RUB');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
    console.log(convert);
  };

  useEffect(() => {
    fetchСonvertCurrenciesFx({ CUR_FROM: 'USD', CUR_TO: 'RUB', CUR_AMOUNT: '1' });
  }, []);

  return (
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
          ></input>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      <div>RESULT: {convert.result}</div>
    </div>
  );
};

export default ConvertCurrencies;
