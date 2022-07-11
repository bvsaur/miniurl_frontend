import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from 'next-auth/providers/discord'
import axios from 'axios'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID || '',
      clientSecret: process.env.DISCORD_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (['google', 'discord'].includes(account.provider)) {
        const { name, email } = user
        const { provider } = account
        const nickname = name?.split(' ')[0]
        const { data, status } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth`,
          {
            nickname,
            email,
            provider,
          }
        )
        if (status === 201) {
          account.access_token = data.token
          return true
        }
        return false
      }
      return false
    },
    jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 6,
  },
  session: {
    maxAge: 60 * 60 * 24 * 6,
  },
})
