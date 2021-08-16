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
      setTimeout(async () => {
        setState(false)
        await Draw(userId, roomId)
      }, 1200)
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
          {roomInfo.finished ? (
            <div className="cardFrame">
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
            </div>
          ) : (
            <Transition in={state} timeout={{ enter: 1000, exit: 500 }}>
              {(state) => (
                <Animation
                  state={state}
                  className="cardFrame"
                  onClick={() => draw()}
                >
                  <div className="back">
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
                  </div>
                </Animation>
              )}
            </Transition>
          )}
        </Card>
        {enter || state ? (
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
  transition: 0.2s;
  transform: rotateY(${({ state }) => (state === 'entering' ? -180 : 0)}deg);
  .back {
    transition: opacity 0.3s, transform 0.2s ease-in;
    opacity: ${({ state }) => (state === 'exiting' ? 0 : 1)};
    transform: translateY(${({ state }) => (state === 'exiting' ? -50 : 0)}px);
  }
  .front {
    transform: rotateY(180deg);
    transition: opacity 0.2s;
    opacity: ${({ state }) => (state === 'entering' ? 1 : 0)};
  }
`
