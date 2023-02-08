import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: all 0.50s linear;
  }
  
  input{
    border-bottom-color: ${({ theme }) => theme.textColor};
  }
  
  button{    
    all:unset;
    cursor: pointer;
    background-color: rgba(${({ theme }) => theme.button.backgroundColor},1);
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow:0 5px 25px 5px rgba( ${({ theme }) =>
      theme.button.backgroundColor},.5);
    border-radius: 10px;
    margin-left: 20px;
    padding: 10px 20px;
    color:white
  }
`
