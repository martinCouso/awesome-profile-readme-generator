import styled from 'styled-components'
import Link from 'next/link'

const NavItem = styled(Link)`
  font-family: 'Inter', -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 2px;
  font-weight: 200;
  margin: 0 10px;
  text-transform: capitalize;
  font-size: 20px;
`

export default NavItem
