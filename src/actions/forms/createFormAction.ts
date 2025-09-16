"use server"
import { IServerResponse } from "@/interface/IServerResponse";
import { prisma } from "@/lib/prisma";
import { Form } from "@prisma/client";

export interface ICreateFormAction { name: string, email: string, message: string }

export async function createFormAction({ name, email, message }: ICreateFormAction): Promise<IServerResponse<Form>> {

  try {

    const form = await prisma.form.create({
      data: {
        name,
        email,
        message
      },
    });

    return { success: true, status: 200, data: form }
  } catch (error) {
    console.log("🚀 ~ createFormAction ~ error:", error)
    return { success: false, status: 500, error: { name: "ServerError" } }
  }
}