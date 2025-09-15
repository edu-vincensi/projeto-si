"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// Funções e esquemas de autenticação (verifique os caminhos)
import { submitLoginForm } from "../cadastro/auth-actions"
import { authFormSchema } from "../cadastro/login-form-schema"

// Componentes da UI (adicionei os imports que faltavam)
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ButtonWithLoading from "@/components/button-with-loading"

// Utilitários
import { createToast } from "@/util/create-toast"
import { resolveResponseUtil } from "@/util/resolveResponseUtil"

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
    setIsLoading(true)

    const resp = await submitLoginForm(values.email, values.password)

    setIsLoading(false)

    if (resp.success === false) {
      const { title, description } = resolveResponseUtil(resp)
      return createToast.error(title, description)
    }

    router.push('/servicos')
  }

  return (
    // 1. Container principal estilizado como um card
    <div className="max-w-md mx-auto my-12 bg-white p-8 rounded-2xl shadow-lg">
      
      {/* 2. Título e subtítulo com fontes de alto contraste */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
        Bem-vindo de volta!
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Faça login para continuar.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} method="POST" className="space-y-6">
          
          {/* 3. Campo de E-mail com a estrutura completa para legibilidade */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 3. Campo de Senha com a estrutura completa para legibilidade */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ButtonWithLoading isLoading={isLoading} className="w-full">
            Entrar
          </ButtonWithLoading>

        </form>
      </Form>
    </div>
  )
}