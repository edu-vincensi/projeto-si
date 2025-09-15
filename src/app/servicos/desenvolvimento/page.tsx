import Layout from "@/app/layout"

export default function DesenvolvimentoDetalhe() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-xl shadow">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Desenvolvimento de Software
        </h2>
        <p className="text-gray-700 mb-4">
          Criamos aplicações web, sistemas corporativos e soluções digitais sob medida
          para o seu negócio. Garantimos escalabilidade, performance e manutenção facilitada.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Desenvolvimento web e mobile</li>
          <li>Integração com APIs e sistemas existentes</li>
          <li>Arquitetura escalável e segura</li>
        </ul>
      </div>
    </Layout>
  )
}