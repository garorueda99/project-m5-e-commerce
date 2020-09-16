import React from 'react';
import styled from 'styled-components';

const Item = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <Wrapper
      //Onclick on image to redirect to the item page
      onClick={() => {
        window.location.href = '/item/' + data._id;
      }}
    >
      <ItemWrapper>
        <ItemContent>
          <h3>{data.name}</h3>
          <ImgWrapper src={data.imageSrc} />
        </ItemContent>
        <ActionBar>
          <p>{data.price}</p>
          <button>Add to Cart</button>
        </ActionBar>
      </ItemWrapper>

    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const ImgWrapper = styled.img`
  width: 150px;
`

const ItemContent = styled.div`

`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  width: 100%;
`;