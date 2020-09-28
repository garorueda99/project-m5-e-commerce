// Libraries
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Components
import AddToCart from './AddToCart';

const Item = ({ itemData }) => {
  const history = useHistory();

  const cartContents = useSelector((state) => state.cart);

  const [CartWrapper, setCartWrapper] = useState(Wrapper);

  // greenify item outline if in cart
  React.useEffect(() => {
    if (itemData._id in cartContents && cartContents[itemData._id] !== 0) {
      setCartWrapper(PurchasedWrapper);
    } else {
      setCartWrapper(Wrapper);
    }
  }, [cartContents]);

  // shorten item name if too long

  let itemDisplayName;

  if (itemData.name.length > 30) {
    itemDisplayName = itemData.name.slice(0, 34) + '...';
  } else {
    itemDisplayName = itemData.name;
  }

  return (
    <CartWrapper>
      <ItemWrapper>
        <ItemContent
          // Onclick on card to redirect to the item page
          onClick={() => {
            history.push('/item/' + itemData._id);
          }}
        >
          <h3>{itemDisplayName}</h3>
          <ImgWrapper
            style={{ backgroundImage: `url(${itemData.imageSrc})` }}
          />
        </ItemContent>
        <ActionBar>
          <p>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(convertPriceToNumber(itemData.price))}
          </p>
          <AddToCart itemData={itemData} />
        </ActionBar>
      </ItemWrapper>
    </CartWrapper>
  );
};

export default Item;

const convertPriceToNumber = (priceString) =>
  Number(priceString.replace(/[^0-9\.-]+/g, ''));

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 15px;
  margin-right: 25px;
`;

const PurchasedWrapper = styled(Wrapper)`
  border: 1px solid #b1ff96;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ImgWrapper = styled.div`
  margin: 0 auto;
  width: 140px;
  height: 140px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemContent = styled.div`
  width: 100%;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  width: 100%;
  height: 32px;
`;
