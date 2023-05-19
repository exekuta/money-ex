import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageToggler from '../../i18n/LangToggler/LangToggler';
import * as S from './Header.style';

const Header = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.MainText>Money-ex</S.MainText>
      <Divider orientation="vertical" variant="middle" flexItem />
      <S.Links>
        <S.List>
          <S.Link href="/">{t('Header.Main')}</S.Link>
          <S.Link href="/convert">{t('Header.Convert')}</S.Link>
        </S.List>
        <LanguageToggler />
      </S.Links>
    </S.Container>
  );
};

export default Header;
