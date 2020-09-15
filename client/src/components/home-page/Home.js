import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Homepage = () => {

  // using state and props to pass data
  // 

  const [itemList, setItemList] = React.useState('');

  // pull list of items

  React.useEffect(() => {
    fetch('/api/items/')
      .then((res) => res.json())
      .then((json) => {
        setItemList(json);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  // map through list of items and return individual items
  // pass through individual array item from itemList

  return (
    <Wrapper>
      <ContentWrapper>
        <ColumnList>
          category 1
          category 2
          category 3
          category 4
      </ColumnList>
        <ItemGrid>
          {itemList && itemList.map((item) => (
            <Item key={item._id} data={item} />
          ))}
        </ItemGrid>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`

const ColumnList = styled.div`

`

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
`

export default Homepage;