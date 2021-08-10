import styled from 'styled-components'

export const Card = styled.div<{ red: boolean }>`
  display: inline-block;
  margin: 0 1.6rem;
  .cardFrame {
    width: 17.4rem; /* ヨコ58mm */
    height: 26.7rem; /* タテ89mm */
    font-size: 3rem;
    text-align: center;
    border-radius: 0.8rem;
    :hover {
      box-shadow: 0 1px 6px #202124;
    }
  }
  .front {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    &:before {
      content: '';
      position: absolute;
      top: 50px;
      bottom: -100px;
      left: -25px;
      right: 0px;
      border-left: solid 60px ${(props) => props.theme.colors.gray};
      background: ${(props) => props.theme.colors.black};
      transform: rotate(75deg);
    }
    &:after {
      content: '';
      position: absolute;
      top: -50px;
      bottom: -50px;
      left: 50px;
      right: 50px;
      background: ${(props) => props.theme.colors.red};
      opacity: 0.9;
      transform: rotate(37deg);
    }
    .head {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: ${(props) => (props.red ? '#ff0000' : '')};
    }
    .foot {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      transform: rotate(180deg);
      color: ${(props) => props.theme.colors.white};
    }
    .userName {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      color: ${(props) => props.theme.colors.white};
      font-size: 2rem;
      z-index: 2;
    }
  }
  .back {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    background-color: #fff;
    background-image: repeating-linear-gradient(
        60deg,
        rgba(204, 0, 0, 0.7) 1px 21px,
        rgba(0, 0, 0, 0.7) 21px 41px
      ),
      repeating-linear-gradient(
        -60deg,
        rgba(204, 0, 0, 0.7) 1px 21px,
        rgba(0, 0, 0, 0.8) 21px 41px
      );
  }
`
