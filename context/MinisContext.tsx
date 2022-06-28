import { createContext, useContext, useState } from 'react'
import { IMini, IMinisContext } from '../interfaces'

const MinisContext = createContext<IMinisContext>({} as IMinisContext)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const MinisProvider = ({ children }: Props) => {
  const [minis, setMinis] = useState<IMini[]>([])

  const loadMinis = (userMinis: IMini[]) => {
    setMinis(userMinis)
  }

  const addMini = (newMini: IMini) => {
    setMinis((prev) => [newMini, ...prev])
  }

  const deleteMini = (miniId: number) => {
    setMinis(minis.filter(({ ID }) => ID !== miniId))
  }

  return (
    <MinisContext.Provider value={{ minis, loadMinis, addMini, deleteMini }}>
      {children}
    </MinisContext.Provider>
  )
}

export const minisContext = () => useContext(MinisContext)
