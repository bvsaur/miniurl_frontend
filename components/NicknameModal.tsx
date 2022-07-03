import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { modalContext } from '../context/ModalContext'
import { nicknameContext } from '../context/NicknameContext'
import { useField } from '../hooks/useField'
import { createAxiosInstance } from '../libs'
import BaseModal from './BaseModal'
import Button from './Button'

interface Props {
  nickname: string
}

const NicknameModal = ({ nickname }: Props) => {
  const { nicknameModal, toggleModal } = modalContext()
  const { setNickname } = nicknameContext()
  const { value, onChange, isValid } = useField(nickname, 'empty')
  const { data } = useSession()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const axiosInstance = createAxiosInstance(data!.accessToken as string)
      await axiosInstance.put('/users', { nickname: value })
      toast.success('Nickname updated!')
      setNickname(value)
      toggleModal('nickname')
    } catch (error: any) {
      toast.error(error.response.data.message)
      toggleModal('delete')
    } finally {
      setLoading(false)
    }
  }

  return (
    <BaseModal modalType="nickname" modalToggler={nicknameModal}>
      <div className="w-11/12 rounded-lg bg-white p-5 md:w-1/2 lg:w-1/4">
        <p className="mb-3 text-lg text-black">Update your nickname:</p>
        <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            className="w-full rounded-md border border-black bg-white px-3 py-3 text-black caret-mu-green outline-none"
            placeholder="Type a cool nickname"
            id="mini-input"
            autoComplete="off"
          />
          <div className="mt-3">
            <Button
              label="Update"
              disabledLabel="Update"
              isValid={isValid}
              loading={loading}
            ></Button>
          </div>
        </form>
      </div>
    </BaseModal>
  )
}

export default NicknameModal
