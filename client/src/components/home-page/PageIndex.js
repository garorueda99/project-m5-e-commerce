// Libraries
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BsCaretLeft } from 'react-icons/bs';
import { BsCaretRight } from 'react-icons/bs';
// Actions
import { changePageItems, changePageSize } from '../../actions';

export default function PageIndex({ page, setPage }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const lastPage =
    Math.round(items.totalFound / items.pageSize) === 0
      ? 1
      : Math.round(items.totalFound / items.pageSize);
  return (
    <Wrapper>
      <div>
        <Button
          onClick={() => {
            setPage(1);
            dispatch(changePageItems());
          }}
        >
          <BsCaretLeft
            style={{ position: 'absolute', left: '15px' }}
            color={'gray'}
          />
          <BsCaretLeft color={'gray'} />
        </Button>
        <Button
          onClick={() => {
            if (page > 1) {
              setPage((n) => n - 1);
            }
            dispatch(changePageItems());
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
            dispatch(changePageItems());
          }}
        >
          <BsCaretRight color={'gray'} />
        </Button>
        <Button
          onClick={() => {
            setPage(lastPage);
            dispatch(changePageItems());
          }}
        >
          <BsCaretRight
            style={{ position: 'absolute', left: '15px' }}
            color={'gray'}
          />
          <BsCaretRight color={'gray'} />
        </Button>
      </div>
      <div>
        <label htmlFor="pages">
          Display{' '}
          <select
            name="cars"
            id="cars"
            value={items.pageSize}
            onChange={(e) => {
              dispatch(changePageSize(e.target.value));
              setPage(1);
            }}
          >
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>{' '}
          Items per page
        </label>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  height: 100%;
  padding: 10px 0;
`;

const Button = styled.button`
  position: relative;
  border: none;
  background: none;
  outline: none;
`;
