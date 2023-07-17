import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const BeerGallery = styled.div`
  display: flex;
  gap: 12px 4%;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 77px;
`;

export const BeerCard = styled(NavLink)`
  flex-basis: 47%;
  text-decoration: none;
  padding: 8px;
  border-radius: 8px;
  width: 200px;
  height: 200px;
  background-color: lightgray;
  padding: 16px;
  position: relative;
  overflow: hidden;
  transition: opacity 0.4s ease-in-out;
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
    transition: bottom 0.3s ease-in-out, opacity 0.5s ease-in-out;
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
  @media (min-width: 768px) {
    :nth-of-type(5n + 5) {
      flex-basis: 60%;
    }
  }
`;
export const ImageWrapper = styled.section`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
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
