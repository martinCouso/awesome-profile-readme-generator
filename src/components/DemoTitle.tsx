import styled from 'styled-components'

const DemoTitle = styled.h1`
  line-height: 1.3;
  letter-spacing: ${(props) => props.theme.title.letterSpacing};
  display: inline-block;
  text-transform: ${(props) => props.theme.title.textTransform};
  color: ${(props) => props.theme.textColor};
  font-family: ${(props) => props.theme.title.fontFamily};
  font-size: ${(props) => props.theme.title.fontSize};
  text-rendering: optimizeLegibility;
  @media (max-width: 680px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`

export default DemoTitle
