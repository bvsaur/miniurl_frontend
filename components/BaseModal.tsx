import { useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import { modalContext } from '../context/ModalContext'

interface Props {
  children: JSX.Element | JSX.Element[]
  modalToggler: boolean
  modalType: 'delete' | 'qr' | 'nickname'
}

const BaseModal = ({ children, modalToggler, modalType }: Props) => {
  const { toggleModal } = modalContext()
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleModal(modalType)
    }
    window.addEventListener('keyup', handleEscape)
    return () => window.removeEventListener('keyup', handleEscape)
  }, [modalToggler])

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"></div>
      <button
        className="fixed right-0 top-0 z-20 p-5 outline-none"
        onClick={() => toggleModal(modalType)}
      >
        <MdClose size={30} />
      </button>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default BaseModal
