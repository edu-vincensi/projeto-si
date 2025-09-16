import Image from "next/image";
import { Button } from "@/components/ui/button"
import Layout from "./layout";


export default function Home() {
  return (


     <div className="bg-gray-100 text-gray-800 font-sans mb-10"> 

     <div className="mt-20 p-10">
      <section id="sobre" className="max-w-4xl mx-auto my-12 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-lime-600 mb-4">Sobre Nós</h2>
        <p className="leading-relaxed text-gray-700">
          Somos uma empresa especializada em desenvolvimento de software e consultoria em{" "}
          <span className="font-semibold">Segurança da Informação (SI)</span>. Nosso objetivo é entregar
          soluções seguras, eficientes e inovadoras que ajudem negócios a crescerem com confiança.
          Combinamos tecnologia de ponta, boas práticas de segurança e foco no cliente para transformar
          desafios em resultados.
        </p>
      </section>
     </div>

    </div>
    
  );
}
