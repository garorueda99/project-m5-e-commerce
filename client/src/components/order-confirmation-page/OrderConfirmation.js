// Libraries
import React from 'react';
import Moment from 'react-moment';
// Components
import Loader from '../Loader';
import { CurrentUserContext } from '../CurrentUserContext';
// Styles
import styled from 'styled-components';

const orderNumber = Math.random().toString().slice(2, 11);

const OrderConfirmation = () => {
  const { currentUser } = React.useContext(CurrentUserContext);

  return !currentUser ? (
    <Loader />
  ) : (
    <>
      <Wrapper>
        <h1>Thank you for your order!</h1>
        <InvoiceWrapper>
          <HorizontalRule />
          <div className="md-invoice-section" style={{ paddingTop: '20px' }}>
            <Row id="order-number">
              <RowTitle>Order Number</RowTitle>
              <p>{orderNumber}</p>
            </Row>
            <Row id="order-date">
              <RowTitle>Order date</RowTitle>
              <p>
                <Moment format="YYYY/MM/DD" />
              </p>
            </Row>
            <Row id="email">
              <RowTitle>Email</RowTitle>
              <p>{currentUser.profile.email}</p>
            </Row>
            <Row id="fullname">
              <RowTitle>Name</RowTitle>
              <p>
                {`
              ${currentUser.profile.firstName}
              ${currentUser.profile.lastName}`}
              </p>
            </Row>
            <Row id="shipping-info">
              <RowTitle>Item send to</RowTitle>
              <p>{`
              ${currentUser.profile.address},
              ${currentUser.profile.province},
              ${currentUser.profile.country}`}</p>
            </Row>
            <HorizontalRule />
          </div>
        </InvoiceWrapper>
        <div>Product details goes here...</div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 0;
  max-width: 78em;
  min-width: 20em;
  min-height: 50em;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 24px;
`;

const InvoiceWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const HorizontalRule = styled.hr`
  border: 0;
  border-bottom: 1px solid #dadada;
`;

const Row = styled.div`
  display: inline-block;
  min-width: 33%;
  min-height: 80px;
`;

const RowTitle = styled.h4`
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export default OrderConfirmation;
