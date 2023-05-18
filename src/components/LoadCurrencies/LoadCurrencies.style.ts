import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BaseCurrencyContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 10px 0 10px 0;
`

export const HalfItemSelect = styled.select`
  width: 25vw;
  height: 35px;
  border-radius: 10px;
  padding: 0 8px 0 8px;
  border: 2px solid grey;
  font-size: 16px;
  color: grey;
`;

export const RatesCardsContainer = styled.div`
  max-width: 1280px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0 20px 0;
  width: 80vw;
  @media (max-width: 1000px) {
    width: 60vw;
  }
`

export const Text = styled.span`
  font-size: 24px;
`

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  border: none;
  color: black;
  padding: 5px;
  width: 18vw;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  @media (max-width: 1300px) {
    width: 23vw;
  }
  @media (max-width: 1000px) {
    width: 28vw;
  }
  @media (max-width: 750px) {
    width: 27vw;
  }
  @media (max-width: 500px) {
    width: 26vw;
  }
`