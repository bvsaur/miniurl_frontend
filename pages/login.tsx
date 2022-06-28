import { BuiltInProviderType } from 'next-auth/providers'
import {
  ClientSafeProvider,
  getProviders,
  getSession,
  GetSessionParams,
  LiteralUnion,
} from 'next-auth/react'
import Head from 'next/head'
import AuthButton from '../components/AuthButton'
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai'

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >
}

const Login = ({ providers }: Props) => {
  return (
    <>
      <Head>
        <title>MiniURL | Login</title>
      </Head>
      <div className="flex h-screen items-center bg-mu-green text-white">
        <div className="mx-auto rounded-xl p-5 md:w-1/2 md:bg-white/30 md:p-10 lg:w-1/3 ">
          <h2 className="mb-2 font-kanit text-5xl font-bold md:mb-4">
            Welcome!
          </h2>
          <p className="text-3xl">Register to use the best URL Minifier App</p>

          <div className="myunderline font-bold-10">
            {Object.values(providers).map((provider) => (
              <AuthButton provider={provider} key={provider.id} />
            ))}
          </div>

          <div className="flex items-center justify-center space-x-5">
            <p className="text-center font-kanit text-xl font-thin xl:text-2xl">
              &copy; MiniURL by @bvsaur:
            </p>
            <a
              href="https://gitlab.com/bvsaur"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal underline"
            >
              <AiFillGitlab size={30} />
            </a>
            <a
              href="https://github.com/bvsaur"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal underline"
            >
              <AiFillGithub size={30} />
            </a>
          </div>
        </div>
        <h1 className="absolute bottom-0 right-0 select-none p-7 font-kanit text-4xl font-bold">
          MiniURL
        </h1>
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default Login
