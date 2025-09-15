"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { auth } from "@/auth" // função client-side que retorna sessão ou null

export default function ServicosPage() {
  const router = useRouter()
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    async function loadSession() {
      const s = await auth() 
      setSession(s)
    }
    loadSession()
  }, [])

  function handleVisualizarDetalhes(path: string) {
    if (session) {
      router.push(path)
    } else {
      router.push(`/login?callbackUrl=${path}`)
    }
  }

  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen">
      <section className="max-w-6xl mx-auto my-12 px-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          O que oferecemos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-lg font-bold mb-2">Desenvolvimento de Software</h3>
            <p>
              Criamos aplicações web, sistemas corporativos e soluções digitais
              sob medida para o seu negócio.
            </p>
            <button
              onClick={() => handleVisualizarDetalhes("servicos/desenvolvimento")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Visualizar Detalhes
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-lg font-bold mb-2">Consultoria em Segurança da Informação</h3>
            <p>
              Auditoria, análise de riscos e implementação de políticas de segurança.
            </p>
            <button
              onClick={() => handleVisualizarDetalhes("servicos/seguranca")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Visualizar Detalhes
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-lg font-bold mb-2">Infraestrutura Segura</h3>
            <p>
              Planejamento, configuração e monitoramento de ambientes de TI confiáveis.
            </p>
            <button
              onClick={() => handleVisualizarDetalhes("servicos/infraestrutura")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Visualizar Detalhes
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}