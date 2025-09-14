import { z } from "zod"

export const authFormSchema = z.object({
  email: z.string().email("O email deve ser válido!"),
  password: z.string().min(1, "A senha é obrigatória!"),
})