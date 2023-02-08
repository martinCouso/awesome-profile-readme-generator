// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    id: string
    textColor: string
    secondaryTextColor: string
    accentColorOne: string
    accentColorTwo: string
    secondaryAccentColorOne: string
    secondaryAccentColorTwo: string
    backgroundColor: string
    variation: string
    title: {
      fontFamily?: string
      fontSize?: string
      letterSpacing?: string
      textTransform?: string
    }
    description: {
      textColor: string
    }
    accentText: {
      titleFontSize: string
      fontFamily: string
      fontWeight: string
      fontStyle: string
      textTransform: string
      textShadow: string
    }
    list: {
      backgroundColor: string
      accentBackgroundColor: string
      textColor: string
      boxShadow: string
    }
    button: {
      backgroundColor: string
    }
  }
}
