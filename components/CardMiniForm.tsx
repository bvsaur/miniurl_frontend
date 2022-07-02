import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { minisContext } from '../context/MinisContext'
import { useField } from '../hooks/useField'
import { createAxiosInstance } from '../libs'
import Button from './Button'

const CardMiniForm = () => {
  const { value, onChange, reset, isValid } = useField('', 'url')
  const { data } = useSession()
  const { addMini } = minisContext()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const axiosInstance = createAxiosInstance(data!.accessToken as string)
    try {
      const response = await axiosInstance.post('/minis', { url: value })
      addMini(response.data.mini)
      toast.success('Mini created!')
      reset()
    } catch (error: any) {
      toast.error(error.response.data.message)
      reset()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-xl bg-white bg-opacity-30 py-5 px-4">
      <p className="text-xl font-bold md:text-2xl">Create new mini</p>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="mini-input" className="mb-1 block">
            URL to minify
          </label>
          <input
            value={value}
            onChange={onChange}
            type="text"
            className="w-full rounded-md bg-white px-3 py-3 text-black caret-mu-green outline-none"
            placeholder="https://"
            id="mini-input"
            autoComplete="off"
          />
        </div>
        <Button
          label="mini"
          disabledLabel="Type a valid URL"
          isValid={isValid}
          loading={loading}
        />
      </form>
    </div>
  )
}

export default CardMiniForm
