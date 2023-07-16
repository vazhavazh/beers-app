import React from 'react'
import { HeaderStyled, StyledNavLink } from './HeaderStyled';

export const Header = () => {
  return (
    <HeaderStyled>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/beers">Beers Gallery</StyledNavLink>
    </HeaderStyled>
  );
}

