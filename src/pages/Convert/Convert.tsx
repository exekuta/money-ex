import ConvertCurrencies from '../../components/ConvertCurrencies/ConvertCurrencies';
import * as S from './Convert.style';

const Convert = () => {
  return (
    <S.Container>
      <S.MainText>Convert your currency:</S.MainText>
      <ConvertCurrencies />
    </S.Container>
  );
};

export default Convert;
