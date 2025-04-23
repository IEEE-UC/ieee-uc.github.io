import { Router } from 'express';
import CalendarController from '../../controllers/calendarController';

const router = Router();
const calendarController = new CalendarController();

router.get('/', calendarController.getEvents.bind(calendarController));
router.post('/', calendarController.addEvent.bind(calendarController));
router.put('/:id', calendarController.updateEvent.bind(calendarController));
router.delete('/:id', calendarController.deleteEvent.bind(calendarController));

export default router;