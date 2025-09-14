"use client"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

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