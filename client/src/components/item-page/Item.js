import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function Item() {
  // retreive the item Id from URL params
  const { itemId } = useParams();

  const [item, setItem] = React.useState('');
  //create useState to show company name in item card
  const [company, setCompany] = React.useState('');

  // calling backend API to get specif item for the card
  React.useEffect(() => {
    fetch(`/api/item/${itemId}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  let companyIdOfItem = item.companyId;

  // calling backend API to GET specific company name
  React.useEffect(() => {
    fetch(`/api/seller/${companyIdOfItem}`)
      .then((res) => res.json())
      .then((json) => {
        setCompany(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Wrapper>
      <ItemWrapper>
        <ItemImage src={item.imageSrc} alt="Item image."></ItemImage>
        <ItemInformationWrapper>
          <ItemName>{item.name}</ItemName>
          <ItemCategory>{item.category}</ItemCategory>
          <ItemCompanyName>{company.name}</ItemCompanyName>
          <ItemPrice>{item.price}</ItemPrice>
          <ItemInStock>{item.numInStock}</ItemInStock>
          <AddToCartButton>Add to cart</AddToCartButton>
        </ItemInformationWrapper>
      </ItemWrapper>
      <ItemReviewWrapper>
        <h2>Items review</h2>
      </ItemReviewWrapper>
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

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;
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

//stylling item in card

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
