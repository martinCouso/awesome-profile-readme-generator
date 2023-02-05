import 'devicon/devicon.min.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeNames } from '../global-types'

export const theme = {
  light: {
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
  },
  dark: {
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
  },
  awesome: {
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
    },
    list: {
      backgroundColor: 'transparent',
      accentBackgroundColor: '#6c6cfa',
      textColor: 'white',
      boxShadow: '0 5px 25px 5px rgb(109, 15, 213)',
    },
  },
}

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeNames>(
    ThemeNames.AWESOME
  )

  const toggleTheme = () => {
    currentTheme == ThemeNames.LIGHT
      ? setCurrentTheme(ThemeNames.AWESOME)
      : setCurrentTheme(ThemeNames.LIGHT)
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <button onClick={toggleTheme}>Switch Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
