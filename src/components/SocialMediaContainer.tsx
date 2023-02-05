import React from 'react';
import styled from 'styled-components';

const SocialMediaContainer = styled.div`
  display: flex;
  width:100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin:50px 0;
  @media (max-width: 680px) {
      flex-direction: column;
  }
`;

export default SocialMediaContainer;
