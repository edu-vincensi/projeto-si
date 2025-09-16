"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createFormAction } from "@/actions/forms/createFormAction";
import { createToast } from "@/util/create-toast";
import { resolveResponseUtil } from "@/util/resolveResponseUtil";
import { useState } from "react";
import ButtonWithLoading from "@/components/button-with-loading";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  message: z
    .string()
    .min(10, {
      message: "A mensagem deve ter pelo menos 10 caracteres.",
    })
    .max(500, {
      message: "A mensagem não pode ter mais de 500 caracteres.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contato() {

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 3. Defina a função de submissão
  async function onSubmit(values: FormValues) {

    if(isLoading) return;

    handleLoading()

    const formResp = await createFormAction(values)

    setIsLoading(false)
    if (formResp.success === false) {
      const { title, description } = resolveResponseUtil(formResp)
      return createToast.error(title, description)
    }

    const { title, description } = resolveResponseUtil({ title: "Mensagem enviada com sucesso!", description: "Obrigado por entrar em contato." })
    createToast.success(title, description)
    form.reset();

  }

  function handleLoading() {
    setIsLoading(true)
  }
  return (
    <section id="contato" className="max-w-4xl mx-auto my-12 bg-white p-8 rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-lime-600 mb-2">Fale Conosco</h2>
        <p className="text-gray-700">Entre em contato para saber como podemos ajudar sua empresa:</p>
      </div>

      {/* O componente Form da shadcn/ui gerencia todo o estado e contexto */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo Nome */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome completo" {...field} />
                </FormControl>
                <FormMessage /> {/* Exibe mensagens de erro para este campo */}
              </FormItem>
            )}
          />

          {/* Campo E-mail */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="exemplo@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo Mensagem */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sua Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Deixe sua mensagem aqui..."
                    className="resize-none" // Impede o usuário de redimensionar
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <ButtonWithLoading isLoading={isLoading} type="submit" className="!bg-lime-600 hover:!bg-lime-700">
              Enviar Mensagem
            </ButtonWithLoading>
          </div>
        </form>
      </Form>
    </section>
  );
}
