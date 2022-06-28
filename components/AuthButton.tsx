import { signIn } from 'next-auth/react'
import { FaDiscord, FaGoogle } from 'react-icons/fa'

interface Props {
  provider: {
    name: string
    id: string
  }
}

const AuthButton = ({ provider }: Props) => {
  return (
    <button
      onClick={() => signIn(provider.id)}
      className="my-7 flex w-full items-center justify-center rounded-md bg-mu-blue py-3 px-2 text-2xl transition-shadow ease-linear hover:shadow-xl md:text-2xl lg:text-2xl"
    >
      {provider.name === 'Google' ? <FaGoogle /> : <FaDiscord />}
      <span className="ml-5">Log in with {provider.name}</span>
    </button>
  )
}

export default AuthButton
