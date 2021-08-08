import { StartButton } from 'components/button/StartButton'
import styled from 'styled-components'

const Top = () => {
  return (
    <StyledTop>
      <div className="rule frame">
        <h2 className="mb-16">遊び方</h2>
        <div className="text">
          <h3 className="mb-8">インディアンポーカーとは</h3>
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
            Ｋ ＜ Ｑ ＜ Ｊ ＜ １０ ＜ ９ ＜ ８ ＜ ７ ＜ ６ ＜ ５ ＜ ４ ＜ ３ ＜
            ２ ＜ Ａ
          </p>
          <p>
            なお、同じ数字の場合は ♣ ＜ ♦ ＜ ♥ ＜ ♠ の順で順位を決定しています。
          </p>
        </div>
      </div>
      <StartButton />
    </StyledTop>
  )
}

export default Top

const StyledTop = styled.div`
  height: 100vh;
  .rule {
    font-size: 1.6rem;
    h2 {
      font-size: 2.4rem;
      font-weight: bold;
    }
    .text {
      text-align: left;
    }
    h3 {
      font-size: 2rem;
      font-weight: bold;
    }
    p {
      padding: 0 1.5rem;
      letter-spacing: 0.5px;
      line-height: 1.6;
    }
  }
`
