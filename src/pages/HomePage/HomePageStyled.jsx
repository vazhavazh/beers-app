import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 91vh;
  background-color: #f5f5f5;
  padding: 16px;
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  border: 1px solid #474a51;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 4px;
  background-color: #474a51;
  color: #ffffff;
  cursor: pointer;

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: transparent;
    color: #000;
  }
`;
