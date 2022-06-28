import { createContext, useContext, useState } from 'react'
import { IMini, IModalContext } from '../interfaces'

const ModalContext = createContext<IModalContext>({} as IModalContext)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ModalProvider = ({ children }: Props) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [nicknameModal, setNicknameModal] = useState(false)
  const [qrModal, setQrModal] = useState(false)
  const [selectedMini, setSelectedMini] = useState<IMini>()

  const toggleModal = (type: 'delete' | 'nickname' | 'qr', mini?: IMini) => {
    switch (type) {
      case 'delete':
        setDeleteModal((prev) => !prev)
        setSelectedMini(mini)
        break
      case 'qr':
        setQrModal((prev) => !prev)
        setSelectedMini(mini)
        break
      case 'nickname':
        setNicknameModal((prev) => !prev)
        break
    }
  }

  return (
    <ModalContext.Provider
      value={{ deleteModal, nicknameModal, qrModal, selectedMini, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const modalContext = () => useContext(ModalContext)
