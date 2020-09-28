// Libraries
import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const NotFound = () => {
  const currentHrefLocation = window.location.href;
  if (currentHrefLocation !== 'http://localhost:3000/404') {
    const redirect = <Redirect to="/404" />;
    return redirect;
  }

  return (
    <>
      <Wrapper>
        <h1 style={{ fontWeight: '400' }}>404 - Page not Found!</h1>
        <TextWrapper>
          <HorizontalRule />
          <Paragraph>
            We're sorry but we can't find the page you're looking for. Please
            check the URL or{' '}
            <ContinueShoppingLink to="/">
              continue shopping
            </ContinueShoppingLink>
            .
          </Paragraph>
        </TextWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 0;
  max-width: 78em;
  min-width: 20em;
  height: 20em;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #f8f8f8;
`;

const TextWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const HorizontalRule = styled.hr`
  border: 0;
  border-bottom: 1px solid #dadada;
`;

const Paragraph = styled.p`
  padding-top: 20px;
`;

const ContinueShoppingLink = styled(Link)`
  text-decoration: none;
  border-bottom: dashed 1px;
  color: black;
  &&:hover {
    border-bottom: solid 1px;
  }
`;

export default NotFound;
