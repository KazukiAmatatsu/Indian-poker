import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    font-family: arial, sans-serif;
    width: 100%;
    font-size: 1.4rem;
    color: #3c4043;
  }
  .box {
    padding: 16px;
    border: 0.2rem solid #f8f9fa;
  }
  .fill {
    width: 100%;
  }
  .w-full{
    width: 100vw;
  }
  .h-full {
    height: 100vh;
  }
  /* Flexbox */
  .flex {
    display: flex;
  }
  .center {
    justify-content: center;
    align-items: center;
  }
  .between {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .column {
    flex-direction: column;
  }
  /* 余白 */
  .m--8 {
    margin: -8px;
  }
  .m-4 {
    margin: 4px;
  }
  .m-8 {
    margin: 8px;
  }
  .m-16 {
    margin: 16px;
  }
  .mt-8 {
    margin-top: 8px;
  }
  .mt-16 {
    margin-top: 16px;
  }
  .mb-8 {
    margin-bottom: 8px;
  }
  .mb-16 {
    margin-bottom: 16px;
  }
  .mr-8 {
    margin-right: 8px;
  }
  .mr-16 {
    margin-right: 16px;
  }
  .ml-8 {
    margin-left: 8px;
  }
  .ml-16 {
    margin-left: 16px;
  }
  /* 背景 */
  .bgc-g {
    background-color: ${(props) => props.theme.colors.green};
  }
  .bgc-w {
    background-color: ${(props) => props.theme.colors.white};
  }
`

export default GlobalStyle
