import { Request, Response } from 'express'
import  prisma  from '../config/db'



export const createFamily = async (req: Request, res: Response) => {
try{
    const { name } = req.body;

    console.log('Creando familia con nombre:', req.body);

  const newFamily = await prisma.family.create({
    data: {  name }
  });

  return res.status(201).json(newFamily);
} catch (error) {
  res.status(500).json({ error: 'Error al crear la familia' });
}
}

export const getFamilies = async (req: Request, res: Response) => {
  const families = await prisma.family.findMany({
    include: { members: true, children: true }
  })

  res.json(families)
}