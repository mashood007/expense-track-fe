import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      // Get all stores
      const stores = await prisma.store.findMany();
      return res.status(200).json(stores);
    }
    case 'POST': {
      // Create a new store
      const { name, email } = req.body;
      try {
        const newStore = await prisma.store.create({
          data: { name },
        });
        return res.status(201).json(newStore);
      } catch (error) {
        return res.status(400).json({ error: 'Unable to create store' });
      }
    }
    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}
