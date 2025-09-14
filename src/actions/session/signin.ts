"use server"
import { IServerResponse } from "@/interface/IServerResponse";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs"

export interface ILoginUserActionAction { email: string, password: string }

export async function signinUserAction({ email, password }: ILoginUserActionAction): Promise<IServerResponse<User>> {

  try {
    const userFound = await prisma.user.findUnique({
      where: { email }
    })

    if (!userFound) {
      return { success: false, status: 401, error: { name: "WrongCredentials" } }
    }

    const isPasswordValid = await bcrypt.compare(password, userFound.password)

    if (!isPasswordValid) {
      return { success: false, status: 401, error: { name: "WrongCredentials" } }
    }

    return { success: true, status: 200, data: userFound }
  } catch (error) {
    return { success: false, status: 500, error: { name: "ServerError" } }
  }
}
