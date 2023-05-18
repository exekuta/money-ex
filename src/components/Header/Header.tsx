import { Divider } from '@mui/material';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.Container>
      <S.MainText>Money-ex</S.MainText>
      <Divider orientation="vertical" variant="middle" flexItem />
      <S.List>
        <S.Link href="/">Main</S.Link>
        <S.Link href="/convert">Convert</S.Link>
      </S.List>
    </S.Container>
  );
};

export default Header;
