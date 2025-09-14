
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/ui/navbar"
import Header from "@/components/ui/header"
import Providers from "./providers"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
