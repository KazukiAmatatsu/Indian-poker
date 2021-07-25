import { atom } from 'recoil'

export type User = {
  id: string
  name: string
}

export const user = atom<User>({
  key: 'user_state',
  default: {
    id: '',
    name: ''
  }
})

export type Member = {
  [id: string]: {
    name: string
    isHost: boolean
    isReady: boolean
    hand: string
    enter: boolean
  }
}

export type Room = {
  readonly roomId: string
  readonly inviteCode: string
  member: Member | undefined
  isGaming: boolean
}

export const room = atom<Room>({
  key: 'room_state',
  default: {
    roomId: '',
    inviteCode: '',
    member: {},
    isGaming: false
  }
})
