import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import {PrismaPg} from '@prisma/adapter-pg';

const prisma= new PrismaClient()


export default prisma;
