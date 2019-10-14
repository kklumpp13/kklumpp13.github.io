import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { darkGray, primaryText, white } from '../css/colors';

const StyledHeader = styled.header`
background: ${white};
border-bottom: 1px solid ${darkGray};
display: flex;
flex-wrap: wrap;


@media screen and (min-width: 62.5em) {
  padding: 0 13.75rem;
}

`;

const Logo = styled.img`
  max-width: 100%;

  @media screen and (min-width: 43.750em) {
    max-width: 13.75rem;
  }
`;

// TODO: Touch target for links
const NavLink = styled(Link)`
  color: ${primaryText};
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 32px;
  padding: 0.5rem .75rem;
  text-decoration: none;



  &.current-page {
    border-bottom: 2px solid ${darkGray};
  }

  &:last-of-type {
    margin-right: 0;
    margin-top: 0;
  }
`;

const Nav = styled.nav`
  margin-top: 0;

  // 700px
  @media screen and (min-width: 43.750em) {
    margin-left: auto;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <NavLink to="/"><Logo src="../logo.png" alt="Krystal Klumpp logo" /></NavLink>
      <Nav>
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/presentations" activeClassName="current-page">
          Presentations
        </NavLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
