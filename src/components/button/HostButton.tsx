import { db } from 'config/firebase'
import { user, room } from 'recoil/atom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { customAlphabet } from 'nanoid'
import { numbers } from 'nanoid-dictionary'
import { useHistory } from 'react-router-dom'
import { SetTrump } from 'components/SetTrump'
import Button from 'components/stylesParts/Button'

const HostButton = () => {
  const userInfo = useRecoilValue(user)
  const [roomInfo, setRoomInfo] = useRecoilState(room)
  const code = customAlphabet(numbers, 6)
  const history = useHistory()

  const createRoom = async () => {
    const roomId = db.collection('room').doc().id
    const inviteCode = code()
    const trump = SetTrump()
    await db
      .collection('room')
      .doc(roomId)
      .set({
        roomId,
        inviteCode: inviteCode,
        member: {
          [userInfo.id]: {
            name: userInfo.name,
            mark: '',
            number: '',
            isHost: true,
            isReady: true,
            enter: false
          }
        },
        trump,
        isGaming: false,
        finished: false,
        loading: false
      })
    setRoomInfo({
      ...roomInfo,
      roomId: roomId,
      inviteCode: inviteCode,
      loading: false
    })
    history.push(`/Room/${roomId}`)
  }

  return (
    <>
      <Button onClick={createRoom}>部屋をつくる</Button>
    </>
  )
}

export default HostButton
