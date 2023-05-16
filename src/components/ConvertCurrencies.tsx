import { useEffect, useState } from 'react';
import { fetchСonvertCurrenciesFx } from '../services/api';
import { IOption, options } from '../types/common';

const ConvertCurrencies = () => {
  const [selectedOptionFrom, setSelectedOptionFrom] = useState<IOption | null>(null);
  const [selectedOptionTo, setSelectedOptionTo] = useState<IOption | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleOptionChangeFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOptionFrom(selected || null);
    // fetchСonvertCurrenciesFx(selected?.label ?? 'RUB');
  };

  const handleOptionChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // fetchСonvertCurrenciesFx(selected?.label ?? 'RUB');
    console.log('Submitted value:', inputValue);
  };

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
