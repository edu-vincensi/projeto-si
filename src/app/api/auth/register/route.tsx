import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e senha obrigatórios" },
        { status: 400 }
      )
    }

    // Verifica se já existe
    const userExists = await prisma.user.findUnique({ where: { email } })
    if (userExists) {
      return NextResponse.json(
        { error: "Usuário já existe" },
        { status: 400 }
      )
    }

    // Cria usuário
    const hashedPassword = await hash(password, 10)

    await prisma.user.create({
      data: { email, password: hashedPassword },
    })

    return NextResponse.json({ message: "Usuário cadastrado" }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}