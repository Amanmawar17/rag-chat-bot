
import { getServerSession } from 'next-auth/next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PATCH(req: Request, { params }: { params: { chatId: string } }) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { title } = await req.json();

  try {
    const chat = await prisma.chat.update({
      where: { id: Number(params.chatId) },
      data: { title },
    });

    return NextResponse.json(chat, { status: 200 });
  } catch (error) {
    console.error('Failed to update chat title:', error);
    return NextResponse.json({ error: 'Failed to update chat title' }, { status: 500 });
  }
}
