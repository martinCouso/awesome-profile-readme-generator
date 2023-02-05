import React from 'react';
import styled from 'styled-components';

const TechItem = styled.li`
  all: unset;
  cursor: pointer;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  transition: all 500ms;
  padding: 10px;
`;

export default TechItem;
