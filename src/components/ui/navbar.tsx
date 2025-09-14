import { auth } from "@/auth"
import Link from "next/link"

export default async function Navbar() {
  const session = await auth()

  return (
    <nav className="bg-blue-800 text-white py-3">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link href="/" className="hover:underline">Sobre Nós</Link>
        <Link href="/servicos" className="hover:underline">Serviços</Link>
        <Link href="/contato" className="hover:underline">Contato</Link>

        {!session ? (
          <>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/cadastro" className="hover:underline">Cadastro</Link>
          </>
        ) : (
          <span className="italic">Olá, {session.user?.email}</span>
        )}
      </div>
    </nav>
  )
}