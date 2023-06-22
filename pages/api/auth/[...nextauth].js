import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "../../../models/Users";
import {compare} from 'bcrypt';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    CredentialsProvider({
      name:"Credentials",
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // You can implement your custom logic here to validate the credentials
        if (credentials.username === 'admin' && credentials.password === 'password') {
          // Return object with the user information
          return Promise.resolve({ id: 1, name: 'Admin' })
        } else {
          // If credentials are invalid, reject with an error message
          return Promise.reject('/login?error=InvalidCredentials')
        }
      },
    }),
    // ...add more providers here
  ],
  
}
export default NextAuth(authOptions)