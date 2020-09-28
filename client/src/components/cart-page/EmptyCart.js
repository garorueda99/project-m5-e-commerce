// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../../styles/ErrorStyling.css';

const EmptyCart = () => {
  return (
    <>
      <div className="error-container">
        <h1 className="error-heading">Your cart is empty</h1>
        <div className="error-text-container">
          <hr className="horizontale-rule" />
          <p className="error-paragraph">
            <Link className="continue-shopping-link" to="/">
              Continue shopping
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
