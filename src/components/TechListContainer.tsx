import styled from 'styled-components'
import TechItem from '@/components/TechItem'
const TechListContainer = styled.ul`
  list-style-type: square;
  color: pink;
  padding: 0;
  & ${TechItem}:nth-child(even) {
    background-color: ${(props) => props.theme.list.accentBackgroundColor};
    color: ${(props) => props.theme.list.textColor};
    box-shadow: ${(props) => props.theme.list.boxShadow};
  }
  & ${TechItem}:nth-child(odd) {
    background-color: ${(props) => props.theme.list.backgroundColor};
    color: ${(props) => props.theme.list.textColor};
  }
`

export default TechListContainer
