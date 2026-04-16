import { Router } from 'express'
import { createMember,  getMembers} from '../controllers/family-member.controller'

const router = Router()

router.post('/', createMember)
router.get('/:familyId', getMembers)

export default router