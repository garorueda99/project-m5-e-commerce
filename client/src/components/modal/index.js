// Libraries
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { closeModal } from '../../actions';

export default function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  return (
    <>
      {modal.status === 'active' && (
        <Wrapper>
          <DialogWrapper>
            <Title>{modal.title}</Title>
            <Content>{modal.message}</Content>
            <Close onClick={() => dispatch(closeModal())}>&times;</Close>
          </DialogWrapper>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Sit on top */
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.65); /* Black w/ opacity */

  /*Check this later for animation*/
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const DialogWrapper = styled.div`
  position: relative;
  flex-direction: column;
  outline: 0;
  width: 80%;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 6px;
  cursor: default;
`;

const Title = styled.h2``;

const Content = styled.p`
  text-align: justify;
  padding-right: 35px;
`;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
`;
