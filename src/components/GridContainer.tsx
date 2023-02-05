import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  -moz-column-count: 2;
  column-count: 2;
  -moz-column-gap: 20px;
  column-gap: 20px;
  -moz-column-fill: balance;
  column-fill: balance;
  margin: 20px auto 0;
  @media (max-width: 845px) {
      -moz-column-count: 1;
      column-count: 1;
      -moz-column-gap: 20px;
      column-gap: 20px;
      -moz-column-fill: balance;
      column-fill: balance;
      margin: 21px auto 0;
  }
`;

export default GridContainer;
