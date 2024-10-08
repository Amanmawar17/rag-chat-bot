
import { getServerSession } from 'next-auth/next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;
  const { userId } = await req.json(); // Assuming userId and other fields are passed in the body

  try {
    const updatedChat = await prisma.chat.update({
      where: { id: Number(id) },
      data: {
        userId: userId || session.user.id, // Convert string to number if needed
      },
    });
    return NextResponse.json(updatedChat);
  } catch (error) {
    console.error('Failed to update chat:', error);
    return NextResponse.json({ error: 'Failed to update chat' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;

  try {
    await prisma.chat.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({}, { status: 204 }); // No content
  } catch (error) {
    console.error('Failed to delete chat:', error);
    return NextResponse.json({ error: 'Failed to delete chat' }, { status: 500 });
  }
}
