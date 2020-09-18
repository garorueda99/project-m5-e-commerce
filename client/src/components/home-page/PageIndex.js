import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BsCaretRight } from 'react-icons/bs';
<<<<<<< HEAD
import { nextPageItems } from '../../actions';

export default function PageIndex({ page, setPage }) {
=======
import { fetchItems } from '../helpers/fetch-functions';
import { requestItems, receiveItemsInfo } from '../../actions';

export default function PageIndex() {
>>>>>>> 3c4465f4fe3826ac68989b2b3de57d3b1a19b87e
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const lastPage = Math.round(items.totalFound / items.pageSize);
  return (
    <Wrapper>
      Page {page} of {lastPage}
      <Button
        onClick={() => {
          if (page < lastPage) {
            setPage((n) => n + 1);
          }
          dispatch(nextPageItems());
        }}
      >
        <BsCaretRight color={'gray'} />
      </Button>
    </Wrapper>
  );
<<<<<<< HEAD
=======
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
>>>>>>> 3c4465f4fe3826ac68989b2b3de57d3b1a19b87e
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
