
import { getServerSession } from 'next-auth/next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { message, chatId, title } = await req.json(); // Extract message, chatId, and title from request body

  try {
    let chat;

    // Check if chatId is provided and chat exists
    if (chatId) {
      chat = await prisma.chat.findUnique({
        where: { id: Number(chatId) },
      });

      if (!chat) {
        return NextResponse.json({ error: 'Chat not found' }, { status: 404 });
      }
    } else {
      // Create a new chat if chatId is not provided
      chat = await prisma.chat.create({
        data: {
          userId: Number(session.user.id), // Use the authenticated user's ID
          title: title || 'New Chat', // Use provided title or default to 'New Chat'
        },
      });
    }

    // Create a response with the user's message
    await prisma.response.create({
      data: {
        chatId: chat.id, // Link the response to the existing or newly created chat
        message, // Use the message received from the body
        senderType: 'USER', // Assuming the sender is the user
      },
    });

    // Return the updated chat with responses
    const updatedChat = await prisma.chat.findUnique({
      where: { id: chat.id },
      include: { responses: true }, // Include the responses in the result
    });

    return NextResponse.json(updatedChat, { status: 201 });
  } catch (error) {
    console.error('Failed to create chat or response:', error);
    return NextResponse.json({ error: 'Failed to create chat or response' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const chats = await prisma.chat.findMany({
      where: { userId: Number(session.user.id) }, // Fetch chats for the authenticated user
      include: { responses: true }, // Include the responses in the result
    });
    return NextResponse.json(chats, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch chats:', error);
    return NextResponse.json({ error: 'Failed to fetch chats' }, { status: 500 });
  }
}
