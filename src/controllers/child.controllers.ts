import { Request, Response } from "express";
import prisma from "../config/db";


export const createChild = async (req: Request, res: Response) => {
    const {name, birthdate, schoolName,  doctorName ,familyId} = req.body

    if(!name || !birthdate || !familyId){
        res.status(400).json({error: 'Faltan campos requeridos'})
        return
    }

    const child = await prisma.child.create({
    data: {
      name,
      birthdate: new Date(birthdate),
      schoolName,
      doctorName,
      familyId
    }
  })

  res.status(201).json(child)
}

export const getChildrenByFamily = async (req: Request, res: Response) => {
  const familyId = req.params.familyId as string

  const children = await prisma.child.findMany({
    where: { familyId },
    include: { family: true }
  })

  res.json(children)
}