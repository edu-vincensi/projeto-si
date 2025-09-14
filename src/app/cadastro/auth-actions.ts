"use server"
import { signIn } from "@/auth"
import { IServerResponse } from "@/interface/IServerResponse"

export async function submitLoginForm(email: string, password: string) {

  try {
    return await signIn("credentials", {
      email,
      password,
      redirect: false
    })
  } catch (err: any) {
    return {
      success: false,
      status: err.numberCode || 500,
      error: {
        name: err.name || "AxiosError",
      }
    } satisfies IServerResponse<unknown>
  }

}
