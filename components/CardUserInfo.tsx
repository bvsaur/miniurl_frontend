import { minisContext } from '../context/MinisContext'
import ProgressBar from './ProgressBar'
import { MdOutlineEdit } from 'react-icons/md'
import { modalContext } from '../context/ModalContext'

interface Props {
  nickname: string
}

const CardUserInfo = ({ nickname }: Props) => {
  const { minis } = minisContext()
  const { toggleModal } = modalContext()
  return (
    <div className="mb-5 rounded-xl bg-white bg-opacity-30 py-5 px-4">
      <div className="flex items-center space-x-5">
        <p className="text-xl font-bold md:text-2xl">Welcome, {nickname}!</p>
        <button
          className="outline-none"
          onClick={() => toggleModal('nickname')}
        >
          <MdOutlineEdit size={20} />
        </button>
      </div>
      <p className="text-lg">
        You've used <b>{minis.length}</b> of your <b>10</b> free minis.
      </p>
      <ProgressBar count={minis.length} />
    </div>
  )
}

export default CardUserInfo
