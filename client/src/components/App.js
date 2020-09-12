// Libraries
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Home from './home-page/Home';
import Cart from './cart-page/Cart';
import Item from './item-page/Item';
import Error from './error-page/Error';
import Header from './Header';
// Styles
import GlobalStyles from './GlobalStyles';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return (
    <div>
      {bacon ? (
        bacon
      ) : (
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
          <Route path="/error">
            <Error />
          </Route>
          <GlobalStyles />
        </Router>
      )}
    </div>
  );
}

export default App;
