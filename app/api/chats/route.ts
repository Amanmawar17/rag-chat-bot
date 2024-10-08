// pages/api/chats/index.ts
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  switch (req.method) {
    case 'POST':
      // Create a new chat
      if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      try {
        const chat = await prisma.chat.create({
          data: {
            userId: Number(session.user.id), // Use the authenticated user's ID
            message: req.body.message, // Assuming you want to send a message with the chat
            senderType: 'USER', // Assuming the sender is the user
          },
        });
        res.status(201).json(chat);
      } catch (error) {
        console.error('Failed to create chat:', error);
        res.status(500).json({ error: 'Failed to create chat' });
      }
      break;

    case 'GET':
      // Fetch all chats for the authenticated user
      if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      try {
        const chats = await prisma.chat.findMany({
          where: { userId: Number(session.user.id) }, // Fetch chats for the authenticated user
        });
        res.status(200).json(chats);
      } catch (error) {
        console.error('Failed to fetch chats:', error);
        res.status(500).json({ error: 'Failed to fetch chats' });
      }
      break;

    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
