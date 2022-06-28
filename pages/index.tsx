import { getSession, GetSessionParams } from 'next-auth/react'
import Head from 'next/head'
import { useEffect } from 'react'
import CardMiniForm from '../components/CardMiniForm'
import CardMiniList from '../components/CardMiniList'
import CardUserInfo from '../components/CardUserInfo'
import DeleteModal from '../components/DeleteModal'
import Navbar from '../components/Navbar'
import NicknameModal from '../components/NicknameModal'
import QrModal from '../components/QrModal'
import { minisContext } from '../context/MinisContext'
import { modalContext } from '../context/ModalContext'
import { nicknameContext } from '../context/NicknameContext'
import { IMini } from '../interfaces'
import { createAxiosInstance } from '../libs'

interface Props {
  userNickname: string
  userMinis: IMini[]
}

const App = ({ userNickname, userMinis }: Props) => {
  const { loadMinis } = minisContext()
  const { deleteModal, nicknameModal, qrModal } = modalContext()
  const { nickname, setNickname } = nicknameContext()

  useEffect(() => {
    loadMinis(userMinis)
    setNickname(userNickname)
  }, [])

  return (
    <>
      <Head>
        <title>MiniURL | App</title>
      </Head>
      <div className="min-h-screen bg-mu-green text-white">
        <Navbar />
        {deleteModal && <DeleteModal />}
        {nicknameModal && <NicknameModal nickname={nickname} />}
        {qrModal && <QrModal />}
        <div className="justify-between py-5 px-3 md:flex md:space-x-10 md:py-10 md:px-5 lg:space-x-20 lg:px-36">
          <div className="lg:flex-1">
            <CardUserInfo nickname={nickname} />
            <CardMiniForm />
          </div>
          <CardMiniList />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permament: false,
      },
    }
  }

  const axiosInstance = createAxiosInstance(session.accessToken as string)
  const [userData, userMinis] = await Promise.all([
    axiosInstance.get('/users/me'),
    axiosInstance.get('minis'),
  ])

  return {
    props: {
      userNickname: userData.data.nickname,
      userMinis: userMinis.data.minis || [],
    },
  }
}

export default App
