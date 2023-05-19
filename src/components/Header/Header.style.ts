import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px 0 8px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  margin-bottom: 10px;
  @media (max-width: 500px) {
    padding: 0;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MainText = styled.h2`
  color: #24457b;
  margin: 0 30px 0 15px;
  @media (max-width: 530px) {
    font-size: 18px;
    margin: 0 10px 0 15px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0 20px 0 30px;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  @media (max-width: 500px) {
    padding: 0 10px 0 10px;
    gap: 10px;
  }
`;

export const Link = styled.a`
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

