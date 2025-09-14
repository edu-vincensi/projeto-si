import Layout from "../layout";

export default function Contato() {
  return (
 <section id="contato" className="max-w-4xl mx-auto my-12 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Fale Conosco</h2>
        <p className="mb-6">Entre em contato para saber como podemos ajudar sua empresa:</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Seu Nome"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Seu E-mail"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Sua Mensagem"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </section>
  );
}
