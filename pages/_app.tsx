import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { MinisProvider } from '../context/MinisContext'
import { Toaster } from 'react-hot-toast'
import { ModalProvider } from '../context/ModalContext'
import { NicknameProvider } from '../context/NicknameContext'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <MinisProvider>
        <ModalProvider>
          <NicknameProvider>
            <Toaster />
            <Component {...pageProps} />
          </NicknameProvider>
        </ModalProvider>
      </MinisProvider>
    </SessionProvider>
  )
}

export default MyApp
