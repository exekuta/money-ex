import ConvertCurrencies from '../../components/ConvertCurrencies/ConvertCurrencies';
import { useTranslation } from 'react-i18next';
import * as S from './Convert.style';

const Convert = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.MainText>{t('Convert.Title')}</S.MainText>
      <ConvertCurrencies />
    </S.Container>
  );
};

export default Convert;
