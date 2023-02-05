import React from 'react'
import styled from 'styled-components'

const DemoContainer = styled.div`
  @keyframes gradientBackground {
    0 % {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 846px;
  min-height: 3000px;
  animation: gradientBackground 10s ease infinite;
  color: white;
  text-align: center;
  padding: 50px 18px;
  background: rgb(24, 24, 24);
  background: ${(props) => props.theme.backgroundColor};
  background-size: 600% 400%;
`

export default DemoContainer
