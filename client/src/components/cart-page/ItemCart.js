import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { fetchItem } from '../helpers/fetch-functions';
import Loader from '../Loader';

export default function ItemCart({ id, qty, setTotal }) {
  const [loading, setLoadging] = useState(false);
  useEffect(() => {
    fetchItem(id).then((data) => {
      setItem(data);
      setTotal((n) => n + convertPriceToNumber(data.price) * qty);
    });
  }, []);

  const [item, setItem] = useState(null);
  return (
    <>
      {item && (
        <ItemWrapper>
          {loading && <Loader />}
          <ItemImage src={item.imageSrc} alt="Item image"></ItemImage>
          <ItemInformationWrapper>
            <FaTrash
              style={{ marginLeft: '95%' }} // Onclick on button to delete
              onClick={() => {
                window.location.href = '/order-confirmation';
              }}
            >
              {' '}
            </FaTrash>
            <ItemName>{item.name}</ItemName>
            <ItemPrice> - Price per unit: {item.price} </ItemPrice>
            <ItemPrice>
              - Subtotal Item: ${convertPriceToNumber(item.price) * qty}
            </ItemPrice>
            <ItemSelected>
              Qty selected: {qty} / Qty available: {item.numInStock}
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 95%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 5%;
  padding: 15px;
`;
// stylling selected item card

const ItemImage = styled.img`
  width: 15%;
  height: 15%;
  margin: 2%;
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
