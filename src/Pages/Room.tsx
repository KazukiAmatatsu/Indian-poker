import { VFC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { FireStoreToRecoil } from 'recoil/FireStoreToRecoil'
import { Member } from 'components/display/Member'
import GameStartButton from 'components/button/GameStartButton'

type UserProps = RouteComponentProps<{
  id: string
}>

const Room: VFC<UserProps> = (props) => {
  const roomInfo = useRecoilValue(room)
  const roomId = props.match.params.id
  FireStoreToRecoil(roomId)

  return (
    <>
      <h2>id：{roomInfo.inviteCode}</h2>
      <h2>メンバー</h2>
      <ul>
        <Member />
      </ul>
      <GameStartButton />
    </>
  )
}

export default Room
