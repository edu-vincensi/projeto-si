import Layout from "@/app/layout"

export default function InfraestruturaDetalhe() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-xl shadow">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Infraestrutura Segura
        </h2>
        <p className="text-gray-700 mb-4">
          Planejamento, configuração e monitoramento de ambientes de TI confiáveis,
          escaláveis e protegidos contra ameaças digitais.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Configuração de servidores e redes seguras</li>
          <li>Monitoramento contínuo de performance e segurança</li>
          <li>Backup, redundância e recuperação de desastres</li>
        </ul>
      </div>
    </Layout>
  )
}