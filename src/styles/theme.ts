export const theme = {
  fonts: {
    ss: '8px',
    small: '12px',
    midium: '16px',
    large: '20px',
    heading: '28px'
  },
  color: '#3c4043',
  background: '#2e8b57',
  buttonColor: '#f8f9fa',
  borderColor: '#dadce0',
  colors: {
    red: '#cc0000',
    white: '#f0f0f0',
    black: '#202020',
    gray: '#333333',
    green: '#008000'
  }
}

type Theme = typeof theme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
