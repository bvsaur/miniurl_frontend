import { createAxiosInstance } from '../../libs'

interface ServerSideProps {
  query: {
    mini: string
  }
}

const RedirectPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-mu-green">
      <div className="animate-pulse text-white">
        <h1 className="text-4xl font-bold">Redirecting...</h1>
        <span className="float-right font-kanit font-bold">MiniURL</span>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ query }: ServerSideProps) => {
  const axiosInstance = createAxiosInstance('')
  try {
    const { data } = await axiosInstance.get(`/minis/${query.mini}`)

    return {
      redirect: {
        destination: data.mini.url,
        permanent: false,
      },
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
}

export default RedirectPage
