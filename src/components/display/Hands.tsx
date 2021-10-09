import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { Card } from 'components/stylesParts'

const Hands = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)
  const member = roomInfo.member
  return (
    <div>
      {member &&
        Object.entries(member).map(([key, data]) => {
          let number: number | string = ''
          if (data.number === 1) {
            number = 'A'
          } else if (data.number === 11) {
            number = 'J'
          } else if (data.number === 12) {
            number = 'Q'
          } else if (data.number === 13) {
            number = 'K'
          } else {
            number = data.number
          }

          if (key !== userInfo.id) {
            return (
              <Card key={key} red={data.mark === '♥' || data.mark === '♦'}>
                <div className="cardFrame">
                  <div className="front">
                    <div className="head">
                      <div className="number">{number}</div>
                      <div className="mark">{data.mark}</div>
                    </div>
                    {data.enter && !roomInfo.finished ? (
                      <span className="enterRibbon">決定</span>
                    ) : (
                      <></>
                    )}
                    <div className="userName">{data.name}</div>
                    <div className="foot">
                      <div className="mark">{data.mark}</div>
                      <div className="number">{number}</div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          } else {
            return <div key={key}></div>
          }
        })}
    </div>
  )
}

export default Hands
