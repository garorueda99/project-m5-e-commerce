// Libraries
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ItemCart from './ItemCart';
import { CurrentUserContext } from '../CurrentUserContext';
export default function Item() {
  const Cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Wrapper>
      <CartWrapper>
        Hello {currentUser.profile.firstName}!!
        {Object.keys(Cart).length === 0 ? (
          <div>No items at the moment in your cart</div>
        ) : (
          <div>The following products are in your cart{Object.keys(Cart)}</div>
        )}
        <CartItemInformationWrapper>
          {Object.keys(Cart).map((element, index) => (
            <ItemCart
              key={`item-order-${index}`}
              id={element}
              qty={Cart[element]}
              setTotal={setTotal}
            />
          ))}
          <TotalPrice>Total price : ${total.toFixed(2)}</TotalPrice>
          <PurchaseButton
            // Onclick on button to redirect to the cart page
            onClick={() => {
              window.location.href = '/order-confirmation';
            }}
          >
            Purchase
          </PurchaseButton>
        </CartItemInformationWrapper>
      </CartWrapper>
    </Wrapper>
  );
}

// components for style
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CartWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

const CartItemInformationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2%;
`;

const TotalPrice = styled.h2`
  margin: 2%;
  margin-top: 3%;
`;

// stylling item in card

const PurchaseButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
  cursor: pointer;
`;
