import React from 'react';
import { Button, Container, Description, Title } from './HomePageStyled';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to HomePage</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        consectetur lectus eu leo consectetur, nec aliquam mi dapibus.
        Vestibulum aliquam eros id velit tincidunt, a vestibulum ligula
        condimentum.
      </Description>
      <Link to="beers">
        {' '}
        <Button>Beers Gallery</Button>
      </Link>
    </Container>
  );
};
