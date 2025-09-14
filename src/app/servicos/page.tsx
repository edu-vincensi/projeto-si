import Layout from "../layout";

export default function Servicos() {
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
              sob medida para o seu negócio, com foco em escalabilidade e
              performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-lg font-bold mb-2">Consultoria em Segurança da Informação</h3>
            <p>
              Serviços de auditoria, análise de riscos, conformidade com normas
              (LGPD, ISO 27001) e implementação de políticas de segurança.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-lg font-bold mb-2">Infraestrutura Segura</h3>
            <p>
              Planejamento, configuração e monitoramento de ambientes de TI
              confiáveis, escaláveis e protegidos contra ameaças digitais.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}