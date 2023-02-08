import React, { useEffect } from 'react'
import Nav from '@/components/Nav'
import HorizontalBox from '@/components/HorizontalBox'
import NavItem from '@/components/NavItem'
import Logo from '@/components/Logo'
import useFetch from '@/hooks/useFetch'
import ThemeSwitcher from '@/components/ThemeSwitcher'
interface HeaderInterface {
  toggleTheme: () => void
}

const Header: React.FC<HeaderInterface> = ({ toggleTheme }) => {
  const { data, callApi } = useFetch<{ stargazers_count: number }>()

  useEffect(() => {
    callApi(
      'https://api.github.com/repos/martinCouso/awesome-profile-readme-generator',
      false,
      { method: 'GET' }
    )
  }, [callApi])

  useEffect(() => {
    console.log('ghData', JSON.stringify(data))
  }, [data])

  return (
    <header>
      <Nav>
        <HorizontalBox>
          <NavItem href={'/'}>
            <Logo
              data-testid={'logo'}
              src={'/logo.png'}
              alt={'awesome profile readme generator logo'}
              width={40}
              height={40}
            />
          </NavItem>
          <NavItem href={'/why-is-it-awesome'}>Why is it Awesome?</NavItem>
        </HorizontalBox>
        <HorizontalBox>
          <ThemeSwitcher toggleTheme={toggleTheme} />
          <NavItem
            href={
              'https://github.com/martinCouso/awesome-profile-readme-generator'
            }
          >
            {data && data.stargazers_count > 50 ? data?.stargazers_count : null}
            ⭐ Github
          </NavItem>
        </HorizontalBox>
      </Nav>
    </header>
  )
}

export default Header
