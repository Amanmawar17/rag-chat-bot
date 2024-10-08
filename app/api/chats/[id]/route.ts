import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const { id } = req.query; // Get the chat ID from the request query

  switch (req.method) {
    case 'PUT':
      // Update a chat
      if (!session) return res.status(401).json({ error: 'Unauthorized' });

      const { userId } = req.body; // Assuming userId and other fields are passed in the body

      try {
        const updatedChat = await prisma.chat.update({
          where: { id: Number(id) },
          data: {
            userId: userId || session.user.id,
          },
        });
        res.status(200).json(updatedChat);
      } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to update chat' });
      }
      break;

    case 'DELETE':
      // Delete a chat
      if (!session) return res.status(401).json({ error: 'Unauthorized' });

      try {
        await prisma.chat.delete({
          where: { id: Number(id) },
        });
        res.status(204).end(); // No content
      } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to delete chat' });
      }
      break;

    default:
      res.setHeader('Allow', ['PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
