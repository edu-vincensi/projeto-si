"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ButtonWithLoading from "@/components/button-with-loading"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import EmailInput from "../cadastro/inputs/email-input"
import PasswordInput from "../cadastro/inputs/password-input"
import { authFormSchema } from "../cadastro/login-form-schema"
import { createToast } from "@/util/create-toast"
import { resolveResponseUtil } from "@/util/resolveResponseUtil"
import { submitLoginForm } from "../cadastro/auth-actions"
import { Form } from "@/components/ui/form"

export default function LoginPage() {

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
      <p className="text-xl">Fazer Login</p>
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