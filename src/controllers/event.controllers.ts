import { Request, Response } from "express";
import prisma from "../config/db";


 export const createEvent = async (req: Request, res: Response) => {
    const {title, type, startAt, location, assignedTo, childId, familyId}= req.body
    if(!title || !type || !startAt|| !familyId){
        res.status(400).json({error: 'Faltan campos requeridos'})
        return
    }
      const NewEvent = await prisma.event.create({
    data: {
      title,
      type,
      startAt: new Date(startAt),
      location,
      assignedTo,
      childId,
      familyId
    }
  })

  res.status(201).json(NewEvent)
}

 export const getEventsByFamily = async (req: Request, res: Response) => {
  const familyId = req.params.familyId as string

  const events = await prisma.event.findMany({
    where: { familyId },
    include: { child: true },
    orderBy: { startAt: 'asc' }
  })

  res.json(events)
}
