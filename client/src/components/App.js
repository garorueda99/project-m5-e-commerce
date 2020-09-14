// Libraries
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Home from './home-page/Home';
import Cart from './cart-page/Cart';
import Item from './item-page/Item';
import Error from './error-page/Error';
import SignIn from './signin-page/SignIn';
import OrderConfirmation from './order-confirmation-page/OrderConfirmation';
import Header from './Header';

// Styles
import GlobalStyles from './GlobalStyles';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/api/me/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  console.log(profile);
  return (
    <>
      <Router>
        <Header />
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
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
