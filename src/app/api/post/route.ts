import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const post = await prisma.post.findMany()

  return NextResponse.json(post)
}
