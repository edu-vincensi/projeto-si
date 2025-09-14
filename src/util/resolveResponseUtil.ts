import { IServerResponse } from "@/interface/IServerResponse"
import { ServerResponse } from "@/types/ServerResponse"
import { AxiosError } from "axios"

interface IMessages {
  title: string,
  description?: string
}

const arrayMessages = {
  Success: {
    title: "Sucesso!"
  },
  AxiosError: {
    title: "Ocorreu um erro no servidor!",
    description: "Verifique sua conexão."
  },
  ServerError: {
    title: "Ocorreu um erro inesperado!",
    description: "Tente novamente em outro momento."
  },
  WrongCredentials: {
    title: "Email ou senha estão incorretos!",
  },
  Unauthorized: {
    title: "Permissão negada!",
    description: "Você não tem permissão para essa ação."
  },
  Forbidden: {
    title: "Você não tem permissão para essa ação!"
  },
  BadRequest: {
    title: "Requisição inválida!",
    description: "Verifique os dados enviados."
  },
  ExistingEmail: {
    title: "Esse email já está sendo usado!",
  },
  UserNotFound: {
    title: "O usuário não foi encontrado!"
  },
  ExistingName: {
    title: "Esse nome já está sendo usado!",
  },
} satisfies Record<ServerResponse, IMessages> as Record<ServerResponse, IMessages>

export function resolveResponseUtil(response: IServerResponse<unknown> | AxiosError<any, any> | IMessages) {

  const messageResponse = response as IMessages

  if (messageResponse?.title) {
    const { title, description } = messageResponse
    return { title, description } as { title: string, description: string }
  }

  const axiosError = response as AxiosError<any, any>

  if (axiosError.response)
    return arrayMessages[axiosError.name as ServerResponse]

  const serverResponse = response as IServerResponse<unknown>

  return arrayMessages[serverResponse.error?.name as ServerResponse] as { title: string, description?: string }

}