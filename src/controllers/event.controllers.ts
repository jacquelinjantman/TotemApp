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

export const updateEvent = async (req: Request, res: Response) =>
{
  const id = req.params.id as string
  const {title, type, startsAt, location, assignedTo} = req.body

  const event = await prisma.event.update({
    where: { id },
    data: {
      title,
      type,
      startAt: startsAt ? new Date(startsAt) : undefined,
      location,
      assignedTo,

    }
  })

  res.json(Event)
}

export const deleteEvent = async (req:Request, res:Response) => {
   const id = req.params.id as string
   try{
    await prisma.event.delete({where: {id}})
    res.json({message: 'evento eliminado'})
   }
   catch{
    res.status(404).json({error:'el evento no exite'})
   }
}