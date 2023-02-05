import styled from 'styled-components'

const DemoCard = styled.div`
  border-radius: 10px;
  border-color: #a75def;
  background-color: #2020213b;
  max-width: 500px;
  box-shadow: -1px 3px 26px -4px ${(props) => props.theme.accentColorOne};
  margin-bottom: 50px;
  display: inline-block;
  page-break-inside: avoid;
  -moz-column-break-inside: avoid;
  break-inside: avoid;
  width: 100%;
  padding-bottom: 20px;
  animation-name: opacityAnimation;
  animation-duration: 4s;
  animation-delay: 1s;
`

export default DemoCard
