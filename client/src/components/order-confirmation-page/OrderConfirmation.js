// Libraries
import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// Components
import LineItem from './LineItem';
import { CurrentUserContext } from '../CurrentUserContext';
// Assets
import visa from '../../assets/payment-method-visa.png';


const orderNumber = Math.random().toString().slice(2, 11);

// TODO
// render correct items from cart
// debit the items correctly from BE
// clear cart

const OrderConfirmation = () => {
  const { currentUser } = React.useContext(CurrentUserContext);

  const cartContents = useSelector((state) => state.cart);

  // cartContents is an object. We need to iterate through each entry.
  // let's try Object.entries()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

  return (
    <>
      <Wrapper>
        <h1>Thank you for your order!</h1>
        <InvoiceWrapper>
          <HorizontalRule />
          <Row className="sm-invoice-section-row">
            <Column id="order-number" className="md-invoice-section-column">
              <InvoiceTitle>Order Number</InvoiceTitle>
              <p>{orderNumber}</p>
            </Column>
            <Column id="order-date" className="md-invoice-section-column">
              <InvoiceTitle>Order date</InvoiceTitle>
              <p>
                <Moment format="YYYY/MM/DD" />
              </p>
            </Column>
            <Column id="total" className="md-invoice-section-column">
              <InvoiceTitle>Total</InvoiceTitle>
              {/* static number for now, should be coming from the purchase */}
              <p>$123.45</p>
            </Column>
            <Column id="payment-method" className="md-invoice-section-column">
              <InvoiceTitle>Payment method</InvoiceTitle>
              <PaymentMethod>
                <img
                  style={{ height: '25px', width: '35px' }}
                  src={visa}
                  alt="visa"
                />
                <p>&nbsp;{`${currentUser.profile.paymentMethod}`}</p>
              </PaymentMethod>
            </Column>
            <Column id="email" className="md-invoice-section-column">
              <InvoiceTitle>Order confirmation sent to</InvoiceTitle>
              <p>{currentUser.profile.email}</p>
            </Column>
            <Column id="shipping-info" className="md-invoice-section-column">
              <InvoiceTitle>Item send to</InvoiceTitle>
              <p>{`
              ${currentUser.profile.address},
              ${currentUser.profile.province},
              ${currentUser.profile.country}`}</p>
            </Column>
          </Row>
          <HorizontalRule />
        </InvoiceWrapper>
        <ProductTitle>Product</ProductTitle>
        <LineItemWrapper>
          {/* Product mapping to be added here - temp static data to showcase */}
          <LineItem />
          <LineItem />
          <LineItem />
          <LineItem />
          <LineItem />
        </LineItemWrapper>
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
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

const Column = styled.div`
  flex: 33%;
  padding: 20px;
  padding-left: 0;
`;

const InvoiceTitle = styled.h4`
  text-transform: uppercase;
  margin-bottom: 6px;
`;

const LineItemWrapper = styled.ul`
  margin-bottom: 50px;
`;

const ProductTitle = styled.h2`
  margin-bottom: 20px;
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
`;

export default OrderConfirmation;
