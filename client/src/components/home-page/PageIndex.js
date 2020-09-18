import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BsCaretRight } from 'react-icons/bs';
import { fetchItems } from '../helpers/fetch-functions';
import { requestItems, receiveItemsInfo } from '../../actions';

export default function PageIndex() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const lastPage = Math.round(
    items.totalFound / items.filters.query_result_maxqty
  );
  return (
    <Wrapper>
      Page 1 of {lastPage}
      <Button
        onClick={() => {
          dispatch(requestItems());
          fetchItems({
            ...items.filters,
            initial_index: items.nextIndex,
          }).then((res) => dispatch(receiveItemsInfo(res)));
        }}
      >
        <BsCaretRight color={'gray'} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;
