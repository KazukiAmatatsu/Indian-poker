import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { Draw } from 'components/Draw'
import { Enter } from 'components/Enter'
import { Button, Card } from 'components/stylesParts'
import { useState } from 'react'
import { Transition, TransitionStatus } from 'react-transition-group'
import styled from 'styled-components'

const MyHand = () => {
  const userInfo = useRecoilValue(user)
  const userId = userInfo.id
  const roomInfo = useRecoilValue(room)
  const roomId = roomInfo.roomId
  const enter = roomInfo.member?.[userId].enter
  const [state, setState] = useState(false)

  const draw = () => {
    if (!enter) {
      setState(true)
      Draw(userId, roomId)
      setTimeout(() => {
        setState(false)
      }, 500)
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
      <div className="mt-16">
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
              <Transition in={state} timeout={500}>
                {(state) => (
                  <Animation
                    state={state}
                    className="back"
                    onClick={() => draw()}
                  ></Animation>
                )}
              </Transition>
            )}
          </div>
        </Card>
        {enter ? (
          <></>
        ) : (
          <div>
            <Button onClick={() => draw()} className="mr-8">
              ドロー
            </Button>
            <Button
              onClick={() => {
                Enter(userId, roomId)
              }}
            >
              決定
            </Button>
          </div>
        )}
      </div>
    )
  } else {
    return null
  }
}
export default MyHand

const Animation = styled.div<{ state: TransitionStatus }>`
  transition: all 0.5s ease;
  transform: rotateY(${({ state }) => (state === 'entering' ? -180 : 0)}deg);
  opacity: ${({ state }) => (state === 'entering' ? 0 : 1)};
`
