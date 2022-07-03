import { IMini } from '../interfaces'
import { MdOutlineContentCopy, MdDeleteOutline } from 'react-icons/md'
import QRCode from 'react-qr-code'
import { format } from 'timeago.js'
import { copyToClipboard, getUrl } from '../helpers'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { modalContext } from '../context/ModalContext'

interface Props {
  mini: IMini
}

const Mini = ({ mini }: Props) => {
  const url = getUrl(mini.mini)
  const { toggleModal } = modalContext()

  const handleCopy = () => {
    copyToClipboard(url)
    toast.success('Copied to clipboard')
  }

  return (
    <div className="my-4 flex items-center justify-between rounded-md border border-white px-3 py-2 lg:px-5">
      <div className="flex items-center space-x-3 md:space-x-5 lg:space-x-7">
        <button
          className="rounded-md bg-white p-1 outline-none "
          onClick={() => toggleModal('qr', mini)}
        >
          <QRCode value={url} size={40} />
        </button>
        <div>
          <div className="flex flex-1 items-center justify-between">
            <Link href={url}>
              <a
                className="mr-3 font-kanit font-bold outline-none md:mr-5 lg:mr-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                {url}
              </a>
            </Link>
          </div>
          <div className="flex space-x-5">
            <p className="text-sm">Created {format(mini.CreatedAt)}</p>
            <button onClick={handleCopy} className="outline-none">
              <MdOutlineContentCopy size={15} />
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => toggleModal('delete', mini)}
        className="outline-none"
      >
        <MdDeleteOutline size={20} />
      </button>
    </div>
  )
}

export default Mini
