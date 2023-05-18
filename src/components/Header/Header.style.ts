import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px 0 8px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  margin-bottom: 10px;
`

export const MainText = styled.h2`
  color: #24457b;
  margin: 0 30px 0 15px;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 30px;
  padding-top: 5px;
  display: flex;
  gap: 20px;
  justify-content: space-around;
`;

export const Link = styled.a`
  font-size: 18px;
  font-weight: 600;
`

