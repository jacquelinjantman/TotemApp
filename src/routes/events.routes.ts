import {Router} from 'express';
import { createEvent } from '../controllers/event.controllers';
import { getEventsByFamily } from '../controllers/event.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, createEvent);
router.get('/:familyId', authMiddleware, getEventsByFamily);

export default router