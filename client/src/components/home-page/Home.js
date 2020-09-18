import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// imported components

import Item from './Item';
import PageIndex from './PageIndex';
import CategoryList from './CategoryList';

// helpers

import { requestItems, receiveItemsInfo } from '../../actions';
import { fetchItems } from '../helpers/fetch-functions';

const Homepage = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const itemList = useSelector((state) => state.items.result);

  // pull list of items

  React.useEffect(() => {
    dispatch(requestItems());
    fetchItems(items.filters).then((res) => dispatch(receiveItemsInfo(res)));
  }, []);

  // map through list of items and return individual items
  // pass through individual array item from itemList

  return (
    <Wrapper>
      <PageIndex />
      <ContentWrapper>
        <ColumnList>
          <CategoryList />
        </ColumnList>
        <ItemGrid>
          {itemList &&
            itemList.map((item) => <Item key={item._id} data={item} />)}
        </ItemGrid>
      </ContentWrapper>
      <PageIndex />
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
  margin: 30px 0;
  width: 70%;
`;

const ColumnList = styled.div``;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;

export default Homepage;
