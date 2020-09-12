// Libraries
import React from 'react';
import { GiPegasus } from 'react-icons/gi';
// Styles
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Logo href="#">
        <GiPegasus style={{ height: '30px', width: '30px' }} />
        <Title>Pegasus Wearables</Title>
      </Logo>
      <nav>
        <NavBar>
          <li>
            <NavLink href="#">Sign In</NavLink>
          </li>
          <li>
            <NavLink href="#">Cart</NavLink>
          </li>
        </NavBar>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  background-color: #575555;
  color: #fff;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
`;

const Title = styled.span`
  font-size: 1.5em;
  padding-left: 6px;
`;

const NavBar = styled.ul`
  display: flex;
  list-style: none;
  text-align: right;
  text-decoration: none;
`;

const NavLink = styled.a`
  margin: 0 2em;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export default Header;
