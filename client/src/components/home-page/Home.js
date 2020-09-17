import React from 'react';
import styled from 'styled-components';

import Item from './Item';
import CategoryList from './CategoryList';

const Homepage = () => {
  // using state and props to pass data
  // this will eventually need to pull the categories from redux

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
      });
  }, []);

  // map through list of items and return individual items
  // pass through individual array item from itemList

  return (
    <Wrapper>
      <ContentWrapper>
        <ColumnList>
          <CategoryList />
        </ColumnList>
        <ItemGrid>
          {itemList &&
            itemList.map((item) => <Item key={item._id} data={item} />)}
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
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width: 70%;
`;

const ColumnList = styled.div`
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;

export default Homepage;
