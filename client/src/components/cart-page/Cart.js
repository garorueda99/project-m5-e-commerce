// Libraries
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
// Components
import ItemCart from './ItemCart';
import EmptyCart from './EmptyCart';
import { CurrentUserContext } from '../CurrentUserContext';
// Actions
import { removeAllFromCart, purchaseCart } from '../../actions';

export default function Item() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const { currentUser } = useContext(CurrentUserContext);
  const history = useHistory();

  if (Object.keys(cart.indexes).length === 0) {
    return <EmptyCart />;
  }

  return (
    <Wrapper>
      <CartWrapper>
        <p style={{ textAlign: 'center' }}>
          Hello <strong>{currentUser.profile.firstName}</strong>!! <br />
          The following product(s) are in your cart:
        </p>
        {Object.keys(cart.indexes).length !== 0 && (
          <Button
            onClick={() => {
              dispatch(removeAllFromCart());
              setTotal(0);
            }}
          >
            <FaTrash color="white" />
          </Button>
        )}
        <CartItemInformationWrapper>
          {Object.keys(cart.indexes).map((element, index) => (
            <ItemCart
              key={`item-order-${index}`}
              id={element}
              qty={cart.indexes[element]}
              setTotal={setTotal}
              total={total}
            />
          ))}
          <TotalPrice>
            Total price:{' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(total)}
          </TotalPrice>
          <PurchaseButton
            // Onclick on button to redirect to the cart page
            onClick={() => {
              dispatch(purchaseCart());
              history.push('/order-confirmation');
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
  border-radius: 5px;
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 0;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4caf50;
  border: none;
  outline: none;
  &:hover {
    background-color: red;
  }
`;
