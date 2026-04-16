import {Request, Response} from 'express'
import prismaClient from '@prisma/client'
import prisma from '../config/db'

export const createMember = async (req: Request, res: Response) => {
    const {displayName, role, familyId} = req.body

    if(!displayName|| !role || !familyId){
        res.status(400).json({error: 'Faltan campos requeridos'})
        return
    }


const member = await prisma.familyMember.create({
  data: {
    displayName,
    role,
    familyId
  }
})

res.status(201).json(member)
}


export const getMembers = async (req: Request, res: Response) => {
    const {familyId} = req.params.familyId as unknown as {familyId: string}
    const members = await prisma.familyMember.findMany ({
        where: {familyId}
    
    })
    res.json(members)}

    export const deleteMember = async (req: Request, res: Response) => {
    const { id } = req.query as unknown as { id: string };
    try {
        await prisma.familyMember.delete({
            where: {id: id }
        });
        res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(404).json({ error: "El usuario no existe" });
    }
};