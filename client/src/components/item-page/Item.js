// Libraires
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { updateItemQuantity } from '../../actions';

export default function Item() {
  const dispatch = useDispatch();
  const history = useHistory();
  const itemState = useSelector((state) => state.cart.indexes);
  // retreive the item Id from URL params
  const { itemId } = useParams();

  const [item, setItem] = React.useState('');
  // create useState to show company name in item card
  const [company, setCompany] = React.useState('');

  // Quantity state to send to redux
  const [itemQuantity, setItemQuantity] = React.useState(itemState[itemId]);

  if (itemQuantity == null) {
    setItemQuantity(1);
  }

  // calling backend API to get specif item for the card
  React.useEffect(() => {
    fetch(`/api/item/${itemId}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
      })
      .catch(function (error) {
        if (error.status === 404) {
          history.push('/404');
        } else {
          history.push('/technical-issue');
        }
      });
  }, [itemId]);

  let companyIdOfItem = item.companyId;

  // calling backend API to GET specific company name
  React.useEffect(() => {
    fetch(`/api/seller/${companyIdOfItem}`)
      .then((res) => res.json())
      .then((json) => {
        setCompany(json);
      })
      .catch(function (error) {
        if (error.status === 404) {
          history.push('/404');
        } else {
          history.push('/technical-issue');
        }
      });
  }, []);

  // added quantity to item page
  const itemsSelectionQuantity = [];

  // loop for quantity by item (https://flaviocopes.com/react-how-to-loop/)

  if (item.numInStock !== 0) {
    for (let index = 1; index < item.numInStock + 1; index++) {
      if (index === itemState[itemId]) {
        itemsSelectionQuantity.push(
          <option key={`qty-${index}`} value={index}>
            Quantity: {index}
          </option>
        );
      } else {
        itemsSelectionQuantity.push(
          <option key={`else-${index}`} value={index}>
            Quantity: {index}
          </option>
        );
      }
    }
  }

  // if {qty on hand 0} show out of stock
  let isItemInStock;
  // if {qty on hand 0} disable purchanse button
  let buttonAvailability = true;

  if (item.numInStock === 0) {
    isItemInStock = <p style={{ color: 'red' }}>Out of stock</p>;
    buttonAvailability = false;
  } else {
    isItemInStock = <p style={{ color: 'green' }}>In stock</p>;
  }

  // event update number of item in dropdown
  const handleDropdownChange = (e) => {
    dispatch(updateItemQuantity(item, parseInt(e.target.value)));
    setItemQuantity(e.target.value);
  };
  return (
    <Wrapper>
      <ItemWrapper>
        <ItemImage src={item.imageSrc} alt="Item image."></ItemImage>
        <ItemInformationWrapper>
          <ItemName>{item.name}</ItemName>
          <ItemCategory>Category: {item.category}</ItemCategory>
          <ItemCompanyName>Company: {company.name}</ItemCompanyName>
          <ItemPrice>{item.price}</ItemPrice>
          <ItemInStock>{isItemInStock}</ItemInStock>

          {/* update available item selection quantity */}
          {item.numInStock > 0 && (
            <ItemQuantitySelect
              value={itemQuantity}
              onChange={handleDropdownChange}
            >
              {itemsSelectionQuantity}
            </ItemQuantitySelect>
          )}

          {/* https://reactjs.org/docs/conditional-rendering.html */}
          {buttonAvailability ? (
            <AddToCartButton
              // Onclick on button to redirect to the cart page
              // Add cart using redux dispatch
              onClick={() => {
                dispatch(updateItemQuantity(item, parseInt(itemQuantity)));
                history.push('/cart');
                // window.location.href = '/cart';
              }}
            >
              Add to cart
            </AddToCartButton>
          ) : (
              <AddToCartButton
                className="disabled-button"
                disabled
              // unvailable because is out of stock
              >
                Unavailable
              </AddToCartButton>
            )}
        </ItemInformationWrapper>
      </ItemWrapper>
    </Wrapper>
  );
}

// components for style
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  margin-top: 5%;
  border: 1px solid lightgray;
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

// stylling item in card

const ItemImage = styled.img`
  width: 50%;
  height: 50%;
  margin: 5%;
`;

const ItemName = styled.h2`
  flex: 2;
  margin: 5%;
`;

const ItemCategory = styled.p`
  flex: 2;
  margin-left: 5%;
`;

const ItemCompanyName = styled.p`
  flex: 2;
  margin-left: 5%;
`;

const ItemPrice = styled.h3`
  flex: 2;
  margin: 5%;
`;

const ItemInStock = styled.div`
  flex: 2;
  margin-left: 5%;
`;

const ItemQuantitySelect = styled.select`
  width: 60%;
  height: 15%;
  margin-left: 5%;
  flex: 2;
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
  border-radius: 5px;
`;
