import QRCode from 'react-qr-code'
import { modalContext } from '../context/ModalContext'
import { getUrl } from '../helpers'
import BaseModal from './BaseModal'

const QrModal = () => {
  const { qrModal, selectedMini } = modalContext()
  return (
    <BaseModal modalType="qr" modalToggler={qrModal}>
      <div className="rounded-lg bg-white p-5">
        <QRCode value={getUrl(selectedMini!.mini)} />
      </div>
    </BaseModal>
  )
}

export default QrModal
