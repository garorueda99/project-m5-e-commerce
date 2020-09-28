// Libraries
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
// Actions
import { updateItemQuantity, removeItemFromCart } from '../../actions';
import { postCart } from '../helpers/fetch-functions';

const AddToCart = ({ itemData }) => {
  // if there are zero items in stock, show a greyed out button
  // if there's zero quantity for the item in the cart, show default button
  // if there's at least one, show the plus-minus experience
  // if there are items in the cart corresponding, show the plus-minus experience

  const dispatch = useDispatch();
  const cartContents = useSelector((state) => state.cart.indexes);
  const cart = useSelector((state) => state.cart);

  // Removes items card on cart page if quantity is at zero
  if (cartContents[itemData._id] === 0) {
    dispatch(removeItemFromCart(itemData._id));
  }

  // none in stock, or cart contents equal in stock
  if (itemData.numInStock === 0) {
    return (
      <AddToCartButton className="disabled-button" disabled>
        Out of stock
      </AddToCartButton>
    );
  } else if (cartContents[itemData._id] >= itemData.numInStock) {
    return (
      <QuantityWrapper>
        <QuantityButton
          onClick={() => {
            dispatch(
              updateItemQuantity(itemData, cartContents[itemData._id] - 1)
            );

            postCart({
              id: cart.id,
              status: cart.status,
              indexes: {
                ...cart.indexes,
                [itemData._id]: cartContents[itemData._id] - 1,
              },
            });
          }}
        >
          <AiOutlineMinus />
        </QuantityButton>
        <div>{cartContents[itemData._id]}</div>{' '}
        <QuantityButton>
          <GreyPlusItem />
        </QuantityButton>
      </QuantityWrapper>
    );
  } else if (itemData._id in cartContents !== true) {
    // none in cart
    return (
      <AddToCartButton
        onClick={() => {
          dispatch(updateItemQuantity(itemData, 1));
          postCart({
            id: cart.id,
            status: cart.status,
            indexes: { ...cart.indexes, [itemData._id]: 1 },
          });
        }}
      >
        Add to Cart
      </AddToCartButton>
    );
  } else if (cartContents[itemData._id] >= 1) {
    // one or more in cart
    return (
      <QuantityWrapper>
        <QuantityButton
          onClick={() => {
            dispatch(
              updateItemQuantity(itemData, cartContents[itemData._id] - 1)
            );
            postCart({
              id: cart.id,
              status: cart.status,
              indexes: {
                ...cart.indexes,
                [itemData._id]: cartContents[itemData._id] - 1,
              },
            });
          }}
        >
          <AiOutlineMinus />
        </QuantityButton>
        <div>{cartContents[itemData._id]}</div>
        <QuantityButton
          onClick={() => {
            dispatch(
              updateItemQuantity(itemData, cartContents[itemData._id] + 1)
            );
            postCart({
              id: cart.id,
              status: cart.status,
              indexes: {
                ...cart.indexes,
                [itemData._id]: cartContents[itemData._id] + 1,
              },
            });
          }}
        >
          <BsPlus />
        </QuantityButton>
      </QuantityWrapper>
    );
  }
};

export default AddToCart;

const AddToCartButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  margin: 0 15px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  width: 50 px;
`;

const GreyPlusItem = styled(BsPlus)`
  color: lightgrey;
  cursor: default;
`;
