"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import z from "zod"
import { submitLoginForm } from "./auth-actions"
import EmailInput from "./inputs/email-input"
import PasswordInput from "./inputs/password-input"
import { authFormSchema } from "./login-form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import ButtonWithLoading from "@/components/button-with-loading"
import { createToast } from "@/util/create-toast"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { resolveResponseUtil } from "@/util/resolveResponseUtil"
import { createUserAction } from "@/actions/user/createUserAction"

export default function CadastroPage() {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof authFormSchema>) {

    handleLoading()

    const respUser = await createUserAction(values)

    if (respUser.success === false) {
      setIsLoading(false)
      const { title, description } = resolveResponseUtil(respUser)
      return createToast.error(title, description)
    }

    const resp = await submitLoginForm(values.email, values.password)

    setIsLoading(false)

    if (resp.success === false) {
      const { title, description } = resolveResponseUtil(resp)
      return createToast.error(title, description)
    }

    router.push('/dashboard')

  }

  function handleLoading() {
    setIsLoading(true)
  }
  return (
    <div className="max-w-sm mx-auto mt-10 flex flex-col gap-4">
      <p className="text-xl">Criar Conta</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} method="POST" className="flex flex-col gap-4">

          <div className="flex flex-col gap-2">
            <EmailInput form={form} />

            <PasswordInput form={form} />
          </div>

          <ButtonWithLoading isLoading={isLoading}>
            Entrar
          </ButtonWithLoading>

        </form>
      </Form>
    </div>
  )
}