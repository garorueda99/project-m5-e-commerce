// Libraries
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMinus } from 'react-icons/ai';
// import { AiOutlinePlus } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
// Actions
import { updateItemQuantity } from '../../actions';

const AddToCart = (props) => {
  // if there are zero items in stock, show a greyed out button
  // if there's zero quantity for the item in the cart, show default button
  // if there's at least one, show the plus-minus experience
  // if there are items in the cart corresponding, show the plus-minus experience

  const data = props.data;

  const dispatch = useDispatch();

  const cartContents = useSelector((state) => state.cart.indexes);
  // none in stock, or cart contents equal in stock
  if (data.numInStock === 0) {
    return <GreyedButton>Out of stock</GreyedButton>;
  } else if (cartContents[data._id] >= data.numInStock) {
    return (
      <QuantityWrapper>
        <QuantityButton
          onClick={() =>
            dispatch(updateItemQuantity(data, cartContents[data._id] - 1))
          }
        >
          <AiOutlineMinus />
        </QuantityButton>
        <div>{cartContents[data._id]}</div>{' '}
        <QuantityButton>
          <GreyPlusItem />
        </QuantityButton>
      </QuantityWrapper>
    );
  } else if (data._id in cartContents !== true) {
    // none in cart
    return (
      <AddToCartButton
        onClick={() => dispatch(updateItemQuantity(data._id, 1))}
      >
        Add to Cart
      </AddToCartButton>
    );
  } else if (cartContents[data._id] >= 1) {
    // one or more in cart
    return (
      <QuantityWrapper>
        <QuantityButton
          onClick={() =>
            dispatch(updateItemQuantity(data, cartContents[data._id] - 1))
          }
        >
          <AiOutlineMinus />
        </QuantityButton>
        <div>{cartContents[data._id]}</div>
        <QuantityButton
          onClick={() =>
            dispatch(updateItemQuantity(data, cartContents[data._id] + 1))
          }
        >
          <BsPlus />
        </QuantityButton>
      </QuantityWrapper>
    );
  } else {
    // standard view
    return (
      <AddToCartButton onClick={() => dispatch(updateItemQuantity(data, 1))}>
        Add to Cart
      </AddToCartButton>
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
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
`;

const GreyedButton = styled(AddToCartButton)`
  background-color: lightgrey;
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
`;
