import React from 'react';
import styled from 'styled-components';

export default function Item() {
  return (
    <Wrapper>
      <ItemWrapper>
        <ItemImage
          src="https://hackernoon.com/hn-images/0*xMaFF2hSXpf_kIfG.jpg"
          alt="Item image."
        ></ItemImage>
        <ItemInformationWrapper>
          <ItemName>Items info</ItemName>
          <ItemCompanyName>Company name</ItemCompanyName>
          <ItemPrice>Price</ItemPrice>
          <ItemInStock>In Stock</ItemInStock>
          <AddToCartButton>Add to cart</AddToCartButton>
        </ItemInformationWrapper>
      </ItemWrapper>
      <ItemReviewWrapper>
        <h2>Items review</h2>
      </ItemReviewWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 35%;
  margin-top: 5%;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

const ItemInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2%;
`;

const ItemReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10%;
`;

const ItemImage = styled.img`
  width: 50%;
  height: 50%;
  margin: 5%;
`;

const ItemName = styled.h2`
  flex: 2;
  margin: 5%;
`;

const ItemCompanyName = styled.p`
  flex: 2;
  margin-left: 5%;
`;

const ItemPrice = styled.h3`
  flex: 2;
  margin: 5%;
`;

const ItemInStock = styled.p`
  flex: 2;
  margin-left: 5%;
`;

const AddToCartButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5%;
  margin-top: 50%;
  cursor: pointer;
`;
