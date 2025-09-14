"use server"
import { IServerResponse } from "@/interface/IServerResponse";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs"
import { User } from "next-auth";

export interface ICreateUserAction { name?: string, email: string, password: string }

export async function createUserAction({ name, email, password }: ICreateUserAction): Promise<IServerResponse<User>> {

  try {

    const userFound = await prisma.user.findUnique({
      where: {
        email
      },
    });

    if (userFound)
      return { success: false, status: 409, error: { name: "ExistingEmail" } }

    const salt = await bcrypt.genSalt(12)
    const passwordHashed = await bcrypt.hash(password as string, salt)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHashed
      },
    });

    return { success: true, status: 200, data: user }
  } catch (error) {
    console.log("🚀 ~ createUserAction ~ error:", error)
    return { success: false, status: 500, error: { name: "ServerError" } }
  }
}