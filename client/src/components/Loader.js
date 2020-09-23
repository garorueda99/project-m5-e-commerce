// Libraries
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Wrapper>
      <LoadingSpinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = styled.div`
  border: 8px solid lightgray;
  border-radius: 50%;
  border-top: 8px solid #575555;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
`;

export default Loader;
