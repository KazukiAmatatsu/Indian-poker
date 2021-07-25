import { VFC } from 'react'
import { db } from '../config/firebase'
import { RouteComponentProps } from 'react-router-dom'
import { room } from '../recoil/atom'
import { useRecoilValue } from 'recoil'
import { Member } from '../components/Member'
import { FireStoreToRecoil } from '../recoil/FireStoreToRecoil'

type UserProps = RouteComponentProps<{
  id: string
}>

const Room: VFC<UserProps> = (props) => {
  const roomInfo = useRecoilValue(room)
  const roomId = props.match.params.id
  FireStoreToRecoil(roomId)

  const gameStart = () => {
    db.collection('room').doc(roomId).update({
      isGaming: true
    })
  }

  return (
    <>
      <h2>id：{roomInfo.inviteCode}</h2>
      <h2>メンバー</h2>
      <ul>
        <Member />
      </ul>
      <button onClick={gameStart}>ゲームスタート</button>
    </>
  )
}

export default Room
