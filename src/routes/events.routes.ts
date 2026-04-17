import {Router} from 'express';
import { createEvent } from '../controllers/event.controllers';
import { getEventsByFamily } from '../controllers/event.controllers';
import { updateEvent } from '../controllers/event.controllers';
import { deleteEvent } from '../controllers/event.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, createEvent);
router.get('/:familyId', authMiddleware, getEventsByFamily);
router.patch('/:id', authMiddleware, updateEvent);
router.delete('/:id', authMiddleware, deleteEvent);
export default router