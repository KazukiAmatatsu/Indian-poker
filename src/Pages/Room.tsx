import { VFC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
// import { db } from '../config/firebase'

type UserProps = RouteComponentProps<{
  id: string
}>

const Room: VFC<UserProps> = (props) => {
  const id = props.match.params.id
  console.log(id)
  // const inviteCode =()=> {
  //   db.collection('room').doc()
  // }

  return <h2>id：{id}</h2>
}

export default Room
