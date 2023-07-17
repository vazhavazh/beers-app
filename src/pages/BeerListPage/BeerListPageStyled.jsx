import styled from '@emotion/styled';

export const BeerGallery = styled.ul`
  display: flex;
  gap: 12px 4%;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 77px;
`;

export const BeerCardHolder = styled.li`
  flex-basis: 47%;
  height: 200px;
  padding: 16px;
  overflow: hidden;
  @media (min-width: 768px) {
    :nth-of-type(5n + 5) {
      flex-basis: 60%;
    }
  }
  border-radius: 8px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: gray;
  }
  &:hover {
    overflow: auto;
  }
`;

export const DeleteButton = styled.button`
  position: fixed;
  z-index: 10000000;
  bottom: 3%;
  right: 4%;
  border: 1px solid red;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 8px;
  background-color: red;
  color: #ffffff;
  cursor: pointer;

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: transparent;
    color: #000;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreBtn = styled.button`
  border: 1px solid green;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 8px;
  background-color: green;
  color: #ffffff;
  cursor: pointer;

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: transparent;
    color: #000;
  }
`;
