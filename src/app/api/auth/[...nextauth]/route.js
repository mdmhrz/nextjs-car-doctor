import { loginUser } from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "email", type: "text", placeholder: "Enter Your Email" },
                password: { label: "Password", type: "password", placeholder: "Enter Your Password" }
            },
            async authorize(credentials, req) {
                const user = await loginUser(credentials)
                if (user) {
                    return user
                } else {
                    return null
                }

            }
        })
    ],
    pages: {
        signIn: "/auth/login",
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }