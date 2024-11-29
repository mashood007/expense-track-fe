import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET': {
      // Get a single store
      const store = await prisma.store.findUnique({
        where: { id: Number(id) },
      });
      if (!store) return res.status(404).json({ error: 'store not found' });
      return res.status(200).json(store);
    }
    case 'PUT': {
      // Update a store
      const { name, email } = req.body;
      try {
        const updatedstore = await prisma.store.update({
          where: { id: Number(id) },
          data: { name, email },
        });
        return res.status(200).json(updatedstore);
      } catch (error) {
        return res.status(400).json({ error: 'Unable to update store' });
      }
    }
    case 'DELETE': {
      // Delete a store
      try {
        await prisma.store.delete({
          where: { id: Number(id) },
        });
        return res.status(204).end();
      } catch (error) {
        return res.status(400).json({ error: 'Unable to delete store' });
      }
    }
    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}
