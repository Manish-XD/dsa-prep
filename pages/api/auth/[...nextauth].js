import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials"
import Users from "../../../models/Users"
import {compare} from 'bcrypt'
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
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name:"Credentials",
      async authorize(credentials,req){
        connectMongo.catch(error=>{error:"Connection Failed...."})
        const result=await Users.findOne({email:credentials.email})
        if(!result)
        {
          throw new Error("No user found")
        }
        const checkPassword= await compare(credentials.password,result.password);
        if(!checkPassword|| result.email!==credentials.email)
        {
          throw new Error("Username or Password doesn't match")
        }
        return result
      }

    }),
    // ...add more providers here
  ],
  
}
export default NextAuth(authOptions)