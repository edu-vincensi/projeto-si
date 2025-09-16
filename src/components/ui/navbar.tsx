"use client"

import { auth } from "@/auth"
import Link from "next/link"
import { LogoutButton } from "./logoutButton"
import Image from "next/image"

export default async function Header() {
  const session = await auth()

  return (
    <header className="w-full bg-lime-600 text-white shadow-md flex flex-col items-center">
      
      <div className="py-4">
        <Image
          src="/download (6).png"
          alt="Logo"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      <div className="container mx-auto flex justify-between items-center py-4 px-6 w-full">

        <nav className="flex space-x-8 text-lg">
          <Link href="/" className="hover:underline">Sobre Nós</Link>
          {session && (
            <Link href="/servicos" className="hover:underline">Serviços</Link>
          )}
          <Link href="/contato" className="hover:underline">Contato</Link>
        </nav>

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
    </header>
  )
}