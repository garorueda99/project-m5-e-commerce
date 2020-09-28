// Libraries
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// Styles
import '../../styles/ErrorStyling.css';

const NotFound = () => {
  const currentHrefLocation = window.location.href;
  if (currentHrefLocation !== 'http://localhost:3000/404') {
    const redirect = <Redirect to="/404" />;
    return redirect;
  }

  return (
    <>
      <div className="error-container">
        <h1 className="error-heading">404 - Page not Found!</h1>
        <div className="error-text-container">
          <hr className="horizontale-rule" />
          <p className="error-paragraph">
            We're sorry but we can't find the page you're looking for. Please
            check the URL or{' '}
            <Link className="continue-shopping-link" to="/">
              continue shopping
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
