// Libraries
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Home from './home-page/Home';
import Cart from './cart-page/Cart';
import Item from './item-page/Item';
import Error from './error-page/Error';
import SignIn from './signin-page/SignIn';
import OrderConfirmation from './order-confirmation-page/OrderConfirmation';
import Header from './Header';
import Footer from './Footer';
import { CurrentUserContext } from './CurrentUserContext';
// Styles
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

function App() {
  const { currentUser } = React.useContext(CurrentUserContext);

  console.log('User data ', currentUser);

  return (
    <>
      <Router>
        <Wrapper>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/item/:itemId">
                <Item />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/order-confirmation">
                <OrderConfirmation />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/error">
                <Error />
              </Route>
            </Switch>
          </Main>
          <Footer />
        </Wrapper>
        <GlobalStyles />
      </Router>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1 0 auto;
  padding: 70px 24px 30px 24px;
  flex-grow: 1;
`;

export default App;
