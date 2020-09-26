// Libraries
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../actions';
// Components
import LineItem from './LineItem';
import { CurrentUserContext } from '../CurrentUserContext';
// Assets
import visa from '../../assets/payment-method-visa.png';

const orderNumber = Math.random().toString().slice(2, 11);

// TODO
// render correct items from cart - done by AR
// debit the items correctly from BE - in progress
// clear cart - done by AR

const OrderConfirmation = () => {
  const { currentUser } = React.useContext(CurrentUserContext);

  const cartContents = useSelector((state) => state.cart.indexes);
  const cartArticles = useSelector((state) => state.cart.articles);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/items/reduce', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartContents),
    }).catch((err) => console.log(err));
    return () => {
      dispatch(clearCart());
    };
  }, []);
  return (
    <>
      <Wrapper>
        <h1 style={{ fontWeight: '400' }}>Thank you for your order!</h1>
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
              <p>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(total)}
              </p>
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
        <ProductTitle>Product(s)</ProductTitle>
        <LineItemWrapper>
          {cartArticles.map((element, index) => (
            <LineItem
              key={`purchase-${index}`}
              itemData={element}
              qty={cartContents[element._id]}
              setTotal={setTotal}
            />
          ))}
        </LineItemWrapper>
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
