// Libraries
import React from 'react';
import { BiUser } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
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
            <NavigationLink className="top-nav-link" to="/cart">
              <span className="top-nav-text">Cart</span>
              <span className="top-nav-icon">
                <CgShoppingCart
                  style={{ height: '18px', width: '18px', marginTop: '4px' }}
                />
              </span>
            </NavigationLink>
          </li>
          <li>
            <NavigationLink className="top-nav-link" to="/signin">
              <span className="top-nav-text">Sign In</span>
              <span className="top-nav-icon">
                <BiUser
                  style={{ height: '18px', width: '18px', marginTop: '4px' }}
                />
              </span>
            </NavigationLink>
          </li>
        </NavigationList>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 24px;
  background-color: #575555;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
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
  margin-left: 20px;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export default Header;
