import { useEffect } from 'react'
import { db } from '../config/firebase'
import { room, Room } from './atom'
import { useSetRecoilState } from 'recoil'

export const FireStoreToRecoil = (roomId: string) => {
  const setRoomInfo = useSetRecoilState(room)
  useEffect(() => {
    db.collection('room')
      .doc(roomId)
      .onSnapshot((doc) => {
        const roomDoc = doc.data() as Room
        setRoomInfo(roomDoc)
      })
    console.log('FireStoreToRecoil!!')
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}
