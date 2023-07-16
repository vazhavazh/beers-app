import styled from '@emotion/styled';

export const BeerGallery = styled.ul`
  gap: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const BeerCard = styled.div`
  padding: 8px;
  border-radius: 8px;
  width: 200px;
  height: 200px;
  background-color: lightgray;
  padding: 16px;
  position: relative;
  overflow: hidden;
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
  div {
    
    font-family: 'Montserrat', sans-serif;
    border-radius: 8px;
    font-size: 16px;
    position: absolute;
    
    left: 0;
    width: 100%;
    background-color: #474a51;
    color: #ffff;
    padding: 16px;
    transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0;
  }
  &:hover > div {
    opacity: 0.8;
    cursor: pointer;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
export const ImageWrapper = styled.section`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: left;
  img {
    max-width: 100%;
    max-height: 160px;
    margin-right: 12px;
  }

  
  
`;
export const Flex = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  span {
    font-family: 'Montserrat', sans-serif;
    color: #474a51;
    font-size: 16px;
    margin-bottom: 12px;
  }
`;
