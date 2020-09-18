import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function PageIndex() {
  const items = useSelector((state) => state.items);
  const lastPage = Math.round(
    items.totalFound / items.filters.query_result_maxqty
  );
  return <Wrapper>Page 1 of {lastPage}</Wrapper>;
}

const Wrapper = styled.div`
  width: 90%;
  text-align: center;
`;
