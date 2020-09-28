// Libraries
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// Styles
import '../../styles/ErrorStyling.css';

const TechnicalIssue = () => {
  const currentHrefLocation = window.location.href;
  if (currentHrefLocation !== 'http://localhost:3000/technical-issue') {
    const redirect = <Redirect to="/technical-issue" />;
    return redirect;
  }

  return (
    <>
      <div className="error-container">
        <h1 className="error-heading">Error - Technical issues!</h1>
        <div className="error-text-container">
          <hr className="horizontale-rule" />
          <p className="error-paragraph">
            We're sorry but we can't load the page you're looking for. Please
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

export default TechnicalIssue;
