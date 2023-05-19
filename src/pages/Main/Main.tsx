import LoadCurrencies from '../../components/LoadCurrencies/LoadCurrencies';
import { useTranslation } from 'react-i18next';
import * as S from './Main.style';

const Main = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.MainText>{t('Main.Exchange')}</S.MainText>
      <LoadCurrencies />
    </S.Container>
  )
}

export default Main;
