"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function LogoutButton() {

  const router = useRouter()

  async function handleLogout() {
    await signOut({ callbackUrl: "/login" })
    router.refresh()
  }
  return (
    <Button className="className= bg-red-600 hover:bg-red-700 text-white"
      variant="outline"
      onClick={handleLogout}
    >
      Sair
    </Button>
  )
}