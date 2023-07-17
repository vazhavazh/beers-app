import React from 'react'
import { BeerCardStyled, Flex, ImageWrapper } from './BeerCardStyled';

 const BeerCard = ({beer}) => {
  return (
    <BeerCardStyled to={`/beers/${beer.id}`}>
      <div>{beer.description}</div>
      <ImageWrapper>
        {' '}
        <img src={beer.image_url} alt="beer" />
        <Flex>
          <span>{beer.name}</span>
          <span>{beer.tagline}</span>
          <span>ABV: {beer.abv}</span>
        </Flex>
      </ImageWrapper>
    </BeerCardStyled>
  );
}

export default BeerCard;
