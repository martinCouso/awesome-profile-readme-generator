import styled from 'styled-components'

const IntroText = styled.p`
  padding: 20px;
  color: ${(props) => props.theme.description.textColor};
  text-align: left;
  line-height: 30px;
`

export default IntroText
