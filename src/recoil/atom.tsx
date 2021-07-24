import { atom } from 'recoil'

export type User = {
  id: string
  name: string
  hand: string
}
export const user = atom<User>({
  key: 'user_state',
  default: {
    id: '',
    name: '',
    hand: ''
  }
})

export type Member = {
  [id: string]: {
    name: string
    isHost: boolean
    isReady: boolean
    hand: string
  }
}

export type Room = {
  readonly roomId: string
  readonly inviteCode: string
  // member: Member | null
  // isGaming: boolean
}

export const room = atom<Room>({
  key: 'room_state',
  default: {
    roomId: '',
    inviteCode: ''
    // member: {},
    // isGaming: false
  }
})
