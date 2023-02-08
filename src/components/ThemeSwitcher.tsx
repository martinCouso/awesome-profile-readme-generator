import React, { PropsWithChildren } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { appThemes } from '@/pages/_app'
import { useContext } from 'react'
import { BiMoon } from 'react-icons/bi'
import { BsSunFill } from 'react-icons/bs'
interface ThemeSwitcherInterface {
  toggleTheme: () => void
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 60px;
  height: 26px;
`
const StyledCheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`
interface SliderInterface {
  onSwitch: () => void
  active: boolean
  className?: string
}

const Slider: React.FC<PropsWithChildren<SliderInterface>> = ({
  onSwitch,
  className,
  children,
}) => {
  return (
    <span className={className} onClick={() => onSwitch()}>
      {children}
    </span>
  )
}
const StyledSlider = styled(Slider)`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) =>
    theme?.id === appThemes.dark.id ? 'black' : '#e9e9e9'};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 26px;
  border-width: 1px;
  border-color: white;
  border-style: solid;
`

const SliderButton = styled.span`
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 26px;
  -webkit-transform: translateX(
    ${({ theme }) => (theme?.id === appThemes.dark.id ? '29px' : '0')}
  );
  -ms-transform: translateX(
    ${({ theme }) => (theme?.id === appThemes.dark.id ? '29px' : '0')}
  );
  transform: translateX(
    ${({ theme }) => (theme?.id === appThemes.dark.id ? '29px' : '0')}
  );
  box-shadow: ${({ theme }) =>
    theme?.id === appThemes.dark.id
      ? 'unset'
      : '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'};
`

const ThemeSwitcher: React.FC<ThemeSwitcherInterface> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext)
  console.log('theme', theme)
  return (
    <Wrapper>
      <StyledCheckBox type={'checkbox'} />
      <StyledSlider
        onSwitch={toggleTheme}
        active={theme?.id === appThemes.dark.id}
      >
        <SliderButton>
          {theme?.id === appThemes.dark.id ? (
            <BiMoon size={'16px'} />
          ) : (
            <BsSunFill size={'16px'} />
          )}
        </SliderButton>
      </StyledSlider>
    </Wrapper>
  )
}

export default ThemeSwitcher
