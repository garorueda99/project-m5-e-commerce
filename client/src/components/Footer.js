// Libraries
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p style={{ fontSize: '12px' }}>
        © 2020 Pegasus Wearables Inc. All rights reserved
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100vw;
  height: 60px;
  padding: 24px;
  background-color: #575555;
  color: #fff;
  z-index: 10;
`;

export default Footer;
