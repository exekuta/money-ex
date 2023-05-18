import LoadCurrencies from '../../components/LoadCurrencies/LoadCurrencies';
import * as S from './Main.style';

const Main = () => {
  return (
    <S.Container>
      <S.MainText>Exchange Rates:</S.MainText>
      <LoadCurrencies />
    </S.Container>
  )
}

export default Main;
