import type {NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import NextAuth from "next-auth/next"


 const handler: NextAuthOptions = NextAuth({
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string, //passing in your github client_id as the value
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string //passing in your github_client_secret as the value
        }),
    ],
    callbacks: {
            async session({session}) {
               console.log(session)
               return session  
            },
        }
    
})

export {handler as GET, handler as POST}