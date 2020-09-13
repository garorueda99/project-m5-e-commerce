// Libraries
import React from 'react';
import { GiPegasus } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
// Styles
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Logo to="/">
        <GiPegasus style={{ height: '30px', width: '30px' }} />
        <Title>Pegasus Wearables</Title>
      </Logo>
      <nav>
        <NavigationList>
          <li>
            <NavigationLink to="/">Sign In</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/cart">Cart</NavigationLink>
          </li>
        </NavigationList>
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

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
`;

const Title = styled.span`
  font-size: 1.5em;
  padding-left: 6px;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  text-align: right;
  text-decoration: none;
`;

const NavigationLink = styled(NavLink)`
  margin: 0 2em;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export default Header;
