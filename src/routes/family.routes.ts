import { Router } from 'express'
import { createFamily, getFamilies } from '../controllers/family.controllers'

const router = Router()

router.post('/', createFamily);
router.get('/', getFamilies);

export default router