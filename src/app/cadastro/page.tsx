"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// Funções e esquemas de autenticação
import { submitLoginForm } from "./auth-actions"
import { authFormSchema } from "./login-form-schema"
import { createUserAction } from "@/actions/user/createUserAction"

// Componentes da UI
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ButtonWithLoading from "@/components/button-with-loading"

// Utilitários
import { createToast } from "@/util/create-toast"
import { resolveResponseUtil } from "@/util/resolveResponseUtil"

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
    // ...Sua lógica de submit permanece a mesma...
    setIsLoading(true)
    const respUser = await createUserAction(values)
    if (respUser.success === false) {
      setIsLoading(false)
      const { title, description } = resolveResponseUtil(respUser)
      return createToast.error(title, description)
    }
    const respLogin = await submitLoginForm(values.email, values.password)
    setIsLoading(false)
    if (respLogin.success === false) {
      const { title, description } = resolveResponseUtil(respLogin)
      createToast.error(title, description)
      return router.push('/login')
    }
    router.push('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto my-12 bg-white p-8 rounded-2xl shadow-lg">
      
      {/* 1. TÍTULO COM COR DE ALTO CONTRASTE */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
        Criar Nova Conta
      </h2>

      {/* 2. TEXTO DE APOIO COM COR OTIMIZADA PARA LEITURA */}
      <p className="text-center text-gray-600 mb-6">
        Preencha os campos abaixo para começar.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} method="POST" className="space-y-6">
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* 3. LABEL COM COR ESCURA E LEGÍVEL */}
                <FormLabel className="text-gray-700">E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* 3. LABEL COM COR ESCURA E LEGÍVEL */}
                <FormLabel className="text-gray-700">Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ButtonWithLoading isLoading={isLoading} className="w-full">
            Criar Conta
          </ButtonWithLoading>

        </form>
      </Form>
    </div>
  )
}