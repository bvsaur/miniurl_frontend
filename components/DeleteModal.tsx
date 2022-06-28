import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { minisContext } from '../context/MinisContext'
import { modalContext } from '../context/ModalContext'
import { getUrl } from '../helpers'
import { createAxiosInstance } from '../libs'
import BaseModal from './BaseModal'

const DeleteModal = () => {
  const { deleteModal, selectedMini, toggleModal } = modalContext()
  const { deleteMini } = minisContext()

  const { data } = useSession()

  const onClick = async () => {
    try {
      const axiosInstance = createAxiosInstance(data!.accessToken as string)
      await axiosInstance.delete(`/minis/${selectedMini?.ID}`)
      deleteMini(selectedMini!.ID)
      toast.success('Mini deleted!')
      toggleModal('delete')
    } catch (error: any) {
      toast.error(error.response.data.message)
      toggleModal('delete')
    }
  }

  return (
    <BaseModal modalType="delete" modalToggler={deleteModal}>
      <div className="rounded-lg bg-white p-5">
        <p className="text-lg text-black">
          Please confirm the deletion of this{' '}
          <span className="font-kanit font-bold">mini</span>:
          <span className="block font-kanit font-bold tracking-wide">
            {getUrl(selectedMini!.mini)}
          </span>
        </p>
        <button
          className="mt-5 w-full rounded-md bg-red-500 py-2 font-kanit font-bold outline-none"
          onClick={onClick}
        >
          Confirm
        </button>
      </div>
    </BaseModal>
  )
}

export default DeleteModal
