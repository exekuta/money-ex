import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

export const HalfItemSelect = styled.select`
  width: 25vw;
  height: 39px;
  border-radius: 10px;
  padding: 0 8px 0 8px;
  border: 2px solid grey;
  font-size: 16px;
  color: grey;
`;

export const HalfItemInput = styled.input`
  width: 25vw;
  height: 35px;
  border-radius: 10px;
  padding: 0 8px 0 8px;
  border: 2px solid grey;
  font-size: 16px;
  color: black;
`;

export const FlexStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const BoldText = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const ErrorText = styled.span`
  color: red;
  font-weight: 700;
  @media (max-width: 1000px) {
    font-size: 12px;
    width: 28vw;
  }
`;
