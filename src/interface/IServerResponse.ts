import { ServerResponse } from "../types/ServerResponse"

export interface IServerResponse<T> {
  success: boolean
  status: number
  error?: {
    name: ServerResponse
    message?: string
  }
  data?: T
} 