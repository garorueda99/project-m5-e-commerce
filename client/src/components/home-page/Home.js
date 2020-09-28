// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Item from './Item';
import PageIndex from './PageIndex';
import CategoryList from './CategoryList';
// Actions
import { requestItems, receiveItemsInfo } from '../../actions';
// Helpers
import { fetchItems } from '../helpers/fetch-functions';

const Homepage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const itemList = useSelector((state) => state.items.result);
  const [page, setPage] = useState(1);
  const [available, setFilterAvailable] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(2500);
  const [categories, setCategories] = useState([]);
  const [bodyL, setBodyL] = useState([]);
  const [keyword, setKeyword] = useState('');
  let pageSize = `query_result_maxqty=${items.pageSize}`;
  let index = page === 1 ? '' : `&initial_index=${(page - 1) * items.pageSize}`;
  let available_query = available ? `&available=${available}` : ``;
  let min_query = min > 0 ? `&min=${min}` : '';
  let max_query = max < 2500 ? `&max=${max}` : '';
  let categories_query =
    categories.length !== 0 ? `&category=${categories.join()}` : ``;
  let body_query = bodyL.length !== 0 ? `&body_location=${bodyL.join()}` : ``;
  let keyword_query = keyword.length >= 3 ? `&keyword=${keyword}` : '';
  // pull list of items
  React.useEffect(() => {
    dispatch(requestItems());
    const query =
      pageSize +
      index +
      available_query +
      min_query +
      max_query +
      categories_query +
      body_query +
      keyword_query;
    fetchItems(query).then((res) => dispatch(receiveItemsInfo(res)));
  }, [
    page,
    available,
    min,
    max,
    categories,
    bodyL,
    keyword_query,
    items.pageSize,
  ]);

  // map through list of items and return individual items
  // pass through individual array item from itemList
  return (
    <Wrapper>
      <PageIndex page={page} setPage={setPage} />
      <ContentWrapper>
        <ColumnList>
          <CategoryList
            available={available}
            setFilterAvailable={setFilterAvailable}
            min={min}
            setMin={setMin}
            max={max}
            setMax={setMax}
            setCategories={setCategories}
            setBodyL={setBodyL}
            setPage={setPage}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        </ColumnList>
        <ItemGrid>
          {itemList &&
            itemList.map((item) => <Item key={item._id} itemData={item} />)}
        </ItemGrid>
      </ContentWrapper>
      <PageIndex page={page} setPage={setPage} />
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
  min-height: 450px;
  display: flex;
  width: 100%;
`;

const ColumnList = styled.div`
  min-width: 250px;
`;

const ItemGrid = styled.div`
  margin-left: 35px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default Homepage;
