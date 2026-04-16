import { Request, response, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/db";
import { error } from "node:console";

export const register = async (req: Request, res: Response) => {
    const {email, password, familyId} = req.body

if (!email || !password || !familyId) {
    res.status(400).json({error: 'Faltan campos requeridos'})
     return
    }

    const hashdPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: { email, password: hashdPassword, familyId }
    })
    res.status(201).json({ id:user.id, email: user.email  })

}

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body
    if (!email || !password) {
        res.status(400).json({error: 'Faltan datos requeridos'})

         return
        }

        const user = await prisma.user.findUnique({where: {email}})
        if (!user) {
            res.status(401).json ({error : 'Credenciales inválidas'}

            )
            return
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            res.status(401).json({error: 'Credenciales inválidas'})
            return
        }

        const token = jwt.sign({userId: user.id, familyId: user.familyId},
             process.env.JWT_SECRET!,
                {expiresIn: '7d'}
            )
            res.json({token})}