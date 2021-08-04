export const theme = {
  fonts: {
    ss: '8px',
    small: '12px',
    midium: '16px',
    large: '20px',
    heading: '28px'
  },
  color: '#3c4043',
  buttonColor: '#f8f9fa',
  modalColor: '#f8f9fa',
  colors: {
    green: '#2e8b57',
    red: '#dc143c',
    white: '#f0f0f0',
    black: '#101010'
  }
}

type Theme = typeof theme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
