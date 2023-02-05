import styled from 'styled-components'

const DemoCardTitle = styled.h3`
  color: ${(props) => props.theme.secondaryTextColor};
  text-align: left;
  height: 70px;
  display: flex;
  align-items: flex-start;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 2px;
  padding-left: 20px;
  padding-top: 20px;
  background-color: ${(props) => props.theme.accentColorOne};
  margin: 0;
`

export default DemoCardTitle
