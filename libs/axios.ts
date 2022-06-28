import axios from 'axios'

export const createAxiosInstance = (token: string) => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { Authorization: `Bearer ${token}` },
  })
}
