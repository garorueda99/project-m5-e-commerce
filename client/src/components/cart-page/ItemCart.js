// Libraries
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Loader from '../Loader';
// Actions
import { removeItemFromCart, loadArticle } from '../../actions';
// Helpers
import { fetchItem } from '../helpers/fetch-functions';

export default function ItemCart({ id, qty, setTotal, total }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [itemQty, setItemQty] = useState(qty);
  const itemData = useSelector((state) =>
    state.cart.articles.find((element) => element._id === parseInt(id))
  );

  useEffect(() => {
    !itemData && fetchItem(id).then((data) => dispatch(loadArticle(data)));
  }, []);

  useEffect(() => {
    if (!!itemData) {
      setTotal((n) => n + convertPriceToNumber(itemData.price) * itemQty);
    }
  }, [itemQty]);
  return (
    <>
      {!!itemData && (
        <ItemWrapper>
          {loading && <Loader />}
          <ImgWrapper
            style={{ backgroundImage: `url(${itemData.imageSrc})` }}
          />
          <ItemInformationWrapper>
            <Button
              onClick={() => {
                const newCost =
                  total - convertPriceToNumber(itemData.price) * itemQty;
                setTotal(newCost <= 0 ? 0 : newCost);
                dispatch(removeItemFromCart(id));
              }}
            >
              <FaTrash color="white" />
            </Button>
            <ItemName>{itemData.name}</ItemName>
            <ItemPrice>
              {' '}
              - Price per unit:{' '}
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(convertPriceToNumber(itemData.price))}{' '}
            </ItemPrice>
            <ItemPrice>
              - Subtotal Item:{' '}
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(convertPriceToNumber(itemData.price) * qty)}
            </ItemPrice>
            <ItemSelected>
              Qty selected: {qty} / Qty available: {itemData.numInStock}
            </ItemSelected>
          </ItemInformationWrapper>
        </ItemWrapper>
      )}
    </>
  );
}

const convertPriceToNumber = (priceString) =>
  Number(priceString.replace(/[^0-9\.-]+/g, ''));

const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 5%;
  padding: 15px;
`;
// stylling selected item card

const ImgWrapper = styled.div`
  width: 140px;
  height: 140px;
  margin: 2%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemName = styled.h2`
  flex: 2;
  margin: 2%;
`;

const ItemInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2%;
`;

const ItemPrice = styled.h3`
  flex: 2;
  margin: 2%;
`;

const ItemSelected = styled.p`
  flex: 2;
  margin: 2%;
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
