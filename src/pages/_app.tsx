import 'devicon/devicon.min.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeNames } from '../global-types'
import Header from '@/components/Header/Header'
import { GlobalStyles } from '@/styles/gobalStyles'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../mocks').then(({ setupMocks }) => {
    void setupMocks()
    console.log('setupMocks')
  })
}

export const themes = {
  awesome: {
    id: 'theme-awesome',
    textColor: 'white',
    accentColorOne: '#a230ef',
    accentColorTwo: '#c80257',
    secondaryTextColor: '#000',
    secondaryAccentColorOne: '#6ef1f7',
    secondaryAccentColorTwo: '#bc5ef2',
    backgroundColor:
      'radial-gradient(circle, rgba(2,0,36,1) 0%, rgb(54, 5, 92) 35%, rgb(13, 12, 12) 100%)',
    title: {
      fontFamily:
        'system-ui, -apple-system, Segoe UI, Roboto, Helvetica,Arial,sans-serif,Apple Color Emoji, Segoe UI Emoji',
      fontSize: '70px',
      textTransform: 'unset',
      letterSpacing: 'unset',
    },
    description: {
      textColor: '#FFF',
    },
    accentText: {
      fontFamily: 'sans-serif;',
      fontWeight: 'bold',
      fontStyle: 'cursive',
      textTransform: 'unset',
      textShadow: 'unset',
      letterSpacing: '0.15em',
      titleFontSize: '60px',
    },
    list: {
      backgroundColor: 'transparent',
      accentBackgroundColor: '#6c6cfa',
      textColor: 'white',
      boxShadow: '0 5px 25px 5px rgb(109, 15, 213)',
    },
    button: {
      backgroundColor: '58,58,255',
    },
    variation: 'test',
  },
  light: {
    id: 'theme-light',
    textColor: 'black',
    secondaryTextColor: '#c6c6c6',
    accentColorOne: 'black',
    accentColorTwo: 'black',
    secondaryAccentColorOne: 'black',
    secondaryAccentColorTwo: 'black',
    backgroundColor: '#e7e5e4',
    description: {
      textColor: '#2a2a2a',
    },
    title: {
      fontFamily:
        '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;',
      fontSize: '60px',
    },
    accentText: {
      titleFontSize: '60px',
      fontFamily: 'sans-serif;',
      fontWeight: 'bold',
      fontStyle: 'cursive',
      textTransform: 'uppercase',
      textShadow: `
      4px 4px 0px #d5d5d5, 
      7px 7px 0px rgba(0, 0, 0, 0.2);
  `,
    },
    list: {
      backgroundColor: 'transparent',
      accentBackgroundColor: '#ccc',
      textColor: 'black',
      boxShadow: 'unset',
    },
    button: {
      backgroundColor: '58,58,255',
    },
    variation: 'test',
  },
  dark: {
    id: 'dark-theme',
    textColor: '#FFF',
    secondaryTextColor: '#000',
    accentColorOne: '#FFF',
    accentColorTwo: '#FFF',
    secondaryAccentColorOne: '#FFF',
    secondaryAccentColorTwo: '#FFF',
    backgroundColor: '#000',
    title: {
      fontFamily:
        '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;',
      fontSize: '60px',
    },
    description: {
      textColor: '#FFF',
    },
    accentText: {
      titleFontSize: '60px',
      fontFamily: 'sans-serif;',
      fontWeight: 'bold',
      fontStyle: 'cursive',
      textTransform: 'uppercase',
      textShadow: 'unset',
    },
    list: {
      backgroundColor: 'transparent',
      accentBackgroundColor: '#1e1e1e',
      textColor: 'white',
      boxShadow: 'unset',
    },
    button: {
      backgroundColor: '58,58,255',
    },
    variation: 'test',
  },
}

export const appThemes = {
  light: {
    id: 'light-theme',
    textColor: 'black',
    secondaryTextColor: '#c6c6c6',
    accentColorOne: 'black',
    accentColorTwo: 'black',
    secondaryAccentColorOne: 'black',
    secondaryAccentColorTwo: 'black',
    backgroundColor: '#FFF',
    description: {
      textColor: '#2a2a2a',
    },
    title: {
      fontFamily:
        '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;',
      fontSize: '60px',
    },
    accentText: {
      titleFontSize: '60px',
      fontFamily: 'sans-serif;',
      fontWeight: 'bold',
      fontStyle: 'cursive',
      textTransform: 'uppercase',
      textShadow: `
      4px 4px 0px #d5d5d5, 
      7px 7px 0px rgba(0, 0, 0, 0.2);
  `,
    },
    list: {
      backgroundColor: 'transparent',
      accentBackgroundColor: '#ccc',
      textColor: 'black',
      boxShadow: 'unset',
    },
    button: {
      backgroundColor: '58,58,255',
    },
    variation: 'test',
  },
  dark: {
    id: 'dark-theme',
    textColor: '#FFF',
    secondaryTextColor: '#000',
    accentColorOne: '#a230ef',
    accentColorTwo: '#c80257',
    secondaryAccentColorOne: '#FFF',
    secondaryAccentColorTwo: '#FFF',
    backgroundColor:
      'radial-gradient(circle, rgba(2,0,36,1) 0%, rgb(54, 5, 92) 35%, rgb(13, 12, 12) 100%)',
    title: {
      fontFamily:
        '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;',
      fontSize: '60px',
    },
    description: {
      textColor: '#FFF',
    },
    accentText: {
      titleFontSize: '60px',
      fontFamily: 'sans-serif;',
      fontWeight: 'bold',
      fontStyle: 'cursive',
      textTransform: 'uppercase',
      textShadow: 'unset',
    },
    list: {
      backgroundColor: 'transparent',
      accentBackgroundColor: '#1e1e1e',
      textColor: 'white',
      boxShadow: 'unset',
    },
    button: {
      backgroundColor: '58,58,255',
    },
    variation: 'test',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof appThemes>(
    ThemeNames.DARK
  )

  const toggleTheme = () => {
    console.log('toggleTheme')
    currentTheme == ThemeNames.LIGHT
      ? setCurrentTheme(ThemeNames.DARK)
      : setCurrentTheme(ThemeNames.LIGHT)
  }

  return (
    <ThemeProvider theme={appThemes[currentTheme]}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
