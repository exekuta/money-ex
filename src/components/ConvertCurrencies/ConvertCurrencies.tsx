import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { Button } from '@mui/material';
import { $convert, fetchСonvertCurrenciesFx } from '../../services/api';
import { IOption, options, IConvert } from '../../types/common';
import { useTranslation } from 'react-i18next';
import Spinner from '../../assets/Spinner/spinner';
import * as S from './ConvertCurrencies.style';

const ConvertCurrencies = () => {
  const [selectedOptionFrom, setSelectedOptionFrom] = useState<IOption | null>({
    value: 'option5',
    label: 'USD',
  });
  const [selectedOptionTo, setSelectedOptionTo] = useState<IOption | null>({
    value: 'option1',
    label: 'RUB',
  });
  const [inputValue, setInputValue] = useState('1');
  const [isValid, setIsValid] = useState(true);

  const convert = useStore($convert) as IConvert;
  const isLoading = useStore(fetchСonvertCurrenciesFx.pending);
  const spinner = isLoading ? <Spinner /> : null;
  const { t } = useTranslation();

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
    const isValidInput = /^[0-9.]+$/.test(value);
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
    fetchСonvertCurrenciesFx({
      CUR_FROM: 'USD',
      CUR_TO: 'RUB',
      CUR_AMOUNT: '1',
    });
  }, []);

  return (
    <>
      {spinner}
      {!isLoading ? (
        <S.Container>
          <form onSubmit={handleSubmit}>
            <S.ContainerRow>
              <S.FlexStart>
                <S.BoldText>{t('Convert.From')} </S.BoldText>
                <div>
                  <S.HalfItemSelect
                    value={selectedOptionFrom?.value || ''}
                    onChange={handleOptionChangeFrom}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label} {t('Option.' + option.label)}
                      </option>
                    ))}
                  </S.HalfItemSelect>
                </div>
              </S.FlexStart>
              <Button
                sx={{ fontSize: '30px' }}
                variant="contained"
                onClick={handleSwapClick}
              >
                &#8646;
              </Button>
              <S.FlexStart>
                <S.BoldText>{t('Convert.To')} </S.BoldText>
                <div>
                  <S.HalfItemSelect
                    value={selectedOptionTo?.value || ''}
                    onChange={handleOptionChangeTo}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label} {t('Option.' + option.label)}
                      </option>
                    ))}
                  </S.HalfItemSelect>
                </div>
              </S.FlexStart>
            </S.ContainerRow>
            <S.ContainerRow>
              <S.FlexStart>
                <S.BoldText>{t('Convert.Amount')} </S.BoldText>
                <div>
                  <S.HalfItemInput
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </div>
                {!isValid && (
                  <S.ErrorText>{t('Convert.AmountError')}</S.ErrorText>
                )}
              </S.FlexStart>
              <S.FlexStart>
                <S.BoldText>{t('Convert.Result')} </S.BoldText>
                <S.HalfItemInput type="text" value={convert.result} disabled />
              </S.FlexStart>
            </S.ContainerRow>

            <Button variant="contained" type="submit" disabled={!isValid}>
              {t('Convert.SubmitBtn')}
            </Button>
          </form>
        </S.Container>
      ) : null}
    </>
  );
};

export default ConvertCurrencies;
