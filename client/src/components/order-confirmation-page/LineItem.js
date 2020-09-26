// Libraries
import React, { useEffect } from 'react';
import styled from 'styled-components';

const LineItem = ({ itemData, qty, setTotal }) => {
  useEffect(() => {
    setTotal((n) => n + convertPriceToNumber(itemData.price) * qty);
  }, []);
  return (
    <>
      <Wrapper>
        {/* static data for now, should be coming from the purchase */}
        <ProductImage src={itemData.imageSrc} alt="" />
        <div>
          <ProductName>{itemData.name}</ProductName>
          <ProductDetails>
            Quantity: <span style={{ fontWeight: 'bold' }}>{qty}</span>
          </ProductDetails>
          <ProductDetails>
            Price/unit:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(convertPriceToNumber(itemData.price))}
            </span>
          </ProductDetails>
          <ProductDetails>
            Subtotal:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(convertPriceToNumber(itemData.price) * qty)}
            </span>
          </ProductDetails>
        </div>
      </Wrapper>
    </>
  );
};

const convertPriceToNumber = (priceString) =>
  Number(priceString.replace(/[^0-9\.-]+/g, ''));

const Wrapper = styled.li`
  display: flex;
  padding: 20px;
  background-color: #f8f8f8;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const ProductName = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
`;

const ProductDetails = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;

export default LineItem;
