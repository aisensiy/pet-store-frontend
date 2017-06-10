import React from 'react';
import styled from 'styled-components';

const Price = styled(({ children }) => (
    <span className="price">¥<span>{children}</span></span>
))`
  color: black;
  font-weight: bold;
  span {
    font-size: 1.2em;
  }
`;

export default Price;