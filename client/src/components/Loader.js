// Libraries
import React from 'react';
// Styles
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderDiv>Loading...</LoaderDiv>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  background: #eee;
`;

const LoaderDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

export default Loader;
