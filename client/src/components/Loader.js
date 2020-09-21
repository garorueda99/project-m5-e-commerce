// Libraries
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return <LoadingSpinner />;
};

const LoadingSpinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border: 8px solid lightgray;
  border-radius: 50%;
  border-top: 8px solid #575555;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
`;

export default Loader;
