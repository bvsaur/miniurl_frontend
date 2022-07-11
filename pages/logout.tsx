import { signOut } from 'next-auth/react'
import { useEffect } from 'react'

const Logout = () => {
  useEffect(() => {
    signOut()
  }, [])
  return <div className="min-h-screen bg-mu-green">Logout</div>
}

export default Logout
