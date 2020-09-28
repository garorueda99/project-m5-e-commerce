// Libraries
import React, { useContext } from 'react';
import styled from 'styled-components';
import { BiUser } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { GiPegasus } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Components
import { CurrentUserContext } from './CurrentUserContext';

const Header = () => {
  const Cart = useSelector((state) => state.cart.indexes);
  const cartCount = Object.values(Cart).reduce((a, b) => a + b, 0);
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Wrapper>
      <Logo to="/">
        <GiPegasus style={{ height: '30px', width: '30px' }} />
        <Title>
          <span className="sm-header-title">Pegasus</span>
          <span className="md-header-title">Pegasus Wearables</span>
        </Title>
      </Logo>
      <nav>
        <NavigationList>
          <li>
            <NavigationLink to="/cart">
              {cartCount > 0 && <span>{cartCount}</span>}
              <span>
                <CgShoppingCart style={{ height: '22px', width: '22px' }} />
              </span>
            </NavigationLink>
          </li>
          {!currentUser ? (
            <li>
              <NavigationLink to="/signin">
                <span className="md-top-nav-text">Sign In</span>
                <span className="sm-top-nav-icon">
                  <BiUser style={{ height: '22px', width: '22px' }} />
                </span>
              </NavigationLink>
            </li>
          ) : (
            <li>
              <User src={currentUser.profile.imageSrc} alt="user image" />
            </li>
          )}
        </NavigationList>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 24px;
  background-color: #575555;
  color: #fff;
  position: fixed;
  left: 0;
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

const User = styled.img`
  width: 45px;
  border-radius: 50%;
  margin-left: 15px;
`;

const Title = styled.span`
  font-size: 1.5em;
  padding-left: 6px;
`;

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
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
