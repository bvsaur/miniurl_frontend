import { Dispatch, SetStateAction } from 'react'

export interface IMini {
  ID: number
  mini: string
  CreatedAt: string
}

export interface IMinisContext {
  minis: IMini[]
  loadMinis: (userMinis: IMini[]) => void
  addMini: (newMini: IMini) => void
  deleteMini: (miniId: number) => void
}

export interface IModalContext {
  deleteModal: boolean
  nicknameModal: boolean
  qrModal: boolean
  selectedMini?: IMini
  toggleModal: (type: 'delete' | 'nickname' | 'qr', mini?: IMini) => void
}

export interface INicknameContext {
  nickname: string
  setNickname: Dispatch<SetStateAction<string>>
}
