import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { signinUserAction } from "./actions/session/signin"
import { ServerResponse } from "./types/ServerResponse"

class InvalidLoginError extends CredentialsSignin {
  name: ServerResponse
  constructor(responseError: { name: ServerResponse }) {
    super()
    this.name = responseError.name
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const respUser = await signinUserAction({ email: credentials?.email as string, password: credentials?.password as string })

        if (respUser.error) {
          throw new InvalidLoginError(respUser.error)
        }

        return respUser.data!
      },
    }),
  ],
})