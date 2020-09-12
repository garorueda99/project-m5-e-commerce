import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './homepage/Home';
import Cart from './cartpage/Cart';
import Item from './itempage/Item';
import Error from './errorpage/Error';

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
        </Router>
      )}
    </div>
  );
}

export default App;
