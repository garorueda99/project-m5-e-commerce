import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const AddToCart = () => {

    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart);

    // if there are zero items in stock, show a greyed out button
    // if there's zero quantity for the item in the cart, show default button
    // if there's at least one, show the plus-minus experience

    return (
        <button onClick={() => dispatch(addToCart(data._id))}>Add to Cart</button>
    )

}

export default AddToCart;