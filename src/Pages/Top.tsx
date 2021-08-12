import { StartButton } from 'components/button/StartButton'
import styled from 'styled-components'
import { sp, tab } from 'media'

const Top = () => {
  return (
    <StyledTop>
      <div className="firstView mb-8">
        <div className="box">
          <h1 className="mb-8">Online Indian Poker</h1>
          <p>
            通話しながら遊べる
            <br />
            インディアン・ポーカー
          </p>
        </div>
      </div>
      <StartButton />
      <div className="frame">
        <h2 className="mb-16">遊び方</h2>
        <div className="text">
          <h3 className="mb-8">インディアン・ポーカーとは</h3>
          <p>
            トランプを使ったゲームです。全員がカードを一枚ずつ引いてゲームをスタートし、最終的に持っているカードの強さで勝敗が決まります。ただし、自分以外のカードは見ることができますが、自分のカードを見ることはできません。
          </p>
          <p>
            相手の反応を見て自分のカードを予想し、相手よりも弱いカードを持っていると思ったら『ドロー』を押してカードを交換しましょう。このカードに決めたと思ったら『決定』を押して勝負します。『決定』したあとはカードを交換することができません。全員が『決定』したら結果発表です。
          </p>
          <p className="mb-16">
            ハラハラドキドキの心理戦…。罰ゲームを決めて盛り上がりましょう！
          </p>
          <h3 className="mb-8">カードの強さ</h3>
          <p>
            Ａ ＜ ２ ＜ ３ ＜ ４ ＜ ５ ＜ ６ ＜ ７ ＜ ８ ＜ ９ ＜ １０ ＜ Ｊ ＜
            Ｑ ＜ Ｋ
          </p>
          <p>
            なお、同じ数字の場合は ♣ ＜ ♦ ＜ ♥ ＜ ♠ の順で順位を決定しています。
          </p>
        </div>
      </div>
    </StyledTop>
  )
}

export default Top

const StyledTop = styled.div`
  .firstView {
    background-image: url(${process.env.PUBLIC_URL}/Trump.jpg);
    width: 100%;
    height: 60vh;
    background-size: cover;
    background-position: center;
    position: relative;
    .box {
      width: 60%;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background-color: rgba(245, 245, 245, 0.8);
      padding: 1.6rem;
      h1 {
        font-size: 3.6rem;
        font-weight: bold;
        color: ${(props) => props.theme.colors.green};
      }
      p {
        font-size: 2rem;
      }
    }
  }
  h2 {
    font-size: 2.4rem;
    font-weight: bold;
  }
  .text {
    text-align: left;
    h3 {
      font-size: 2rem;
      font-weight: bold;
    }
    p {
      padding: 0 1.5rem;
      letter-spacing: 0.5px;
      line-height: 1.6;
      font-size: 1.6rem;
    }
  }
  ${tab`
    .firstView {
      height: 50vh;
      .box{
        padding: 1.2rem;
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1.6rem;
        }
      }
    }
    h2 {
      font-size: 2.0rem;
    }
    .text {
      h3 {
        font-size: 1.6rem;
      }
      p {
        padding: 0 1rem;
        font-size: 1.4rem;
      }
    }
    `}
  ${sp`
    .firstView {
      height: 40vh;
      .box{
        width: 80%;
        padding: 1rem;
        h1 {
          font-size: 2.2rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
    h2 {
      font-size: 1.6rem;
    }
    .text {
      h3 {
        font-size: 1.4rem;
      }
      p {
        padding: 0 1rem;
        font-size: 1.2rem;
      }
    }
  `}
`
