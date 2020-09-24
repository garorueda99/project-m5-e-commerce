// Libraries
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import AddToCart from './AddToCart';

const Item = (props) => {
  const history = useHistory();

  const data = props.data;

  const cartContents = useSelector((state) => state.cart);

  const [CartWrapper, setCartWrapper] = useState(Wrapper);

  // greenify item outline if in cart

  React.useEffect(() => {
    console.log(cartContents);
    if (data._id in cartContents && cartContents[data._id] !== 0) {
      setCartWrapper(PurchasedWrapper);
    } else {
      setCartWrapper(Wrapper);
    }
  }, [cartContents])

  // shorten item name if too long

  let itemDisplayName;

  if (data.name.length > 30) {
    itemDisplayName = data.name.slice(0, 34) + '...';
  } else {
    itemDisplayName = data.name;
  }

  return (
    <CartWrapper>
      < ItemWrapper >
        <ItemContent
          // Onclick on card to redirect to the item page
          onClick={() => {
            history.push('/item/' + data._id);
            // return <Route path="/cart" />;
            // window.location.href = '/item/' + data._id;
          }}
        >
          <h3>{itemDisplayName}</h3>
          <ImgWrapper style={{ backgroundImage: `url(${data.imageSrc})` }} />
        </ItemContent>
        <ActionBar>
          <p>{data.price}</p>
          <AddToCart data={data} />
        </ActionBar>
      </ItemWrapper >
    </CartWrapper>
  );
};

export default Item;

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
`

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
`;
