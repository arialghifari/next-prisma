import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const posts = await prisma.post.findMany()

  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const { title, content } = await req.json()

  const posts = await prisma.post.create({
    data: { title, content },
  })

  return NextResponse.json(posts)
}
