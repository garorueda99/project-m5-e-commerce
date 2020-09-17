import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function Item() {
  // retreive the item Id from URL params
  const { itemId } = useParams();

  // const [item, setItem] = React.useState('');
  // //create useState to show company name in item card
  // const [company, setCompany] = React.useState('');

  // // calling backend API to get specif item for the card
  // React.useEffect(() => {
  //   fetch(`/api/item/${itemId}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setItem(json);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  // let companyIdOfItem = item.companyId;

  // // calling backend API to GET specific company name
  // React.useEffect(() => {
  //   fetch(`/api/seller/${companyIdOfItem}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCompany(json);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <Wrapper>
      <CartWrapper>
        <CartItemInformationWrapper>
          <PurchaseButton
            //Onclick on button to redirect to the cart page
            onClick={() => {
              window.location.href = '/OrderConfirmation/';
            }}
          >
            Purchase
          </PurchaseButton>
        </CartItemInformationWrapper>
      </CartWrapper>
    </Wrapper>
  );
}

//components for style
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-top: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

const CartItemInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2%;
`;

//stylling item in card

const PurchaseButton = styled.button`
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
