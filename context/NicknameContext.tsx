import { createContext, useContext, useState } from 'react'
import { INicknameContext } from '../interfaces'

const NicknameContext = createContext<INicknameContext>({} as INicknameContext)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const NicknameProvider = ({ children }: Props) => {
  const [nickname, setNickname] = useState('')

  return (
    <NicknameContext.Provider value={{ nickname, setNickname }}>
      {children}
    </NicknameContext.Provider>
  )
}

export const nicknameContext = () => useContext(NicknameContext)
