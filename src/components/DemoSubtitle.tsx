import styled from 'styled-components'

const DemoSubtitle = styled.h2`
  font-size: 40px;
  letter-spacing: 5px;
  text-align: center;
  display: inline-block;
  max-width: 600px;
  margin: 0 auto;
  line-height: 50px;
  margin-top: 50px;
  color: ${(props) => props.theme.textColor};
  font-family: ${(props) => props.theme.title.fontFamily};
  @media (max-width: 680px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`

export default DemoSubtitle
