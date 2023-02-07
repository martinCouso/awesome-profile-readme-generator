import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 60px;
  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export default Nav
