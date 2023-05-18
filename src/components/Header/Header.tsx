import React from 'react';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.Container>
      <S.MainText>Money-ex</S.MainText>
      <S.List>
        <S.Link href="/">Main</S.Link>
        <S.Link href="/convert">Convert</S.Link>
      </S.List>
    </S.Container>
  );
};

export default Header;
