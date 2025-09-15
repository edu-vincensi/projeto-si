import { auth } from "@/auth"
import Link from "next/link"
import { LogoutButton } from "./logoutButton"

export default async function Navbar() {
  const session = await auth()
  console.log("🚀 ~ Navbar ~ session:", session)

  return (
    <nav className="bg-blue-800 text-white py-3">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex space-x-8">
          <Link href="/" className="hover:underline">Sobre Nós</Link>
          {session &&
            <Link href="/servicos" className="hover:underline">Serviços</Link>
          }
          <Link href="/contato" className="hover:underline">Contato</Link>
        </div>


        <div className="flex items-center space-x-4">
          {!session ? (
            <>
              <Link href="/login" className="hover:underline">Login</Link>
              <Link href="/cadastro" className="hover:underline">Cadastro</Link>
            </>
          ) : (
            <>
              <span className="italic text-green-300">
                Olá, {session.user?.email}
              </span>
              <LogoutButton />
            </>
          )}
        </div>

      </div>
    </nav>
  )
}
