import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BsCaretRight } from 'react-icons/bs';
import { BsCaretLeft } from 'react-icons/bs';
import { nextPageItems } from '../../actions';

export default function PageIndex({ page, setPage }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const lastPage = Math.round(items.totalFound / items.pageSize);
  return (
    <Wrapper>
      <Button
        onClick={() => {
          if (page > 1) {
            setPage((n) => n - 1);
          }
          dispatch(nextPageItems());
        }}
      >
        <BsCaretLeft color={'gray'} />
      </Button>
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
