import { Router } from "express";
import { createChild, getChildrenByFamily } from "../controllers/child.controllers";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router()

router.post('/', authMiddleware,createChild)
router.get('/:familyId',authMiddleware, getChildrenByFamily)

export default router