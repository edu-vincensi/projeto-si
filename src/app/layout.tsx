
import "./globals.css"
import Navbar from "@/components/ui/navbar"
import Header from "@/components/ui/header"
import { Toaster } from "sonner"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <Navbar/>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
