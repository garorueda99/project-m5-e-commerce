// Libraries
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ItemCart from './ItemCart';
import { CurrentUserContext } from '../CurrentUserContext';
import { FaTrash } from 'react-icons/fa';
import { removeFromCart, removeAllFromCart, purchaseCart } from '../../actions';
import { useHistory, useParams } from 'react-router-dom';

export default function Item() {
  const dispatch = useDispatch();

  const Cart = useSelector((state) => state.cart.indexes);
  const [total, setTotal] = useState(0);
  const [item, setItem] = React.useState('');

  const { currentUser } = useContext(CurrentUserContext);
  const history = useHistory();
  const itemState = useSelector((state) => state.cart.indexes);
  // retreive the item Id from URL params
  const { itemId } = useParams();
  const itemsSelectionQuantity = [];

  const [itemQuantity, setItemQuantity] = React.useState(itemState[itemId]);

  let purchaseButtonAvailability = true;
  let isItemInCart;

  const handleDropdownChange = (e) => {
    setItemQuantity(e.target.value);
  };

  if (Object.keys(Cart).length === 0) {
    purchaseButtonAvailability = false;
  }

  return (
    <Wrapper>
      <div>{JSON.stringify(Cart)}</div>

      <CartWrapper>
        Hello {currentUser.profile.firstName}!!
        {Object.keys(Cart).length === 0 ? (
          <div>No items at the moment in your cart</div>
        ) : (
          <div>The following products are in your cart:</div>
        )}
        {Object.keys(Cart).length !== 0 && (
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
          {Object.keys(Cart).map((element, index) => (
            <ItemCart
              key={`item-order-${index}`}
              id={element}
              qty={Cart[element]}
              setTotal={setTotal}
              total={total}
            />
          ))}

          <TotalPrice>Total price : ${total.toFixed(2)}</TotalPrice>

          {/* update available item selection quantity */}
          {item.isItemInCart === 0 && (
            <ItemQuantitySelect
              // value={itemQuantity}
              onChange={handleDropdownChange}
            >
              {itemsSelectionQuantity}
            </ItemQuantitySelect>
          )}

          {purchaseButtonAvailability ? (
            <PurchaseButton
              // Onclick on button to redirect to the cart page
              onClick={() => {
                history.push('/order-confirmation');
              }}
            >
              Purchase
            </PurchaseButton>
          ) : (
            <PurchaseButton disabled style={{ backgroundColor: 'grey' }}>
              No item to purchase
            </PurchaseButton>
          )}

          {/* <PurchaseButton
          
          <TotalPrice>
            Total price :
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
          </PurchaseButton> */}
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

const ItemQuantitySelect = styled.select`
  width: 60%;
  height: 15%;
  margin-left: 5%;
  flex: 2;
`;
