import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { Draw } from 'components/Draw'
import { Card } from 'components/stylesParts'

const MyHand = () => {
  const userInfo = useRecoilValue(user)
  const userId = userInfo.id
  const roomInfo = useRecoilValue(room)
  const roomId = roomInfo.roomId

  const enter = roomInfo.member?.[userId].enter
  const draw = () => {
    if (!enter) {
      Draw(userId, roomId)
    } else {
      alert('もう決定しているのでカードを変えることはできません')
    }
  }

  const handRef = roomInfo.member?.[userId]
  if (handRef) {
    let number: number | string = ''
    if (handRef.number === 1) {
      number = 'A'
    } else if (handRef.number === 11) {
      number = 'J'
    } else if (handRef.number === 12) {
      number = 'Q'
    } else if (handRef.number === 13) {
      number = 'K'
    } else {
      number = handRef.number
    }
    return (
      <Card red={handRef.mark === '♥' || handRef.mark === '♦'}>
        <div className="cardFrame">
          {roomInfo.finished ? (
            <div className="front">
              <div className="head">
                <div className="number">{number}</div>
                <div className="mark">{handRef.mark}</div>
              </div>
              <div className="userName">{handRef.name}</div>
              <div className="foot">
                <div className="mark">{handRef.mark}</div>
                <div className="number">{number}</div>
              </div>
            </div>
          ) : (
            <div className="back" onClick={() => draw()}></div>
          )}
        </div>
      </Card>
    )
  } else {
    return null
  }
}
export default MyHand
