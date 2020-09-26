import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <>
      <Wrapper>
        <h1 style={{ fontWeight: '400' }}>Your cart is empty</h1>
        <TextWrapper>
          <HorizontalRule />
          <Paragraph>
            <Link to="/">Continue shopping</Link>
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

export default EmptyCart;
