import { Router } from 'express';
import EventsController from '../../controllers/eventsController';

const router = Router();
const eventsController = new EventsController();

router.get('/', eventsController.listEvents.bind(eventsController));
router.post('/', eventsController.addEvent.bind(eventsController));
router.delete('/:id', eventsController.deleteEvent.bind(eventsController));

export default router;